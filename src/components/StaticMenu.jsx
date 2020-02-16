import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby';

export default (props) => (
    
    <StaticQuery
        query={graphql`
            query StaticMenuQuery {
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
              <div className="StaticMenuTitle">
                    <h2 syle={{float: `left`}}>
                        {props.title}
                    </h2>
              </div>
              <div className="ExploreTheFundsLinkStatic">
                    <h5>
                        <Link to="/fundlistpage">
                        <div className="BaseButton FundExplorerButton" style={{width: '15vh'}}>
                    <h3>
                    Funds
                    </h3>
                </div>
              </Link>
                    </h5>
              </div>
            </div>
        )}
    />
); 

