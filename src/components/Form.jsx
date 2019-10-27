import React from 'react';
import ParticipationABI from "../../node_modules/@melonproject/protocol/out/Participation.abi.json";
import web3 from "../web3/web3";
import InputTextField from "./InputTextField";
import DropdownSelect from "./DropdownSelect";
// import Bignumber from "bignumber";

const account = web3.currentProvider.selectedAddress;

function closeInvestForm(){
    document.getElementById("InvestForm").style.display = "none";
}

function closeRedeemForm(){
    document.getElementById("RedeemForm").style.display = "none";
}

function submitInvestForm(props){
    console.log(props);
    const participationContract = new web3.Contract(ParticipationABI, props.participationContractAddress);
    console.log(participationContract);
    console.log(props.All)
    participationContract.methods.requestInvestment(0, 0, props.allowedAssets[0].id).send({from: account}).then(console.log).catch(console.log);
}

function submitRedeemForm(props){
    console.log(props);
    const participationContract = new web3.Contract(ParticipationABI, props.participationContractAddress);
    console.log(participationContract);
    console.log(props.All)
    participationContract.methods.redeemQuantity(0).send({from: account}).then(console.log).catch(console.log);
}

function handleChange(event){
 //    this.setState({
 //       [event.currentarget.name]: event.currentTarget.value
 //   });
}

export default (props) => {

console.log("Form Testen", props);

let stateInvest = {
        fields: [
            {
                placeholder: "Investable Asset",
                name: "investmentAsset",
                input_type: "dropdown",
                required: true, 
                assets: props.allowedAssets
            },
            {   
                placeholder: "Amount",
                name: "amount",
                input_type: "text",
                required: true
            }
        ]
    }

let stateRedeem = {
        fields: [
            {
                placeholder: "Shares",
                name: "shares",
                input_type: "text",
                required: true
            }
        ]
    }
    
    return (

        <div>
        <div class="form-popup" id="InvestForm">
            <form  class="form-container" method="POST">
                <h1 display={{color: 'black'}}>
                    Invest in the Fund
                </h1>
                {
                    stateInvest.fields.map(form => {
                    if (form.input_type === "text"){
                        return(
                            <InputTextField 
                                name={form.name} 
                                required={form.required} 
                                placeholder={form.placeholder} 
                                handleChange={handleChange}
                                />
                            );
                        }

                    if (form.input_type === "dropdown"){
                        return (
                            <DropdownSelect
                                name={form.name}
                                placeholder={form.placeholder}
                                required={form.required}
                                assets={form.assets}
                                handleChange={handleChange}
                                />
                                );
                            }
                        })
                    }
                    <button type="button" class="btn" onClick={() => submitInvestForm(props)}>Invest</button>
                    <button type="button" class="btn cancel" onClick={() => closeInvestForm()}>Close</button>
                </form>
            </div>

            <div class="form-popup" id="RedeemForm">
               <form  class="form-container" method="POST">
                <h1 display={{color: 'black'}}>
                    Redeeming Shares
                </h1>
                <h6>
                    How many Shares do you want to redeem?
                </h6>

                {
                    stateRedeem.fields.map(form => {
                    if (form.input_type === "text"){
                        return(
                            <InputTextField 
                                type="text" 
                                name="shares" 
                                required={true} 
                                autoComplete="off" 
                                placeholder={"Enter Shares"} 
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
                                />
                                );
                            }
                        })
                    }
                    <button type="button" class="btn" onClick={() => submitRedeemForm(props)}>Redeem</button>
                    <button type="button" class="btn cancel" onClick={() => closeRedeemForm()}>Close</button>
                </form>
                </div>
                </div>
            );
        }

   /*     
    <button type="submit" class="btn" onClick={() => redeemAmount()}>Redeem</button>
                    
   
   <div class="form-popup" id="RedeemForm">
        <form class="form-container" method="POST">
            <h1>Redeem Shares</h1>
            <h6>
            Are you sure that you want to redeem shares from the fund {props.fundaddress}?
            </h6>

            <label for="shares"><b>Shares</b></label>
            <input type="text" id="shares" placeholder="Enter Shares" name="shares" required/>
            <InputTextField 
                type="text" 
                name={"shares"} 
                required={true} 
                autoComplete="off" 
                placeholder={"Enter Shares"} 
                onChange={_handleChange}
                />

            <button type="button" class="btn cancel" onClick={closeRedeemForm}>Close</button>
        </form>
        </div>
    </div>
    )

     closeInvestmentForm(){
        document.getElementById("InvestForm").style.display = "none";
    }

    closeRedeemForm(){
        document.getElementById("RedeemForm").style.display = "none";
    }

    investAmount(props){
        console.log(props);
        alert("Invested");
    }*/

     //alert(props.participationContractAddress);
    //alert(ether);
    /*let requestedShares = document.getElementById("amount").value;
    let investmentAmount = document.getElementById("amount").value;
    let investmentAsset = document.getElementById("investmentAsset").label; 
    let investmentAssetAddress = document.getElementById("investmentAsset").value;
    let participationContractAddress = props.participationContractAddress;

    const contractInstance = web3.eth.contract(ParticipationABI).at(contractAddress);
    contractInstance.executeInvest(requestedShares, investmentAmount, investmentAssetAddress),(err,res)=>{
     //Action to show all is clear
        if(!error){
            console.log("successfull invested;")
        } else {
             console.log("Error ocurred2", error);
        }
    }
    //invest(,{0.1})

    /*alert(requestedShares);
    alert(investmentAmount);
    alert(investmentAsset);
    alert(investmentAssetAddress);
    alert(participationContractAddress);*/
    //alert(gas);

