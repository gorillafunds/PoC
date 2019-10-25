import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import web3 from "../web3/web3";

const account = web3.currentProvider.selectedAddress;

export default () => (
    <div className="Web3Address">
        <span><h6>Your Address: {account}</h6></span>
    </div>
)


    
