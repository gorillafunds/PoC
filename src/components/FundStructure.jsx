import React from 'react';
import * as V from 'victory';
import { VictoryPie } from 'victory-pie';
import { ResponsivePie } from '@nivo/pie';


const colors_for_pie = [
  { "color" : "hsl(1, 70%, 50%)"},
  {"color" : "hsl(253, 70%, 50%)"},
  {"color" : "hsl(49, 70%, 50%)"},
  {"color" : "hsl(69, 70%, 50%)"},
  {"color" : "hsl(129, 70%, 50%)"},
  {"color" : "hsl(29, 70%, 50%)"},
  {"color" : "hsl(149, 70%, 50%)"},
  {"color" : "hsl(179, 70%, 50%)"},
  {"color" : "hsl(39, 70%, 50%)"}
]

/* Dataformat Victory-Pie*/ 

const data = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 }
]

/* Dataformat ResponsivePie */

/*
const data = [
  {
  "id": "go",
  "label": "go",
  "value": 124,
  "color": "hsl(1, 70%, 50%)"
},
{
  "id": "elixir",
  "label": "elixir",
  "value": 569,
  "color": "hsl(253, 70%, 50%)"
},
{
  "id": "javascript",
  "label": "javascript",
  "value": 518,
  "color": "hsl(49, 70%, 50%)"
}
]*/

/*const MyResponsivePie = ({ data  }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 20, right: 40, bottom: 10, left: 40 }}
        colors={{ scheme: 'nivo' }}
        />
)*/

/* Zum Optimieren der 

let data_array = (value_array) => {
  
  const new_value_array = [];
  
  value_array = value_array.filter((element, index) => {
    
    let amount = Math.floor(Number(element.fundHoldingsHistory[0].amount/1E18));
    if ( amount > 0 ){
      return true;
    } else {
      return false;
    }
  })

  value_array.map((element, index) => {
      console.log("Element", element, "index", index);
      let amount = Math.floor(Number(element.fundHoldingsHistory[0].amount/1E18));
      new_value_array[index] = {"id": element.symbol, "label":element.symbol ,"value": amount, "color": colors_for_pie[index].color};
  });

  console.log("Endergebnis:",new_value_array);
 
  return new_value_array;
 console.log(new_value_array);*/
  

/*  return data;
}*/

export default (props) => (
    <div className="FundStructure content-element">
        <h5>Fund-Structure</h5>
        <VictoryPie 
        data={data}
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        animate ={{
            duration:"2000",
            onLoad: { duration: 1000 }
        }}
        />
    </div>
);
/*

<ResponsivePie
        //data={data_array(props.fundstructure)}
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        colors={{ scheme: 'category10' }}
        />


<VictoryPie 
        data={data}
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        animate ={{
            duration:"2000",
            onLoad: { duration: 1000 }
        }}
        />
*/