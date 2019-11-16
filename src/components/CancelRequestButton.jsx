import React from "react";
import env from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs/contracts/fund/participation/Participation";

export default class CancelRequestButton extends React.Component{

    constructor(props) {
        super(props); 
        this.account = env.client.givenProvider.selectedAddress;
        this.FundParticipation = new Participation(env, this.props.participationContractAddress);
    }

    cancelRequest(){
        let CancelRequestTransaction = this.FundParticipation.createTransaction('cancelRequest',this.account,[]);
        //console.log(CancelRequestTransaction);
        //console.log("Account", this.account);
        //CancelRequestTransaction.send();
    }

    render(){
        return (
        <div>
            <div className="BaseButton" onClick={() => this.cancelRequest()}>
                Cancel Request
            </div>
        </div>
        )
    }
}
