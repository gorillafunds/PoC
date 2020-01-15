import React from "react"
import { getAccount, getWeb3 } from "../web3/melonweb3";
import SharesBox from "./SharesBox";
import { Accounting } from "@melonproject/melonjs";


export default class Shares extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
            ready: false,
            shares: "0"
        }
    }

    async componentDidMount(){
        
        this.env = await getWeb3();
        this.Accounting = new Accounting(this.env, this.props.accounting);
        const account = await getAccount().catch(console.log("getAccount()"));
        this.setState({
                accountAddress: account
        })

        //const shares = await this.getSharesFromBlockchain().catch(console.log("getSharesFromBlockchain()"));
        const shares = this.getSharesFromApi();

        this.setState({
            ready: true,
            shares: shares
        })
        
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
        if (this.state.shares){
        const calcResults = await this.Accounting.getCalculationResults();
        return calcResults.sharePrice;
        }
    }

    getSharesFromApi(){
        
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