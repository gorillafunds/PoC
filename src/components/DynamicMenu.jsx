import React from "react"
import { Link } from "gatsby"
import Web3Address from "./Web3Address";
import InvestForm from "./InvestForm";
import RedeemForm from "./RedeemForm";
import Request from "./Request";
import FShares from "./FShares";


function investAction(){
    openInvestmentForm();
}

function redeemAction(){
    openRedeemForm();
}

function openInvestmentForm(){
    document.getElementById("InvestForm").style.display = "block";
}

function openRedeemForm(){
    document.getElementById("RedeemForm").style.display = "block";
}

export default (props) => (
    
            <div className="Menu DynamicMenu">
                <Web3Address/>
                  <div className="InvestRedeemButtons">
                      <div className="BaseButton InvestButton" onClick={investAction}><h3>Invest</h3></div>
                      <div className="BaseButton RedeemButton" onClick={redeemAction}><h3>Redeem</h3></div>
                  </div>
                  <div className="RequestBox">
                      <Request participationContractAddress={props.participationContractAddress}/>
                  </div>
                  <FShares 
                        investments={props.investments} 
                        fundAddress={props.fundAddress} 
                        participationContractAddress={props.participationContractAddress}
                        share={props.share}
                    />
                <InvestForm 
                    investments={props.investments} 
                    fundAddress={props.fundAddress} 
                    participationContractAddress={props.participationContractAddress} 
                    accountingContractAddress={props.accountingContractAddress}
                    allowedAssets={props.allowedAssets}
                    />
                <RedeemForm 
                    investments={props.investments} 
                    fundAddress={props.fundAddress} 
                    participationContractAddress={props.participationContractAddress} 
                    allowedAssets={props.allowedAssets}
                    />
              </div>
           
)     
