import React from "react";
import StaticSite from "../components/StaticSite.jsx";
import { graphql, StaticQuery } from "gatsby";

export default (props) => (

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
              <div className="AboutPage"> 
                  {props.children}
                     <StaticSite title="Impressum">
                       <p>
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </p>
                    </StaticSite>
              </div>
      )}
  />
); 