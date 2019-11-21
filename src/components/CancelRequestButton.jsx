import React from "react";
import env,{getAccount} from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs/contracts/fund/participation/Participation";

export default class CancelRequestButton extends React.Component{

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

    cancelRequest(){
        let CancelRequestTransaction = this.FundParticipation.createTransaction('cancelRequest',this.state.accountAddress,[]);
        console.log(CancelRequestTransaction);
        console.log("Account", this.account);
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
