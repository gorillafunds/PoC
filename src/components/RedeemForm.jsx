import React from 'react';
import {getAccount, getWeb3} from "../web3/melonweb3";
import InputTextField from "./InputTextField";
import DropdownSelect from "./DropdownSelect";
import DraggableForm from "./DraggableForm";
import { Participation } from "../../node_modules/@melonproject/melonjs/contracts/fund/participation/Participation";
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';
var Transaction;
 

export default class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            fields: [
                {
                    placeholder: "Shares",
                    name: "shares",
                    input_type: "text",
                    required: true
                }
            ]
        }
       
        //console.log(this.FundParticipation);
        this.handleChange = this.handleChange.bind(this);
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
              //console.log("No Metamask");
          }
    }  
    
    closeInvestForm(){
        document.getElementById("InvestForm").style.display = "none";
    }

    closeRedeemForm(){
        document.getElementById("RedeemForm").style.display = "none";
    }

    submitRedeemForm(){
        ////console.log(this.props);
        ////console.log("state:",this.state);
        let shares = toBigNumber(this.state.shares*1e18);
        shares = shares.toFixed(0);
        ////console.log(shares);
        //Transaction = this.FundParticipation.createTransaction('redeemQuantity', this.state.accountAddress, [shares]);
        //console.log("RedeemTransaction", Transaction);
        //console.log("Account", this.account);
        //Transaction.send();
    }

    handleChange(event){

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
                
                <div className="form-popup" id="RedeemForm">
                <form  className="form-container" method="POST">
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
                        <button type="button" className="btn" onClick={() => this.submitRedeemForm()}>Redeem</button>
                        <button type="button" className="btn cancel" onClick={() => this.closeRedeemForm()}>Close</button>
                    </form>
                    </div>
                    
                    </div>
                );
            }
}


   