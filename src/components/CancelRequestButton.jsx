import React from "react";
import {getAccount, getWeb3} from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs/contracts/fund/participation/Participation";
import StateButton from "./StateButton";

export default class CancelRequestButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            buttonState: "init",
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

    async cancelRequest(){
        const CancelRequestTransaction = this.FundParticipation.cancelRequest(this.state.accountAddress);
        console.log(CancelRequestTransaction);
        console.log("Account", this.state.accountAddress);
        const TransactionReceipt = await CancelRequestTransaction.prepare();
        const TransactionResult = await CancelRequestTransaction.send(TransactionReceipt);
        if(TransactionResult === undefined){
            this.setState({buttonState:'pending'})
        }
        const receipt = await new Promise((resolve, reject) => {
            TransactionResult.once('transactionHash', hash => console.log('Transaction Hash:', hash)); 
            TransactionResult.once('receipt', receipt => {
                resolve(receipt);
                this.setState({buttonState:'mined'});
            });
          });

        console.log('Receipt:', JSON.stringify(receipt, undefined, 4));
    }

    render(){
        
        if(this.state.buttonState === 'init'){
            return (
                <div>
                    <div className="BaseButton CancelRequestButton" onClick={() => this.cancelRequest()}>
                        <h3>Cancel Request</h3>
                    </div>
                </div>
        )} else if (this.state.buttonState === 'pending'){
            return (
                <div>
                    <div className="BaseButton CancelRequestButton">
                        <h3>mining...</h3>
                    </div>
                </div>
            )} else if (this.state.buttonState === 'mined') {
            return (
                <div>
                    <div className="BaseButton CancelRequestButton">
                        <h3>Successfully Canceled</h3>  
                    </div>
                </div>
            )}
        }
    }

 /*return(
                <div>
                    <StateButton state={this.state.buttonState}/>
                </div>
            )*/