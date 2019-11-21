import React from 'react';
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';
import { VictoryPie } from 'victory-pie';
import { VictoryTooltip } from 'victory-tooltip';
import {BigNumber } from '@melonproject/melonjs';


export default class FundStructure extends React.Component{

  constructor(props) {
      super(props); 
      this.state = {
          ready: false,
          valueArray: []
      }
      this.valueArray = [];
    }

  async componentDidMount(){
      //console.log(this.props);
      await this.data_array(this.props.accounting);
      this.setState({
        ready: true,
        valueArray: this.valueArray
        });
  }

  async data_array(value_array){
    
    value_array = value_array.ownedAssets.filter((element) => {
        //console.log(element.decimals);
        //console.log((element.fundHoldingsHistory[element.fundHoldingsHistory.length -1].amount));
        let amountBN = toBigNumber(element.fundHoldingsHistory[element.fundHoldingsHistory.length -1].amount);
        let decimalsBN = toBigNumber(10^(element.decimals-2));
        let ethInWeiBN = toBigNumber('1e18');
        let resultBN = amountBN.div(decimalsBN).multipliedBy(element.lastPrice).div(ethInWeiBN);
        //let decr = ethInWeiBN.minus(decimalsBN);
        //console.log("BN", resultBN.toString(10));
        let amount = amountBN.comparedTo(decimalsBN);
        
        if ( amount > 0){
          //console.log(element.name, "größer");
          return true;
        } else {
          //console.log(element.name, "kleiner");
          return false;
        }
    });
  
     value_array.map((element, index) => {
       
        let dec = 18-element.decimals;
        //console.log("Element", element, "index", index);

        let amount = toBigNumber(element.fundHoldingsHistory[element.fundHoldingsHistory.length -1].amount).dividedBy(toBigNumber(toBigNumber(String(Math.pow(10,dec))))).multipliedBy(toBigNumber(element.lastPrice).dividedBy(toBigNumber("1E18")));
        //console.log("Amount:",amount.toString());
        this.valueArray[index] = {"symbol": element.symbol, "value": amount.toString(), "label": element.symbol};
    });
  }
  
  render(){
    
    if(!this.state.ready){
      return null;
    }
   
    return (
    <div className="FundStructure content-element">
        <h5>Fund-Structure</h5>
        <VictoryPie 
        //labelComponent={<VictoryTooltip/>}
        data={this.state.valueArray}
        x="symbol"
        y="value"
        labelRadius={170}
        colorScale={"warm"}
        labelPosition={"centroid"}
        animate ={{
            duration:1000,
            onLoad:{
              duration: 2000
            }
          }}
        />
    </div>
    )
  }
}