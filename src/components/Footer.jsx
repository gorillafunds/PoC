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
                    <ul style={{margin:`0px`, float: `left`}}>
                        <li style={{margin:`0px`, display: `inline-block`, float: `left`}}>
                            <a href="https://twitter.com/GorillaFunds"><img src={twitter} alt="Follow @GorillaFunds" style={{marginLeft: '10px', marginTop: '10px',maxHeigth: '30px', maxWidth:'30px',imageRendering:`auto` }}></img></a>
                        </li>
                        <li style={{margin:`0px`, display: `inline-block`, float: `left`}}>
                            <a href="https://medium.com/@jakobcoltsievers21"><img src={medium} alt="Follow on Medium" style={{marginLeft: '10px', marginTop: '10px', maxHeight:'30px', maxWidth:'30px',imageRendering:`auto` }}></img></a>
                        </li>
                        <li style={{margin:`0px`, display: `inline-block`, float: `left`}}>
                            <a href="https://github.com/gorillafund"><img src={github} alt="Follow on Github" style={{marginLeft: '10px', marginTop: '10px',maxHeigth: '30px', maxWidth:'30px',imageRendering:`auto` }}></img></a>
                        </li>
                        <li style={{margin:`0px`, display: `inline-block`, float: `left`}}>
                            <a href="https://melonprotocol.com"><img src={melonImage} alt="melon_logo" style={{marginLeft: '10px', marginTop: '10px',maxHeigth: '30px', maxWidth:'30px' ,imageRendering:`auto` }}/></a>
                        </li>
                        <li style={{margin:`10px`,marginTop: '15px', display: `inline-block`, float: `left`}}> 
                            Powered by Melon Protocol 
                        </li>
                    </ul>

                   
                </div>
        )}
    />
); 
/*
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
</ul>*/