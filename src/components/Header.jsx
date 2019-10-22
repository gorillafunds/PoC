import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";
import gorilla from "../../media/gorilla.svg";


// Header für alle Seiten - holt Titel aus gatsby-config

export default () => (
    
    <StaticQuery
        
        query={graphql`
            query HeadingQuery {
                site {
                    siteMetadata{
                        title
                        }
                    }
                }
            `}
        
        
        render = {data => (
                <div className="Header grid-element-center">
                    <Link to="/" style={{margin: `auto`, padding: `0px`}}> 
                        <img className="LogoImage" src={gorilla} alt="logo"></img>
                    </Link>
                    <Link to="/"  style={{margin: `0px`, padding: `0px`}}> 
                        <div className="Title">
                            <h1 style={{color:"rgba(255,255,255,0.9)"}}>
                                {data.site.siteMetadata.title}
                            </h1>
                        </div>
                    </Link>
                </div>
        )}
    />
); 