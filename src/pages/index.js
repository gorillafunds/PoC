import React from "react";
import StaticSite from "../components/StaticSite";
import { StaticQuery, graphql, Link } from 'gatsby';

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
                     <StaticSite title="Welcome" css="Content ContentFundList WelcomPage">
                       <div className="WelcomePageContent">
                            <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                        </div>
                        <Link to="/fundlistpage">
                           <div className="FundExplorerButtonFrontPage">
                              Explore the Funds
                          </div>
                        </Link>
                    </StaticSite>
      )}
  />
) 