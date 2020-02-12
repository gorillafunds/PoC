import React from 'react';
import { VictoryPie } from 'victory-pie';
import { VictoryTooltip } from 'victory-tooltip';
import { getWeb3 } from '../web3/melonweb3';


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
      //console.log("props:", this.props);
      this.env = await getWeb3();
      //console.log(this.props.holdingsHistory);
      this.getDataArray(this.props.holdingsHistory);
      this.setState({
        ready: true,
        valueArray: this.valueArray
        });
        //console.log(this.state.valueArray);
  }

  getDataArray(value_array){
    let timestamp = 946741110;
    timestamp = value_array[0].timestamp;
    value_array = value_array.filter((element) => {
        if ( element.timestamp === timestamp){
          return true;
        } else {
          return false;
        }
    });
  
    //console.log(value_array);

    value_array.forEach((element, index) => {
        //console.log("Element", element, "index", index);
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
