import React from "react"
import env from "../web3/melonweb3";
import SharesBox from "./SharesBox";

let account = env.client.givenProvider.selectedAddress;

let getShares = (investment) => {
    //console.log("Investments:",investment);
    //console.log("account:", account);
    let owner = investment.filter(function (investment){
        return investment.owner.id === account;
    });
    //console.log(owner);
    if(typeof owner !== 'undefined' && owner.length !== 0){ 
        return  <SharesBox shares={owner[0].shares/1e18}/>
    } else {
        return "";
    }
}

const Shares = (props) => (
        
        <div className="Shares">
            {getShares(props.investments)}
        </div>
        
    )

export default Shares;
