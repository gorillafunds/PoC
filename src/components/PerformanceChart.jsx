import React from 'react';
import { VictoryLine } from 'victory-line';
import {VictoryChart } from 'victory-chart';
import { VictoryTheme } from 'victory';
import { VictoryZoomContainer } from 'victory-zoom-container';

let data_array = (value_array) => {
    value_array.shift();
    const startvalue = Number(value_array[0]["gav"]);
    console.log("Startvalue:",startvalue)
    value_array.map((element, index) => {
        element["x"] = index;
    });
    value_array.map((element) => {
        element["y"] = Number(element["gav"])/startvalue*100 -100;
    });
    console.log(value_array);
   
    return value_array;
}

export default (props) => (
    <div className="PerformanceChart content-element">
        
        <h5>Performance-Chart</h5>
        <VictoryChart 
            theme={VictoryTheme.material}
            containerComponent={
                    <VictoryZoomContainer responsive={true}
                      zoomDimension="x"
                    />
            }>
            <VictoryLine 
            data = {data_array(props.calculationshistory)}
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
);
// Zum Optimieren der 

