import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import web3 from "../web3/web3";

const account = web3.currentProvider.selectedAddress;


// Könnte zum Darstellen der web3addresses genutzt werden, wenn ich die Apollo-Client-Aktivität eingebunden habe.
/*
export default () => <StaticQuery

query={graphql`
    query web3addressQuery {
        allDataJson {
            nodes{
                web3address
                }
            }
        }
    `}

render = {data => (
    <div className="Web3Address">
        <span>Your Address: {data.allDataJson.nodes[0].web3address}</span>
    </div>
)}
/>
*/
export default () => (
    <div className="Web3Address">
        <span><h6>Your Address: {account}</h6></span>
    </div>
)


    
