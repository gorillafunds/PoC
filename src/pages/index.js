import React from "react"
import StaticSite from "../components/StaticSite.jsx"
import { StaticQuery, graphql } from 'gatsby';

export default (props) => (

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
                  {props.children}
                     <StaticSite title="Welcome">
                       <p>
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </p>
                    </StaticSite>
              </div>
      )}
  />
); 