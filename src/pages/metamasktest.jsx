import React from "react"
import StaticSite from "../components/StaticSite";
import web3 from "../web3/web3";

console.log(web3);
console.log(web3.currentProvider.selectedAddress)
const account = web3.currentProvider.selectedAddress;

function test() {
    alert(account);
    console.log("Click");
}

export default () => (
    <div>
        <StaticSite title="MetaMask-Test">
            <button onClick={test}>Test</button>
       </StaticSite>
    </div>
);


//