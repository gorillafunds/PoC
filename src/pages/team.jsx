import React from "react";
import StaticSite from "../components/StaticSite";
import { graphql, StaticQuery } from "gatsby";

export default () => (

  <StaticQuery
         query={graphql`
              query MyWordPressTeamPageQuery {
                wordpressPage(title: {eq: "Team"}) {
                  id
                  content
              }
            }
        `}

      render = {data => (
              <div className="WordpressPage" > 
                     <StaticSite title="Team" css="Content ContentFundList ManagerStrategyPage">
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                    </StaticSite>
              </div>
      )}
  />
); 