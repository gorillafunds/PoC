import React from "react"
import StaticSite from "../components/StaticSite.jsx"
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import { isContext } from "vm";

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
                  {props.children}
                     <StaticSite title="Ruleset">
                       <p>
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </p>
                      <Link to={props.location.state.fromSite}>
                          <div className="base_button MoreButton" style={{float:'left', bottom:'10px', position: 'absolute'}}>
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