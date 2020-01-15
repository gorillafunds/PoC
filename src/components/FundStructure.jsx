import React from 'react';
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';
import { VictoryPie } from 'victory-pie';
import { VictoryTooltip } from 'victory-tooltip';
import {BigNumber } from '@melonproject/melonjs';
import { getWeb3 } from '../web3/melonweb3';
import { Accounting, Participation, CanonicalPriceFeed, StandardToken }  from '@melonproject/melonjs';


export default class FundStructure extends React.Component{

  constructor(props) {
      super(props);      
      this.state = {
          ready: false,
          valueArray: []
      }
      this.valueArray = [];
      this.holdings = [];
      this.calculated_holdings =[];
    }

  async componentDidMount(){
      console.log("props:", this.props);
      this.env = await getWeb3();
      // hole Fundholdings
      //this.Accounting = new Accounting(this.env, this.props.accounting.id);
      //console.log("Accounting:", this.Accounting);
      //const holdings = await this.Accounting.getFundHoldings();
      //console.log("holdings:", holdings);
      // hole Werte für Pricefeed
      //this.FundParticipation = new Participation(this.env, this.props.participationContractAddress);
      //const priceSource = await this.FundParticipation.getPriceSource();
      //console.log("priceSource", priceSource);
      //this.PriceFeed = new CanonicalPriceFeed(this.env, priceSource);
      //console.log("PriceFeed", this.PriceFeed);     
      // baue holdingsarray
      //await this.calculate_holdings(holdings);
      console.log(this.props.holdingsHistory);
      await this.getDataArray(this.props.holdingsHistory);
      //const calc_holdings = await Promise.all(this.calculated_holdings);
      //console.log("calculated_holdings",this.calc_holdings);
      //this.filter_holdings();
      this.setState({
        ready: true,
        valueArray: this.valueArray
        });
        console.log(this.state.valueArray);
  }

  /*async calculate_holdings(holdings){
      const calculated_holdings = holdings.map(async (element) => {
        const price = await this.get_Price(element.address);
        const symbol = await this.get_Symbol(element.address);
        console.log(symbol);
        console.log("element:", element, "price", price);
        return {'symbol': symbol, 'amount': Number(element.amount.div(toBigNumber('1e18')).toFixed(3)), 'value':  Number(element.amount.div(toBigNumber('1e36')).multipliedBy(price.price).toFixed(3)), 'label': symbol};
         });
      const calc_holdings = await Promise.all(calculated_holdings);
      this.calculated_holdings = calc_holdings;
      console.log(calc_holdings);

  }

  filter_holdings(){
        this.valueArray = this.calculated_holdings.filter(function(element){
            return element.value > 0.0001;
        })
  }

  get_Price(assetAddress){
      return this.PriceFeed.getPrice(assetAddress);
  }

  get_Symbol(address){

    const result = this.props.assets.filter(function(element){
        console.log("element.id:",element.id);
        console.log("address:", address)
        return element.id.toUpperCase() == address.toUpperCase();
    })
    console.log("result:", result);
    return result[0].symbol
  }*/
 
 /* for static Visualisation */
 

  async getDataArray(value_array){
    let timestamp = value_array[0].timestamp;

    value_array = value_array.filter((element) => {
        if ( element.timestamp === timestamp){
          return true;
        } else {
          return false;
        }
    });
    console.log(value_array);

    value_array.map((element, index) => {
        console.log("Element", element, "index", index);
        let amount = element.amount/element.asset.decimals;
        let value = element.assetGav/1e18;
        if(value > 0.01){
        this.valueArray[index] = {"symbol": element.asset.symbol, "amount": amount , "value": value, "label": element.asset.symbol};
        }
    });
  }
  
  
  render(){

    if(!this.state.ready){
      return null;
    }
   
    return (
    <div className="FundStructure content-element">
        <h5>Fund-Structure: Assets greater than 0.01 ETH</h5>
        <VictoryPie 
        //labelComponent={<VictoryTooltip/>}
        data={this.state.valueArray}
        x="symbol"
        y="value"
        padAngle={({ data }) => `${data.value}`}
        //innerRadius = {50}
        labelRadius={165}
        colorScale={"warm"}
        labelPosition={"centroid"}
        animate ={{
            duration:1000,
            onLoad:{
              duration: 1000
            }
          }}
        />
    </div>
    )
  }
}