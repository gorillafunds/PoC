import React from 'react';
//import TransitionLink from "gatsby-plugin-transition-link";
import { StaticQuery, graphql } from 'gatsby';
import back from "../../media/ios-arrow-back50.svg";
import { Link } from "gatsby";


export default (props) => (

    <StaticQuery
           query={graphql`
                query MyLinkPreviousQuery {
                    allSitePage(filter: {path: {regex: "/^(\/0x).*/"}}) {
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
                            <Link
                                to={data.allSitePage.edges[props.previous].node.path}
                            /*exit={{
                                length: 1
                            }}
                            entry={{
                                delay: 0.6
                            }}*/
                            >
                            <img className="SiteImage" src={back} alt="back"/>
                        </Link>
                    </div>
        )}
    />
); 