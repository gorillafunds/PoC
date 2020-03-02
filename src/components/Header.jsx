import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";
import gorilla from "../../media/gorilla.svg";
import ButtonDropDown from "./ButtonDropDown";
import ButtonDropDown2 from "./ButtonDropDown2";

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
                        <div className="Link1" style={{margin: `auto`, padding: `auto`, color: `white`}}>
                            <ButtonDropDown 
                            title="About" 
                            item1="Powered by Melon" 
                            link1="/melon" 
                            /*item2="Litepaper" 
        link2="/litepaper" */
                            item2="Team" 
                            link2="/team" 
                            item3="FAQ"
                            link3="/faq"
                            /> 
                        </div>
                        <a href="https://medium.com/@gorillafunds" className="Link2" style={{margin: `auto`, padding: `auto`, color: `white`}}  target="_blank"> 
                            Blog
                        </a>
                   
                        <Link to="/" style={{margin: `auto`, padding: `auto`}}> 
                            <img className="LogoImageSmall" src={gorilla} alt="logo"></img>
                        </Link>
                  
                        <Link to="/contact" className="Link4" style={{margin: `auto`, padding: `auto`, color: `white`}}> 
                            Contact
                        </Link>
                    
                        <div className="Link5" style={{margin: `auto`, padding: `auto`, color: `white`}}> 
                            <ButtonDropDown2 title="Tools" item1="Fund Explorer" link1="/fundlistpage" item2="Frontend Builder" link2="/frontendbuilder"/> 
                        </div>
                    
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