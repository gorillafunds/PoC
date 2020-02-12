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
              <div className="ExploreTheFundsLinkStatic">
                    <h5>
                        <Link to="/fundlistpage" style={{ color: `rgba(255,255,255,0.9)`, textShadow: `none`, backgroundImage: `none`, float: `right` }}>
                            <h2 syle={{fontSize: `2em`}}>
                                Fund Explorer
                            </h2>
                        </Link>
                    </h5>
              </div>
            </div>
        )}
    />
); 

