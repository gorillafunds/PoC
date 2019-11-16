import React from 'react';
import { VictoryLine } from 'victory-line';
import {VictoryChart } from 'victory-chart';
import { VictoryTheme } from 'victory';
import { VictoryZoomContainer } from 'victory-zoom-container';
import { VictoryAxis } from 'victory-axis';

export default class PerformanceChart extends React.Component{

    constructor(props){
        super(props);
        this.dataArray = this.data_array(this.props.calculationshistory);
        this.state = {
            data: this.dataArray,
            domain: {x:[this.props.calculationshistory[0].index, this.props.calculationshistory[this.props.calculationshistory.length-1].index]},
            }
        //console.log(this.state);
        this.getXTicks(this.state.domain);
    }

    //this.getXTicks(domain);

    state = {
        data: this.props.calculationshistory,
        domain: this.zoomDomain,
        ticks: [],
        format: []
    }

    ////console.log("Start", this.state.domain);
    
    handleZoom(domain){
        this.setState({ zoomDomain: domain });
        //console.log("Domain",domain);
        this.ticks = this.getXTicks(domain);
    }

    getRange(domain){
        return domain.x[1]-domain.x[0];
    }

    getXStartValue(domain){
        let index = domain.x[0].toFixed(0);
        //console.log("index:",index);
        return index;
    }

    getIncrement(domain){
        return (this.getRange(domain)/8).toFixed(0);
    }

    getXTicks(domain){
        let ticks = [];
        let div = this.getIncrement(domain);
        let xStart = this.getXStartValue(domain);
        for (let i = 0; i < this.getRange(domain); i++){
            if(i%div === 0){
                ticks.push(Number(i) + Number(xStart));
            }
        } 
        //console.log(ticks);
        this.state.ticks = ticks;
        this.getTicksFormat();
    }

    getTicksFormat(){
        const ticksFormat = this.state.ticks.map(x => this.state.data[x].x);
        //console.log(ticksFormat);
        this.state.format = ticksFormat;
    }

    data_array(value_array){
        const startvalue = Number(value_array[0]["sharePrice"]);
        //console.log("Startvalue:",startvalue)
        value_array.map((element, index) => {
             let date = new Date(element["timestamp"]*1000);
             element["x"] = date.toLocaleDateString();
             element["index"] = index;
             //element["x"] = date.getDay()+"."+date.getMonth()
        });
        value_array.map((element) => {
            element["y"] = Number(element["sharePrice"])/startvalue*100-100;
        });
        //console.log(value_array);
       
        return value_array;
    }


    render(){
        
        return(
            <div className="PerformanceChart content-element">
                <h5>Performance since Inception in %</h5>
                <VictoryChart 
                    theme={VictoryTheme.material}
                    scale={{x:"time", y:"linear"}}
                    containerComponent={
                            <VictoryZoomContainer 
                                responsive={true}
                                zoomDimension="x"
                                zoomDomain = {this.zoomDomain}
                                onZoomDomainChange={(domain) => this.handleZoom(domain)}
                            />
                    }>
                    <VictoryAxis 
                        style = {{tickLabels: {angle: 45, fontSize: 6}}}
                        tickValues={this.state.ticks}
                        tickFormat={this.state.format}
                        tickCount = {8}
                    />
                    <VictoryAxis dependentAxis crossAxis
                     axisLabel={{fontSize:12}}
                     width={400}/>
                    <VictoryLine 
                    data = {this.state.data}
                    style={{
                        data: {stroke: "teal"},
                        parent: { border: "1px solid yellow"}
                    }}
                    animate ={{
                        duration: 1000,
                        onLoad: { duration: 500 }
                    }}/>
                </VictoryChart>
            </div>
        )
    }
}
