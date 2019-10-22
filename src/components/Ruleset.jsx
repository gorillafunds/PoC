import React from 'react';
import { Link } from "gatsby";

export default (props) => (

         <div className="Ruleset content-element">
            <div className="RulesetTitle">
               <div><h5>Ruleset:</h5></div>
            </div>
            <div className="RulesetRow Ruleset11">
               <div className="RulesetItem"><h4>User Whitelist:</h4></div><div className="RulesetIcon"><h4>Yes</h4></div>
            </div>
            <div className="RulesetRow Ruleset12">
               <div className="RulesetItem"><h4>Max Concentration:</h4></div><div className="RulesetIcon"><h4>30%</h4></div>
            </div>
            <div className="RulesetRow Ruleset21">
               <div className="RulesetItem"><h4>Max Positions:</h4></div><div className="RulesetIcon"><h4>5</h4></div>
            </div>
            <div className="RulesetRow Ruleset22">
               <div className="RulesetItem"><h4>Position:</h4></div><div className="RulesetIcon"><h4>3</h4></div>
            </div>
            <div className="RulesetRow Ruleset31">
               <div className="RulesetItem"><h4>Price-Tolerance:</h4></div><div className="RulesetIcon"><h4>5%</h4></div>
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