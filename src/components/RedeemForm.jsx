import React from 'react';
import {getAccount, getWeb3} from "../web3/melonweb3";
import InputTextField from "./InputTextField";
import { Participation } from "../../node_modules/@melonproject/melonjs/contracts/fund/participation/Participation";
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';

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

    async submitRedeemForm(){
        
        console.log("state:",this.state);
        if(this.checkInput(this.state.shares)){
            const shares = toBigNumber(this.state.shares*1e18);
            const RedeemTransaction = this.FundParticipation.redeemQuantity(this.state.accountAddress, shares);
            const TransactionReceipt = await RedeemTransaction.prepare();
            const TransactionResult = RedeemTransaction.send(TransactionReceipt);
            const receipt = await new Promise((resolve, reject) => {
                TransactionResult.once('transactionHash', hash => console.log('Transaction Hash:', hash)); 
                TransactionResult.once('receipt', receipt => {
                    resolve(receipt);
                    this.setState({buttonState:'Success'});
                });
              });
            //receipt.catch(this.setState({buttonState: 'Error'}));
            console.log('Receipt:', JSON.stringify(receipt, undefined, 4));
        }
        this.setState({buttonState:'Redeem'});
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
                        <button type="button" className="btn" onClick={() => this.submitRedeemForm()}>{this.state.buttonState}</button>
                        <button type="button" className="btn cancel" onClick={() => this.closeRedeemForm()}>Close</button>
                    </form>
                    </div>
                    
                    </div>
                );
            }
}


   