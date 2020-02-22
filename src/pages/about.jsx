import React from "react"
import StaticSite from "../components/StaticSite";
import { StaticQuery, graphql } from 'gatsby';


export default () => (

  <StaticQuery
         query={graphql`
              query MyWordPressAboutPageQuery {
                wordpressPage(title: {eq: "About"}) {
                  id
                  content
              }
            }
        `}

      render = {data => (
              <div className="WordpressPage"> 
                     <StaticSite title="About" css="Content ContentFundList ManagerStrategyPage">
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                    </StaticSite>
              </div>
      )}
  />
); 