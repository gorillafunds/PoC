import React from "react"
import StaticSite from "../components/StaticSite.jsx"
import { StaticQuery, graphql } from 'gatsby';

export default (props) => (

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
                     <StaticSite title="About">
                       <p>
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </p>
                    </StaticSite>
              </div>
      )}
  />
); 