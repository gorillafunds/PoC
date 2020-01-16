import React from 'react';
import { getWeb3, getAccount } from "../web3/melonweb3";
import { Accounting } from "@melonproject/melonjs";

const EtherInWei = 1E18;

export default class FactSheetItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            ready: false,
            sharePrice: this.props.shareprice
        }
    }

    async componentDidMount(){
          
        this.env = await getWeb3().catch((err) => {console.log(err)});
        const account = await getAccount().catch((err) => {console.log(err)});
        this.Accounting = new Accounting(this.env, this.props.accountingContractAddress);
        const calcResults = await this.Accounting.getCalculationResults().catch((err) => {console.log(err)});
        //console.log(calcResults);   
        try{
            this.setState({
                accountAddress: account,
                sharePrice: calcResults.sharePrice.toFixed(3),
                ready: true,
            });
        } catch(err){
            console.log(err);
            this.setState({
                ready: true,
            })
        }
    }

    render(){
        if(this.props.aum){
            return (
                <div>
                    {(this.state.sharePrice/EtherInWei).toFixed(3)}
                </div>
                )} else {
            return(
                <div>
                    {(this.state.sharePrice/EtherInWei*this.props.totalsupply/EtherInWei).toFixed(3)}
                </div>
            )
        }
    }
}