import React from "react";
import StaticSite from "../components/StaticSite.jsx";
import { StaticQuery, graphql } from 'gatsby';

export default () => (

  <StaticQuery
         query={graphql`
              query MyWordPressIndexPageQuery {
                wordpressPage(title: {eq: "Welcome"}) {
                  id
                  content
              }
            }
        `}

      render = {data => (
              <div className="WelcomePage"> 
                     <StaticSite title="Welcome">
                       <p>
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </p>
                    </StaticSite>
              </div>
      )}
  />
); 