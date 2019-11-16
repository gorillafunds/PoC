import React from "react";
import env from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs/contracts/fund/participation/Participation";

export default class ExecuteRequestButton extends React.Component{

    constructor(props) {
        super(props); 
        this.account = env.client.givenProvider.selectedAddress;
        this.FundParticipation = new Participation(env, this.props.participationContractAddress);
    }

    executeRequest(){
        let ExcecuteRequestTransaction = this.FundParticipation.createTransaction('executeRequestFor',this.account,[this.account]);
        //console.log(ExcecuteRequestTransaction);
        //console.log("Account", this.account);
        //ExcecuteRequestTransaction.send();
    }

    render(){
        return (
        <div>
            <div className="BaseButton" onClick={() => this.executeRequest()}>
                Excecute Request
            </div>
        </div>
        )
    }
}
