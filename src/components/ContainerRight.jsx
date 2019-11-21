import React from 'react';
//import TransitionLink from "gatsby-plugin-transition-link";
import { StaticQuery, graphql } from 'gatsby';
import forward from "../../media/ios-arrow-forward50.svg";
import { Link } from "gatsby";

export default (props) => (
    
    <StaticQuery
           query={graphql`
                query MyLinkNextQuery {
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
                    <div className="ContainerRight grid-element-side">
                        {props.children}
                            <Link
                                to={data.allSitePage.edges[props.next].node.path}
                            /*exit={{
                                length: 1
                            }}
                            entry={{
                                delay: 0.6
                             }}*/
                            >
                            <img className="SiteImage" src={forward} alt="forward"/>
                        </Link>
                    </div>
        )}
    />
); 