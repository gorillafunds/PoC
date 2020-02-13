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
          < div className="Menu StaticMenu">
              <Web3Address/>
              <Link to="/fundlistpage">
                <div className="BaseButton FundExplorerButton" style={{width: '15vh'}}>
                    <h3>
                    Fund Explorer
                    </h3>
                </div>
              </Link>
            </div>
        )}
    />
); 

