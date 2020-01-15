import React from "react";
import {getAccount, getWeb3} from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs/contracts/fund/participation/Participation";
import StateButton from "./StateButton";


export default class ExecuteRequestButton extends React.Component{

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

    async executeRequest(){
        if(this.state.buttonState === 'init'){
        const ExcecuteRequestTransaction = this.FundParticipation.executeRequestFor(this.state.accountAddress, this.state.accountAddress);
        console.log(ExcecuteRequestTransaction);
        console.log("Account", this.state.accountAddress);
        const TransactionReceipt = await ExcecuteRequestTransaction.prepare();
        const TransactionResult = await ExcecuteRequestTransaction.send(TransactionReceipt);

        /*const receipt = await new Promise((resolve, reject) => {
            TransactionResult.once('transactionHash', hash => console.log('Transaction Hash:', hash));
            TransactionResult.once('receipt', receipt => resolve(receipt));
          });
          console.log('Receipt:', JSON.stringify(receipt, undefined, 4));*/
        }
    }

    render(){

            if(this.state.buttonState === 'init'){
                return (
                    <div>
                        <div className="BaseButton ExecuteRequestButton" onClick={() => this.executeRequest()}>
                            <h3>Execute Request</h3>
                        </div>
                    </div>
            )} else if (this.state.buttonState === 'pending'){
                return (
                        <div>
                            <div className="BaseButton ExecuteRequestButton">
                                <h3>mining...</h3>
                            </div>
                        </div>
            )} else if (this.state.buttonState === 'mined') {
                    return (
                        <div>
                            <div className="BaseButton ExecuteRequestButton">
                                <h3>Successfully Canceled</h3>  
                            </div>
                        </div>
                    )}
             
            
        }
    }

/*
          <div>
                    <StateButton state={this.state.buttonState} onClick={() => this.cancelRequest()}/>
                </div> 
        */