import React from 'react';
import {getAccount, getWeb3} from "../web3/melonweb3";
import InputTextField from "./InputTextField";
import { Participation } from "../../node_modules/@melonproject/melonjs/contracts/fund/participation/Participation";
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';
import { SelectionHelpers } from 'victory';

export default class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            buttonState: 'Redeem'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
              console.log("AccountsChanged - try - No Metamask");
          }
    }  

    closeRedeemForm(){
        document.getElementById("RedeemForm").style.display = "none";
        this.setState({buttonState:'Redeem'});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
     }

     checkHash(hash){
        console.log(hash);
        this.setState({buttonState: "Transaction pending"})
     }

    async submitRedeemForm(){
        console.log("state:",this.state);
        if(this.checkInput(this.state.shares)){
            try{
            const shares = toBigNumber(this.state.shares).multipliedBy(toBigNumber(1e18));
            console.log(shares.toString());
            const RedeemTransaction = this.FundParticipation.redeemQuantity(this.state.accountAddress, shares);
            console.log(RedeemTransaction);
            const TransactionReceipt = await RedeemTransaction.prepare();
            const TransactionResult = RedeemTransaction.send(TransactionReceipt);
            this.setState({buttonState: 'Confirm with Metamask'});            
            const receipt = await new Promise((resolve, reject) => {
                TransactionResult.on('transactionHash', hash => this.checkHash(hash)); 
                TransactionResult.on('receipt', async receipt => {
                    resolve(receipt);
                    this.setState({buttonState: 'Success'});
                    await this.sleep(3000);
                    this.setState({buttonState: 'Redeem'});
                });
                TransactionResult.on('error', err => reject(err));
              });
            //receipt.catch(this.setState({buttonState: 'Error'}));
            this.setState({buttonState: 'Success'});
            await this.sleep(3000);
            this.setState({buttonState: 'Redeem'});
            console.log('Receipt:', JSON.stringify(receipt, undefined, 4));
            } catch(err){
                this.setState({buttonState: 'Error'});
                console.log("Transaction failed:", err);
                await this.sleep(2000);
                this.setState({buttonState: 'Redeem'});
            }
        }
    }

    checkInput(shares){
        if(isNaN(shares) || shares < 0){
            this.setState({
                shares: "Please insert a valid Number"
            })
            return false;
        } else {
            return true;
        }
    }

    styleButton(){
        if(this.state.buttonState === "Success"){
            return  "btn SuccessButton";
        } else if (this.state.buttonState === "Confirm with Metamask"){
            return "btn ConfirmButton"
        } else if (this.state.buttonState === "Transaction pending"){
            return "btn PendingButton"
        } else if (this.state.buttonState === "Error"){
            return "btn ErrorButton"
        } else {
            return "btn";
        }
    }


    handleChange(event){
        if(event.target.name === "shares"){
            const target = event.target;
            const amountValue = target.value;
            this.setState({
                shares: amountValue
            })
        }
       
    }

    render() {
        
        return (

            <div>
                
                <div className="form-popup" id="RedeemForm">
                <form  className="form-container" method="POST">
                    <h1 display={{color: 'black'}}>
                        Redeeming Shares
                    </h1>
                    <h6>
                    How many Shares do you want to redeem?
                    </h6>
                                <InputTextField 
                                    name="shares" 
                                    required={true} 
                                    placeholder={"Enter Shares"} 
                                    value={this.state.shares}
                                    handleChange={this.handleChange}
                                />
                        <button type="button" className={this.styleButton()} onClick={() => this.submitRedeemForm()}>{this.state.buttonState}</button>
                        <button type="button" className="btn cancel" onClick={() => this.closeRedeemForm()}>Close</button>
                    </form>
                    </div>
                    
                    </div>
                );
            }
}


   