import React from "react";
import StaticSite from "../components/StaticSite.jsx";
import { StaticQuery, graphql } from 'gatsby';
import { hasProvider } from '../web3/melonweb3';
import Web3Address from '../components/Web3Address'

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
                         { hasProvider() ? <div></div>:<div className="MetaMaskAlert">To interact with Gorilla Funds install and enable Metamask<Web3Address/></div>}
                         <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                      </p>
                    </StaticSite>
              </div>
      )}
  />
); 