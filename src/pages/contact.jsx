import React from "react";
import StaticSite from "../components/StaticSite";
import { graphql, StaticQuery } from "gatsby";

export default () => (

  <StaticQuery
         query={graphql`
              query MyWordPressContactPageQuery {
                wordpressPage(title: {eq: "Contact"}) {
                  id
                  content
              }
            }
        `}

      render = {data => (
              <div className="WordpressPage"> 
                     <StaticSite title="Contact">
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </StaticSite>
              </div>
      )}
  />
); 