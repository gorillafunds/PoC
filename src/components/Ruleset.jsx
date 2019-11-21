import React from 'react';
import { Link } from "gatsby";

let checkPolicies = (props, policy) => {
   const factor = 1E18;
   //console.log("props",props);
   //console.log("policy",policy);
   if( props.policy.length === 0 ){
      return "--"; 
   } else {
      switch ( policy ){
         case "UserWhitelist":
            const ident = props.policy.find(element => element.identifier === policy);
            if (typeof ident === 'undefined'){
               return "--";
            } else {
               return "Yes";
            };
            

         case "Max concentration":
               const ident2 = props.policy.find(element => element.identifier === policy);
               if (typeof ident2 === 'undefined'){
                  return "--";
               } else {
                  return (ident2.maxConcentration/factor*100).toFixed(0)+"%";
               };
            
         case "Max positions":
               const ident3 = props.policy.find(element => element.identifier === policy);
               if (typeof ident3 === 'undefined'){
                  return "--";
               } else {
                  return ident3.maxPositions;
               };

         case "Position":
               const ident4 = props.policy.find(element => element.identifier === policy);
               if (typeof ident4 === 'undefined'){
                  return "--";
               } else {
                  return ident.Position;
               };

         case "Price tolerance":
               const ident5 = props.policy.find(element => element.identifier === policy);
               if (typeof ident5 === 'undefined'){
                  return "--";
               } else {
                  return (ident5.priceTolerance/factor*100).toFixed(0)+"%";
               };
               
         default:
            return "--";
      }

   }
}

export default (props) => (

         <div className="Ruleset content-element">
            <div className="RulesetTitle">
               <div><h5>Ruleset:</h5></div>
            </div>
            <div className="RulesetRow Ruleset11">
               <div className="RulesetItem"><h5>User Whitelist:</h5></div><div className="RulesetIcon"><h5>{checkPolicies(props, "UserWhitelist")}</h5></div>
            </div>
            <div className="RulesetRow Ruleset12">
               <div className="RulesetItem"><h5>Max Concentration:</h5></div><div className="RulesetIcon"><h5>{checkPolicies(props,"Max concentration")}</h5></div>
            </div>
            <div className="RulesetRow Ruleset21">
               <div className="RulesetItem"><h5>Max Positions:</h5></div><div className="RulesetIcon"><h5>{checkPolicies(props,"Max positions")}</h5></div>
            </div>
            <div className="RulesetRow Ruleset22">
               <div className="RulesetItem"><h5>Actual Positions:</h5></div><div className="RulesetIcon"><h5>{checkPolicies(props,"Position")}</h5></div>
            </div>
            <div className="RulesetRow Ruleset31">
               <div className="RulesetItem"><h5>Price-Tolerance:</h5></div><div className="RulesetIcon"><h5>{checkPolicies(props,"Price tolerance")}</h5></div>
            </div>
            <div className="Ruleset32">
               <Link to="/Ruleset" state={{fromSite: props.id}}> 
                  <div className="BaseButton MoreButton RulesetButton" style={{right: '0', position:'absolute', bottom: '0'}}>
                     <h6>More</h6>
                  </div>
               </Link>
            </div>
         </div>
);