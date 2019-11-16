import React from "react";
import StaticSite from "../components/StaticSite.jsx";
import { StaticQuery, graphql } from 'gatsby';
import melonweb3 from "../web3/melonweb3.js";

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
                     <StaticSite title="Welcome">
                       <p>
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </p>
                    </StaticSite>
              </div>
      )}
  />
); 