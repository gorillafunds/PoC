import React from "react";
import env,{getAccount} from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs/contracts/fund/participation/Participation";

export default class ExecuteRequestButton extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
            ready: false,
            accountAddress: getAccount()
        }
        this.FundParticipation = new Participation(env, this.props.participationContractAddress);
    }

    async componentDidMount(){
        const account = await getAccount();
        this.setState({
            ready: true,
            accountAddress: account
        });
        try{
            window.ethereum.on('accountsChanged', async()=>{
                this.setState({accountAddress: getAccount()})
            })}catch{
              console.log("No Metamask");
          }
    }

    executeRequest(){
        let ExcecuteRequestTransaction = this.FundParticipation.createTransaction('executeRequestFor',this.state.accountAddress,[this.state.accountAddress]);
        console.log(ExcecuteRequestTransaction);
        console.log("Account", this.state.accountAddress);
        ExcecuteRequestTransaction.send();
    }

    render(){
        return (
        <div>
            <div className="BaseButton ExecuteRequestButton" onClick={() => this.executeRequest()}>
                <h3>Excecute Request</h3>
            </div>
        </div>
        )
    }
}
