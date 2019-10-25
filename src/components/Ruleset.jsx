import React from 'react';
import { Link } from "gatsby";

export default (props) => (

         <div className="Ruleset content-element">
            <div className="RulesetTitle">
               <div><h5>Ruleset:</h5></div>
            </div>
            <div className="RulesetRow Ruleset11">
               <div className="RulesetItem"><h5>User Whitelist:</h5></div><div className="RulesetIcon"><h5>Yes</h5></div>
            </div>
            <div className="RulesetRow Ruleset12">
               <div className="RulesetItem"><h5>Max Concentration:</h5></div><div className="RulesetIcon"><h5>30%</h5></div>
            </div>
            <div className="RulesetRow Ruleset21">
               <div className="RulesetItem"><h5>Max Positions:</h5></div><div className="RulesetIcon"><h5>5</h5></div>
            </div>
            <div className="RulesetRow Ruleset22">
               <div className="RulesetItem"><h5>Position:</h5></div><div className="RulesetIcon"><h5>3</h5></div>
            </div>
            <div className="RulesetRow Ruleset31">
               <div className="RulesetItem"><h5>Price-Tolerance:</h5></div><div className="RulesetIcon"><h5>5%</h5></div>
            </div>
            <div className="Ruleset32">
               <Link to="/Ruleset"> 
                  <div className="base_button MoreButton" style={{right: '0', position:'absolute', bottom: '0'}}>
                     <h6>More</h6>
                  </div>
               </Link>
            </div>
         </div>

         
);