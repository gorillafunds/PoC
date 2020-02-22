import React from "react";
import StaticSite from "../components/StaticSite";
import { graphql, StaticQuery } from "gatsby";

export default () => (

  <StaticQuery
         query={graphql`
              query MyWordPressFAQPageQuery {
                wordpressPage(title: {eq: "FAQ"}) {
                  id
                  content
              }
            }
        `}

      render = {data => (
              <div className="WordpressPage" > 
                     <StaticSite title="FAQ" css="Content ContentFundList ManagerStrategyPage">
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                    </StaticSite>
              </div>
      )}
  />
); 