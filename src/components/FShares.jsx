import React from "react"
import { getAccount, getWeb3 } from "../web3/melonweb3";
import SharesBox from "./SharesBox";
import { Participation, Shares } from "@melonproject/melonjs";
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';


export default class FShares extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
            ready: false,
            shares: "0"
        }
    }

    async componentDidMount(){
        
        this.env = await getWeb3().catch((err) => {console.log(err)});
        const account = await getAccount().catch(console.log("getAccount()"));
        this.setState({
            ready: true,
            accountAddress: account,
        });
        const shares = await this.getSharesFromApi();
        this.setState({
            ready: true,
            shares: shares
        });
        this.getSharesFromBlockchain();
        console.log("shares:", this.props.share);
        
       
        try{
            window.ethereum.on('accountsChanged', async()=>{
                this.setState({
                    accountAddress: await getAccount()
                })
            })}catch{
              console.log("No Metamask");
          }
    }


    async getSharesFromBlockchain(){
        this.Participation = new Participation(this.env, this.props.participationContractAddress);
        this.Shares = new Shares(this.env, this.props.share);
        const ownedShares = await this.Shares.getBalanceOf(this.state.accountAddress).catch((err) => {console.log(err)});   
        try{ 
        const ownedSharesDec = ownedShares.dividedBy(toBigNumber(1E18));
        this.setState({
            shares: ownedSharesDec.toString()
        })} catch (error){
            console.log("getSharesFromBlockchain:", error);
        }
    }

    async getSharesFromApi(){
        
        const account = this.state.accountAddress;
        const owner = this.props.investments.filter((element) => {
            return element.owner.id === account;
        });
        if(typeof owner !== 'undefined' && owner.length !== 0){
            console.log("Shares", owner[0].shares);
            return owner[0].shares/1e18
        } else {
            console.log("shares hier");
            return "0"
        }
    }

    render(){

        if(!this.state.ready){
            return null;
        }

        return (
            <div className="Shares">
                <SharesBox shares={this.state.shares}/>
        </div>
        )
    }
}