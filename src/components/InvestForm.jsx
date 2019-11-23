import React from 'react';
import {getAccount, getWeb3} from "../web3/melonweb3";
import InputTextField from "./InputTextField";
import DropdownSelect from "./DropdownSelect";
//import DraggableForm from "./DraggableForm";
import { Participation } from "@melonproject/melonjs/contracts/fund/participation/Participation";
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';
import { CanonicalPriceFeed, StandardToken } from '@melonproject/melonjs';
var ApprovalTransaction;
var RequestInvestmentTransaction;
 

export default class Form extends React.Component{

    constructor(props) {
        super(props); 
        
        this.Token = null;
        this.assetPriceInEther = 0;   
        this.requesteShares = 0;
        this.investmentAmount = 0;

        this.state = {
            ready: false,
            investmentAsset: "",
            fields: [
                {
                    name: "investmentAsset",
                    input_type: "dropdown",
                    required: true, 
                    assets: this.props.allowedAssets,
                },
                {   
                    placeholder: "Amount",   
                    name: "amount",
                    input_type: "text",
                    required: true
                },
            ],
        }
        this.handleChange = this.handleChange.bind(this);
      }

      async componentDidMount(){
        this.env = await getWeb3();
        this.FundParticipation = new Participation(this.env, this.props.participationContractAddress);
        this.PriceFeed = new CanonicalPriceFeed(this.env, "0x4559ddd9e0a567bd8ab071ac106c1bc2d0c0b6ef");     
        this.setState({
            ready: true,
            accountAddress: await getAccount(),
            investmentAsset: ""
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
    
    closeInvestForm(){
        document.getElementById("InvestForm").style.display = "none";
    }

    closeRedeemForm(){
        document.getElementById("RedeemForm").style.display = "none";
    }

    submitInvestForm(){
        console.log(this.PriceFeed);
        console.log("Anfangprops:", this.props);
        console.log("Participation:", this.FundParticipation);
        console.log("State",this.state);
        this.investmentAmount = (toBigNumber(this.state.amount * 1e18)).toFixed(0);
        console.log("InvestmentAmount", this.investmentAmount);
        this.makeTransaction();
    }

    async makeTransaction(){
        console.log("Make Transaction");
        await this.prepareTransaction().catch((err) => {console.log(err)});
        const requestedShares = this.requestedShares.toString();
        const investmentAmountBN = await this.Token.getAllowance(this.state.accountAddress,this.props.participationContractAddress);
        console.log("requestedShares:",typeof requestedShares);
        console.log("investmentAmount:", typeof investmentAmountBN);
        console.log(investmentAmountBN);
        const investmentAmount = investmentAmountBN.toString();
        //RequestInvestmentTransaction = this.FundParticipation.requestInvestment(this.state.accountAddress, requestedSharesBN, investmentAmountBN, this.state.investmentAsset)
        console.log(RequestInvestmentTransaction);
        console.log("Account", this.account);
        //RequestInvestmentTransaction.send();
    }

    async prepareTransaction(){
        await this.calculateShares().catch((err) => {console.log(err)});;
        this.Token = new StandardToken(this.env, this.state.investmentAsset);
        console.log(this.Token);
        const investmentAmount = this.investmentAmount.toString();
        console.log(investmentAmount);        
        console.log("Contract-address",this.props.participationContractAddress);
        console.log("investmentAsset-Check", this.state.investmentAsset);
        const investmentAmountBigNumber = await this.Token.getAllowance(this.state.accountAddress,this.props.participationContractAddress);
        if(investmentAmountBigNumber.gte(investmentAmount)){
            console.log("Allowance ist ausriechend - nämlich:", investmentAmountBigNumber);
            return;
        } else {
            ApprovalTransaction = this.Token.approve(this.state.accountAddress, this.props.participationContractAddress, investmentAmountBigNumber);
            console.log(ApprovalTransaction);
            //await ApprovalTransaction.send();
        }
    }

    async calculateShares(){
        console.log("Shares berechnen");
        await this.getAssetPrice().catch((err) => {console.log(err)});;
        const assetPrice = this.assetPriceInEther;
        console.log("Resultat1:", assetPrice.toExponential());
        const requestedShares = this.investmentAmount*assetPrice.toFixed(0)/'1e18';///this.props.investments.sharePrice;
        console.log("Requested Shares", requestedShares/1e18);
        this.requestedShares = requestedShares.toFixed(0);
    }

    async getAssetPrice(){
        console.log("investmentAsset-Address:",this.state.investmentAsset);
        const assetPrice = await this.PriceFeed.getPrice(this.state.investmentAsset).catch((err) => {console.log(err)});
        console.log("getAssetPrice:",assetPrice);
        this.assetPriceInEther = assetPrice.price;
    }

    handleChange(event){
        //console.log(event.target);
        //console.log(event.target.value);
        //console.log(event.target.name);
        //console.log(this.state);

        if(event.target.name === "investmentAsset"){
            const target = event.target;
            const addressValue = target.value;
            const name = target.name;
            this.setState({
               [name]:addressValue
            })
            //console.log(this.state);
        } 
        if(event.target.name === "amount"){
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
            
            <div className="form-popup" id="InvestForm">
                <form  className="form-container" method="POST">
                    <h1 display={{color: 'black'}}>
                        Invest in the Fund
                    </h1>
                    {
                        this.state.fields.map(form => {
                        if (form.input_type === "text"){
                            return(
                                <InputTextField 
                                    name={form.name} 
                                    required={form.required} 
                                    placeholder={form.placeholder} 
                                    handleChange={this.handleChange}
                                    />
                                );
                            }

                        if (form.input_type === "dropdown"){
                            return (
                                <DropdownSelect
                                    name={form.name}
                                    required={form.required}
                                    assets={form.assets}
                                    handleChange={this.handleChange}
                                    />
                                    );
                                }
                            })
                        }
                        <button type="button" className="btn" onClick={() => this.submitInvestForm(this.props)}>Invest</button>
                        <button type="button" className="btn cancel" onClick={() => this.closeInvestForm()}>Close</button>
                    </form>
                </div>
               
                </div>
                );
            }
}


   