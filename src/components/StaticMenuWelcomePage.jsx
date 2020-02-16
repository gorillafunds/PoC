import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby';
import Web3Address from "./Web3Address";

export default (props) => (
    
    <StaticQuery
        query={graphql`
            query StaticMenuWelcomePageQuery {
                allSitePage(filter: {path: {regex: "/0x.*/"}}) {
                    edges {
                        node {
                            path
                        }
                    }
                }
             }`
        }
        
        render={data => (
          < div className="Menu StaticMenuWelcomePage">
              <div className="ConnectWithWeb3">
                    <Web3Address/>
              </div>
              <div className="WelcomePageTitle">
                  <h3>Gorilla Funds - Invest with Gorilla Tactics</h3>
              </div>        
              <div className="FundExplorer">
                <Link to="/fundlistpage">
                    <div className="BaseButton FundExplorerButton" style={{width: '15vh'}}>
                        <h3>
                            Funds
                        </h3>
                    </div>
                </Link>
              </div>
            </div>
        )}
    />
); 

