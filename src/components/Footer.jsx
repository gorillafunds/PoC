import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";
import melonImage from "../../media/melonklein.png";

// Footer für alle Seiten - holt Links aus gatsby-config

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
                    <ul style={{margin:`0px`, float: `left`}}>
                        <li style={{margin:`0px`, display: `inline-block`, float: `left`}}>
                            <img src={melonImage} style={{imageRendering:`auto` }}/>
                        </li>
                        <li style={{margin:`10px`, display: `inline-block`, float: `left`}}> 
                            Powered by Melonprotocol 
                        </li>
                    </ul>

                    <ul style={{margin:`0px`, float: `right`}}>    
                        <li style={{margin:`0px`, display: `inline-block`}}>
                            <Link to={data.site.siteMetadata.footer1} style={{  textShadow: `none`, backgroundImage: `none` }}>
                            <div className="FooterLinkItems"> 
                                <h6>About</h6>
                            </div>
                            </Link>
                        </li>
                        <li style={{margin:`0px`, display: `inline-block`}}>
                            <Link to={data.site.siteMetadata.footer2} style={{ textShadow: `none`, backgroundImage: `none` }}>
                            <div className="FooterLinkItems">
                                <h6>Contact</h6>
                            </div></Link>
                        </li>
                        <li style={{margin:`0px`, display: `inline-block`}}>
                            <Link to={data.site.siteMetadata.footer3} style={{ textShadow: `none`, backgroundImage: `none` }}>
                                <div className="FooterLinkItems">
                                <h6>Impressum</h6>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
        )}
    />
); 