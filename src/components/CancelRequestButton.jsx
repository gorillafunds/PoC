import React from "react";
import {getAccount, getWeb3} from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs/contracts/fund/participation/Participation";

export default class CancelRequestButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false
        }
    }

    async componentDidMount(){
        this.env = await getWeb3();
        this.FundParticipation = new Participation(this.env, this.props.participationContractAddress);
        this.setState({
            ready: true,
            accountAddress: await getAccount()
        });
        try{
            window.ethereum.on('accountsChanged', async()=>{
                this.setState({
                    accountAddress: await getAccount()
                })
            })}catch{
              console.log("No Metamask");
          }
    }

    cancelRequest(){
        //let CancelRequestTransaction = this.FundParticipation.createTransaction('cancelRequest',this.state.accountAddress,[]);
        //console.log(CancelRequestTransaction);
        console.log("Account", this.state.accountAddress);
        //CancelRequestTransaction.send();
    }

    render(){
        return (
        <div>
            <div className="BaseButton CancelRequestButton" onClick={() => this.cancelRequest()}>
                <h3>Cancel Request</h3>
            </div>
        </div>
        )
    }
}
