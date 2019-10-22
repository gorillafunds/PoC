import React from "react";
import StaticSite from "../components/StaticSite.jsx";
import { graphql, StaticQuery } from "gatsby";

export default (props) => (

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
              <div className="AboutPage"> 
                  {props.children}
                     <StaticSite title="Contact">
                       <p>
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </p>
                    </StaticSite>
              </div>
      )}
  />
); 