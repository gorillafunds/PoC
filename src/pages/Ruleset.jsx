import React from "react"
import StaticSite from "../components/StaticSite.jsx"
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

export default (props) => (

  <StaticQuery
         query={graphql`
              query MyWordPressRulesetPageQuery {
                wordpressPage(title: {eq: "Ruleset"}) {
                  id
                  content
              }
            }
        `}

      render = {data => (
              <div className="RulesetPage"> 
                     <StaticSite title="Ruleset">
                       <p>
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </p>
                      <Link to="/">
                          <div className="BaseButton MoreButton" style={{float:'left', bottom:'10px', position: 'absolute'}}>
                            <h6>
                              Back
                            </h6>
                        </div>
                        </Link>
                    </StaticSite>
              </div>
      )}
  />
); 