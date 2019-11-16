import React from 'react';
//import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link";
import { StaticQuery, graphql } from 'gatsby';
import back from "../../media/ios-arrow-back50.svg";

export default (props) => (

    <StaticQuery
           query={graphql`
                query MyLinkPreviousQuery {
                    allSitePage(filter: {path: {regex: "/0x.*/"}}) {
                        edges {
                            node {
                                path
                            }
                        }
                    }
                }`
            }

        render = {data => (
                <div className="ContainerLeft grid-element-side"> 
                    {props.children}
                    <TransitionLink
                        to={data.allSitePage.edges[props.previous].node.path}
                        /*exit={{
                            length: 1
                        }}
                        entry={{
                            delay: 0.6
                        }}*/
                        >
                        <img className="SiteImage" src={back} alt="back"></img>
                    </TransitionLink>
                </div>
        )}
    />
); 