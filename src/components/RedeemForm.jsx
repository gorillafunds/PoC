import React from 'react';
import env from "../web3/melonweb3";
import InputTextField from "./InputTextField";
import DropdownSelect from "./DropdownSelect";
import { Participation } from "../../node_modules/@melonproject/melonjs/contracts/fund/participation/Participation";
import BigNumber from "bignumber.js";
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';
var Transaction;
 

export default class Form extends React.Component{

    constructor(props) {
        super(props); 
        this.account = env.client.givenProvider.selectedAddress;
        this.FundParticipation = new Participation(env, this.props.participationContractAddress);

        this.state = {
            fields: [
                {
                    placeholder: "Shares",
                    name: "shares",
                    input_type: "text",
                    required: true
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
      }

    
    
    closeInvestForm(){
        document.getElementById("InvestForm").style.display = "none";
    }

    closeRedeemForm(){
        document.getElementById("RedeemForm").style.display = "none";
    }

    /*checkAmount(){

    }

    checkAddress(){
        
    }*/

    submitRedeemForm(){
        //console.log(this.props);
        //console.log("state:",this.state);
        let shares = toBigNumber(this.state.shares*1e18);
        shares = shares.toFixed(0);
        //console.log(shares);
        Transaction = this.FundParticipation.createTransaction('redeemQuantity', this.account, [shares]);
        //console.log("RedeemTransaction", Transaction);
        //console.log("Account", this.account);
        //Transaction.send();
    }

    handleChange(event){
        //console.log(event.target);
        //console.log(event.target.value);
        //console.log(event.target.name);
        //console.log(this.state);

        if(event.target.name === "shares"){
            const target = event.target;
            const amountValue = target.value;
            const name = target.name;
            this.setState({
                [name]:amountValue
            })
        }
       
    }

    render() {
        
        return (

            <div>
            
                <div class="form-popup" id="RedeemForm">
                <form  class="form-container" method="POST">
                    <h1 display={{color: 'black'}}>
                        Redeeming Shares
                    </h1>
                    <h6>
                        How many Shares do you want to redeem?
                    </h6>

                    {
                        this.state.fields.map(form => {
                        if (form.input_type === "text"){
                            return(
                                <InputTextField 
                                    type="text" 
                                    name="shares" 
                                    required={true} 
                                    autoComplete="off" 
                                    placeholder={"Enter Shares"} 
                                    handleChange={this.handleChange}
                                    />
                                );
                            }

                        if (form.input_type === "dropdown"){
                            return (
                                <DropdownSelect
                                    name={form.name}
                                    placeholder={form.placeholder}
                                    required={form.required}
                                    val={form.values}
                                    key={form.placeholder}
                                    handleChange={this.handleChange}
                                    />
                                    );
                                }
                            })
                        }
                        <button type="button" class="btn" onClick={() => this.submitRedeemForm()}>Redeem</button>
                        <button type="button" class="btn cancel" onClick={() => this.closeRedeemForm()}>Close</button>
                    </form>
                    </div>
                    </div>
                );
            }
}


   