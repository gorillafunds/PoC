import React from "react";
import StaticSite from "../components/StaticSite";
import { graphql, StaticQuery } from "gatsby";

export default () => (

  <StaticQuery
         query={graphql`
              query MyWordPressMelonPageQuery {
                wordpressPage(title: {eq: "Melon"}) {
                  id
                  content
              }
            }
        `}

      render = {data => (
              <div className="WordpressPage"> 
                     <StaticSite title="Powered By Melon">
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                    </StaticSite>
              </div>
      )}
  />
); 