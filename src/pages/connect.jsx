import React from "react";
import StaticSite from "../components/StaticSite";
import { graphql, StaticQuery } from "gatsby";

export default () => (

  <StaticQuery
         query={graphql`
              query MyWordPressConnectPageQuery {
                wordpressPage(title: {eq: "Connect"}) {
                  id
                  content
              }
            }
        `}

      render = {data => (
              <div className="WordpressPage"> 
                     <StaticSite title="Connect">
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                    </StaticSite>
              </div>
      )}
  />
); 