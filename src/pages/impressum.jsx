import React from "react";
import StaticSite from "../components/StaticSite";
import { graphql, StaticQuery } from "gatsby";

export default () => (

  <StaticQuery
         query={graphql`
              query MyWordPressImpressumPageQuery {
                wordpressPage(title: {eq: "Impressum"}) {
                  id
                  content
              }
            }
        `}

      render = {data => (
              <div className="WordpressPage"> 
                     <StaticSite title="Impressum">
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                    </StaticSite>
              </div>
      )}
  />
); 