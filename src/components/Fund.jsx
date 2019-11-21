import React from 'react';
import Factsheet from "./Factsheet";
import PerformanceChart from "./PerformanceChart";
import FundStructure from "./FundStructure";
import Manager from "./Manager";
import Strategy from "./Strategy";
import Ruleset from './Ruleset';

export default (props) => (
    <div className="Fund grid-element-center">
            <Factsheet 
                fundname={props.fund.name} 
                shareprice={props.fund.sharePrice} 
                totalsupply={props.fund.totalSupply}
                performancefee={props.fund.feeManager.performanceFee.performanceFeeRate} 
                managementfee={props.fund.feeManager.managementFee.managementFeeRate}
                calculationshistory={props.fund.calculationsHistory}
                />
           <PerformanceChart 
                calculationshistory={props.fund.calculationsHistory}
                />
            <FundStructure 
                accounting={props.fund.accounting}
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

 
            
