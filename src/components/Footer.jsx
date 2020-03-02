import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";
import melonImage from "../../media/MelonIconWhiteTransparent.png";
import twitter from "../../media/logo-twitterTransparent.png";
import medium from "../../media/MediumTransparent.png";
import github from "../../media/logo-githubTransparent.png";


export default () => (
    <StaticQuery
        
        query={graphql`
            query FooterQuery {
                site {
                    siteMetadata{
                        footer1
                        footer2
                        footer3
                        }
                    }
                }
            `}
        
        
        render = {data => (
                <div className="Footer grid-element-center">
                    <div className="FooterLinkItemsLeft">
                        <a className="imagesLeft" href="https://twitter.com/GorillaFunds"  target="_blank"><img  src={twitter} alt="Follow @GorillaFunds" ></img></a>
                        <a className="imagesLeft" href="https://medium.com/@gorillafunds" target="_blank"><img src={medium} alt="Follow on Medium" ></img></a>
                        <a className="imagesLeft" href="https://github.com/gorillafunds" target="_blank"><img src={github} alt="Follow on Github" ></img></a>
                        <a className="imagesLeft" href="https://melonprotocol.com" target="_blank"><img src={melonImage} alt="melon_logo"></img></a>
                        <h6 className="melonLeft">Powered by Melon Protocol</h6>
                    </div>
                    <div className="FooterLinkItemsRight">
                        {/*<Link  className="FooterLinkItemRight" to={data.site.siteMetadata.footer1} >
                            <h6>Partner</h6>
                        </Link>
                        <Link  className="FooterLinkItemRight" to={data.site.siteMetadata.footer2} >
                            <h6>FAQ</h6>
                        </Link>
                        <Link className="FooterLinkItemRight" to={data.site.siteMetadata.footer3}>
                            <h6>Terms of Use</h6>
                        </Link>*/}
                    </div>
                </div>
        )}
    />
); 
