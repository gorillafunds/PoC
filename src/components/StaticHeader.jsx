import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";
import gorilla from "../../media/gorilla.svg";

export default () => (
    
    <StaticQuery
        
        query={graphql`
            query StaticHeadingQuery {
                site {
                    siteMetadata{
                        title
                        }
                    }
                }
            `}
        
        
        render = { data => (
                <div className="StaticHeader">
                    <Link to="/" style={{margin: `auto`, padding: `0px`}}> 
                        <img className="LogoImage" src={gorilla} alt="logo"></img>
                    </Link>
                    <Link to="/"  style={{margin: `0px`, padding: `0px`}}> 
                        <div className="Title StaticTitle">
                            <h1 style={{color:"rgba(255,255,255,0.9)"}}>
                                {data.site.siteMetadata.title}
                            </h1>
                        </div>
                    </Link>
                </div>
        )}
    />
); 