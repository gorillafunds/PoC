import React from 'react';
import Factsheet from "./Factsheet";
import PerformanceChart from "./PerformanceChart";
import FundStructure from "./FundStructure";
import Manager from "./Manager";
import Strategy from "./Strategy";
import Ruleset from './Ruleset';


const Fund = (props) => {

    let calculationsHistory = [...props.fund.c1, ...props.fund.c2, ...props.fund.c3, ...props.fund.c4, ...props.fund.c5];
    console.log(calculationsHistory);
    
    return (
    <div className="Fund grid-element-center">
            <Factsheet 
                fundname={props.fund.name} 
                shareprice={props.fund.sharePrice} 
                totalsupply={props.fund.totalSupply}
                performancefee={props.fund.feeManager.performanceFee.performanceFeeRate} 
                managementfee={props.fund.feeManager.managementFee.managementFeeRate}
                calculationshistory={calculationsHistory}
                accountingContractAddress={props.accountingContractAddress}
                />
           <PerformanceChart 
                calculationshistory={calculationsHistory}
                />
            <FundStructure 
                accounting={props.fund.accounting}
                holdingsHistory={props.fund.holdingsHistory}
                participationContractAddress={props.participationContractAddress} 
                assets = {props.assets}
                />
            <Strategy  
                manageraddress={props.fund.manager.id}
                id={props.id}
                />
            <Ruleset id={props.id} policy={props.fund.policyManager.policies}/>
            <Manager
                manageraddress={props.fund.manager.id}
                />
        </div>
    )
}

export default Fund
 
            
