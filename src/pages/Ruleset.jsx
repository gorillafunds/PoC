import React from "react"
import StaticSite from "../components/StaticSite.jsx"
import { StaticQuery, graphql } from 'gatsby';

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
                    </StaticSite>
              </div>
      )}
  />
); 