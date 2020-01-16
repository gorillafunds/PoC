import React from 'react';
import { getAccount, getWeb3 } from "../web3/melonweb3";
import InputTextField from "./InputTextField";
import DropdownSelect from "./DropdownSelect";
import { Participation, Accounting, KyberPriceFeed, StandardToken } from "@melonproject/melonjs";
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';

export default class Form extends React.Component{

    constructor(props) {
        super(props); 
        
        this.Token = null;
        this.requestedShares = 0;
        this.investmentAmount = 0;
    
        // prepare state

        this.state = {
            accountAddress: "",
            amount: "",
            shares: "",
            shareCostInAsset: "",
            investmentAsset: "",
            factorAToS: 0,
            factorSToA: 0,
            sharePrice: 0,
            ready: false,
            tokenDecimals: 18,
            buttonState: 'Invest',
        }

        // bind 

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    // prepare 

    async componentDidMount(){
        
        this.env = await getWeb3();
        this.FundParticipation = new Participation(this.env, this.props.participationContractAddress);
        this.Accounting = new Accounting(this.env, this.props.accountingContractAddress);
        const priceSource = await this.Accounting.getPriceSource();
        this.PriceFeed = new KyberPriceFeed(this.env, priceSource); 
        const account = await getAccount();
        const sharePrice = await this.getSharePrice();

        console.log("Investform:");
        console.table({
                "PriceSource" : priceSource,
                "Share-Price" : sharePrice.toExponential(),
                "accountAddress" : account,
            })
       
        this.setState({
            accountAddress: account,
            investmentAsset: "", 
            sharePrice: sharePrice,
            ready: true,
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

    // handle Input

    handleSubmit(event) {
        event.preventDefault();
    }

    // handle change

    async handleChange(event){
        
        // dropdown

        if(event.target.name === "investmentAsset"){

            const target = event.target;
            const value = target.value;
            //this.Token = new StandardToken(this.env, value);
            //const tokenDecimals = this.Token.getDecimals();
            //console.log(this.Token);

            console.log("value:", value);

            let tokenDecimals = 18;
            if (value === "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"){
                tokenDecimals = 6;
            } else if (value === "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"){
                tokenDecimals = 8;
            } else if (value === "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf"){
                tokenDecimals = 9;
            } else {
                tokenDecimals = 18;
            }
            console.log("tokendecimals:", tokenDecimals);

            this.setState({
               investmentAsset : value,
               amount : "",
               shares : "",
               tokenDecimals: tokenDecimals
            })
            
            if(value !== ""){
                this.getCalculationFactors(value, tokenDecimals);
                console.log(this.state);
            }
        } 
       
        // inputtextfield shares

        if(event.target.name === "shares"){
            const target = event.target;
            const sharesValue =  target.value;
            console.log("sharesValue:", sharesValue);
            if (this.state.investmentAsset !== ""){
                this.setState({
                    shares : sharesValue,
                    amount : toBigNumber(sharesValue).multipliedBy(this.state.factorAToS)
                })
            console.log(this.state);
            } else {
                this.setState({
                    shares: "Choose your asset first",
                })
            }
        }

        // inputtextfield amount

        if(event.target.name === "amount"){
            const target = event.target;
            const amount = target.value;
            if (this.state.investmentAsset !== ""){
                this.setState({
                    amount : amount,
                    shares : amount*this.state.factorSToA
                })
            console.log(this.state);
            } else {
                this.setState({
                    amount : "Choose your asset first", 
                })
            }
        }
    }

    // Calculations
    
    // get Share Price for the fund 

    async getSharePrice(){
       const calcResults = await this.Accounting.getCalculationResults();
       return calcResults.sharePrice;
    }

    // calculate Factors

    async getCalculationFactors(asset_address, token_decimals){
       
        let factor = toBigNumber(10).exponentiatedBy(18);
        console.log("Faktor:", factor);

        const shareCostInAsset = await this.Accounting.getShareCostInAsset(factor, asset_address);
        console.log("shareCostInAsset:", shareCostInAsset.toExponential());
        if(token_decimals !== 18){
            const factor = toBigNumber(10).exponentiatedBy(token_decimals); 
            this.setState({
                factorSToA : factor.dividedBy(shareCostInAsset),
                factorAToS : shareCostInAsset.dividedBy(factor)
            })} else {
            this.setState({
                factorSToA : factor.dividedBy(shareCostInAsset),
                factorAToS : shareCostInAsset.dividedBy(factor)
                })
            }
        
        console.log(this.state.factorSToA.toExponential());
        console.log(this.state.factorAToS.toExponential());
    } 

    // input validation
    
    checkInput(amountOrShares){
        if(isNaN(amountOrShares) || amountOrShares <= 0 ){
            this.setState({
                amount: "Please insert valid Numbers",
                shares: "Please insert valid Numbers"
            })
            return false;
        } else {
            return true;
        }
    }

    //  web3 activated?

    checkWeb3(address){
        if(address === "" || address === `undefined` || address === null){
            this.setState({
                amount: "Activate Metamask and reload",
                shares: "Activate Metamask and reload"
            })
            return false;
        } else {
            return true;
        }
    }

    // close InvestForm

    closeInvestForm(){
        document.getElementById("InvestForm").style.display = "none";
        this.setState({buttonState:'Invest'});
    }

    // Submit InvestForm and validate input

    async submitInvestForm(){

        console.table({
            "requestedShares:": this.requestedShares,
            "investmentAmount:": this.investmentAmount,
        });

        if(this.checkInput(this.state.amount) && this.checkInput(this.state.shares) && this.checkWeb3(this.state.accountAddress)){
           // await this.makeTransaction().catch((err) => {console.log(err)});
           alert("Deactivated at the moment");
        }
    }

    // Transaction - Logics

    async makeTransaction(){
        this.Token = new StandardToken(this.env, this.state.investmentAsset);
        const investmentDecimals = this.state.tokenDecimals; //await this.Token.getDecimals();
        this.requestedShares = toBigNumber(this.state.shares).multipliedBy(toBigNumber(1E18));
        this.investmentAmount = (toBigNumber(this.state.amount).times(toBigNumber(10).exponentiatedBy(investmentDecimals))).toFixed(0);
        this.investmentAmount = toBigNumber(this.investmentAmount);

        // Logging
        console.log("makeTransaction()");
        console.table({
            "RequestedShares": this.requestedShares,
            "InvestmentAmount:": this.investmentAmount
        })

        // prepare Transaction 
        await this.prepareTransaction().catch((err) => {console.log(err)});
        const RequestInvestmentTransaction = this.FundParticipation.requestInvestment(this.state.accountAddress, this.requestedShares, this.investmentAmount, this.state.investmentAsset);
        const TransactionReceipt = await RequestInvestmentTransaction.prepare();
        const TransactionResult = RequestInvestmentTransaction.send(TransactionReceipt);

        const receipt = await new Promise((resolve) => {
            TransactionResult.once('transactionHash', hash => console.log('Transaction Hash:', hash));
            TransactionResult.once('receipt', receipt => {
                resolve(receipt)
                this.setState({buttonState:'Success'});
            });
          });
          //console.log('Receipt:', JSON.stringify(receipt, undefined, 4));
          this.setState({buttonState:'Invest'});
    }

    async prepareTransaction(){
        
        //const investmentAmount = toBigNumber(this.investmentAmount);
        console.log("investmentAmount:", this.investmentAmount);

        // Logging
        console.log("prepareTransaction()");
        console.table({
            "investmentAmount:" : this.investmentAmount.toString(),        
             "Contract-address" : this.props.participationContractAddress,
            "InvestmentAsset-Check:" : this.state.investmentAsset
        })

        const investmentAmountAllowance = await this.Token.getAllowance(this.state.accountAddress,this.props.participationContractAddress);
        // if amount gt allowance go on else approve
        if(investmentAmountAllowance.gte(this.investmentAmount)){
            return;
        } else {
            // approve Token-Transfer
            console.table({"account:" : this.state.accountAddress, "participationContract" : this.props.participationContractAddress, "investmentAmount:" : this.investmentAmount});
            const ApprovalTransaction = this.Token.approve(this.state.accountAddress, this.props.participationContractAddress, this.investmentAmount);
            const TransactionReceipt = await ApprovalTransaction.prepare();
            const TransactionResult = await ApprovalTransaction.send(TransactionReceipt);
            const receipt = await new Promise((resolve) => {
                TransactionResult.once('transactionHash', hash => console.log('Transaction Hash:', hash));
                TransactionResult.once('receipt', receipt => resolve(receipt));
              });
              console.log('Receipt:', JSON.stringify(receipt, undefined, 4));
        }
    }    

    // Render Form

    render() {
        
        return (

            <div className="form-popup" id="InvestForm">
                <form  className="form-container" onSubmit={this.handleSubmit}>
                    <h1 display={{color: 'black'}}>
                        Invest in the Fund
                    </h1>
                    
                    <DropdownSelect
                        name = "investmentAsset"
                        input_tpye = "dropdown"
                        required  = {true}
                        assets = {this.props.allowedAssets}
                        handleChange = {this.handleChange}
                        />
                        Shares:
                      <InputTextField 
                        name = "shares"
                        placeholder = "Shares"
                        required = {true} 
                        handleChange = {this.handleChange}
                        value = {this.state.shares}
                        />
                        Investment:
                        <InputTextField 
                         name = "amount"
                         placeholder = "Amount"
                         required = {true} 
                         handleChange = {this.handleChange}
                         value = {this.state.amount}
                         />
                        <br/>
                        <button type="button" className="btn" onClick={() => this.submitInvestForm(this.props)}>{this.state.buttonState}</button>
                        <button type="button" className="btn cancel" onClick={() => this.closeInvestForm()}>Close</button>
                    </form>
                </div>
            );
        }
}


   