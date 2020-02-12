import React from "react";
import StaticSiteSlideDown from "../components/StaticSiteSlideDown";
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
                     <StaticSiteSlideDown title="Welcome">
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                    </StaticSiteSlideDown>
                  </div>
      )}
  />
) 