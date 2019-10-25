import React from 'react';
//import { Link } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import { StaticQuery, graphql } from 'gatsby';
import forward from "../../media/ios-arrow-forward50.svg";

export default (props) => (
    
    <StaticQuery
           query={graphql`
                query MyLinkNextQuery {
                    allSitePage(filter: {path: {regex: "/0x.*/"}}, limit: 20) {
                        edges {
                            node {
                                path
                            }
                        }
                    }
                }`
            }

        render = {data => (
                    <div className="ContainerRight grid-element-side">
                        {props.children}
                        <TransitionLink 
                            to={data.allSitePage.edges[props.next].node.path}
                            exit={{
                                length: 1
                            }}
                            entry={{
                                delay: 0.6
                             }}
                            >
                            <img className="SiteImage" src={forward} alt="forward"></img>
                        </TransitionLink>
                    </div>
        )}
    />
); 