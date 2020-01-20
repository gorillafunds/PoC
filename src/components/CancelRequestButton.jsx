import React from "react";
import {getAccount, getWeb3} from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs/contracts/fund/participation/Participation";

export default class CancelRequestButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            buttonState: "Cancel Request",
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

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
     }

    checkHash(hash){
        console.log(hash);
        this.setState({buttonState: "Transaction pending"});
     }

     styleButton(){
        if(this.state.buttonState === "Success"){
            return  "BaseButton CancelRequestButton Success";
        } else if (this.state.buttonState === "Cancel Request"){
            return "BaseButton CancelRequestButton";
        } else if (this.state.buttonState === "Confirm with Metamask"){
            return "BaseButton CancelRequestButton";
        } else if (this.state.buttonState === "Transaction pending"){
            return "BaseButton CancelRequestButton Pending";
        } else if (this.state.buttonState === "Error"){
            return "BaseButton CancelRequestButton Error";
        } else {
            return "BaseButton CancelRequestButton";
        }
    }

    async cancelRequest(){
        if(this.state.buttonState === 'Cancel Request'){
            try{
                const CancelRequestTransaction = this.FundParticipation.cancelRequest(this.state.accountAddress);
                const TransactionReceipt = await CancelRequestTransaction.prepare();
                const TransactionResult = CancelRequestTransaction.send(TransactionReceipt);
                this.setState({buttonState: 'Confirm with Metamask'});            
                const receipt = await new Promise((resolve, reject) => {
                    TransactionResult.on('transactionHash', hash => this.checkHash(hash)); 
                    TransactionResult.on('receipt', async receipt => {
                        resolve(receipt);
                        this.setState({buttonState: 'Success'});
                    });
                    TransactionResult.on('error', err => reject(err));
                    
                });
                this.setState({buttonState: 'Success'});
                console.log('Receipt:', JSON.stringify(receipt, undefined, 4));
            } catch (err){
                this.setState({buttonState: 'Error'});
                console.log("Transaction failed", err);
                await this.sleep(3000);
                this.setState({buttonState: 'Execute Request'});
            }
        }
    }

    render(){
            return (
                <div>
                    <div className={this.styleButton()} onClick={() => this.cancelRequest()}>
                        <h3>{this.state.buttonState}</h3>
                    </div>
                </div>
                )
            }
        }

 