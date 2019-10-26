import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby';

export default (props) => (
    
    <StaticQuery
        query={graphql`
            query StaticMenuQuery {
                allSitePage(filter: {path: {regex: "/0x.*/"}}, limit: 20) {
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
                    <h5 syle={{float: `left`}}>
                        {props.title}
                    </h5>
              </div>
              <div className="ExploreTheFundsLinkStatic">
                    <h5>
                        <Link to="/fundlistpage" style={{ color: `rgba(255,255,255,0.9)`, textShadow: `none`, backgroundImage: `none`, float: `right` }}>
                            Explore the Funds
                        </Link>
                    </h5>
              </div>
            </div>
        )}
    />
); 

