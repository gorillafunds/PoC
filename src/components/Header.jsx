import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";
import gorilla from "../../media/gorilla.svg";
//import FShares from "./FShares";

export default (props) => (
    
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
        
        
        render = { data => (
                <div className="Header">
                     <Link className="Link1" to="/about" style={{margin: `auto`, padding: `auto`, color: `white`}}> 
                        About
                    </Link>
                    <Link className="Link2" to="/contact" style={{margin: `auto`, padding: `auto`, color: `white`}}> 
                        Contact
                    </Link>
                    <Link to="/" style={{margin: `auto`, padding: `auto`}}> 
                        <img className="LogoImageSmall" src={gorilla} alt="logo"></img>
                    </Link>
                    <Link className="Link4" to="/impressum" style={{margin: `auto`, padding: `auto`, color: `white`}}> 
                       Terms of Use
                    </Link>
                    <Link className="Link5" to="/" style={{margin: `auto`, padding: `auto`, color: `white`}}> 
                        Tools
                    </Link>
                </div>
        )}
    />
); 
/*
<FShares 
investments={props.investments} 
fundAddress={props.fundAddress} 
participationContractAddress={props.participationContractAddress}
share={props.share}
/>*/