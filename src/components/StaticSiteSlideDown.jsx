import React from 'react';
import StaticHeader from "./StaticHeader";
import StaticMenu from "./StaticMenu";
import Footer from "./Footer";
import NewsBox from './NewsBox';

const StaticSiteSlideDown = (props) => {
    return (
    <div className="Container">
      <div className="ContainerLeft grid-element-side"/>
        <StaticHeader/>
        <StaticMenu title={props.title}/>
        <NewsBox case="MetamaskAlert"/>
        <div className="Content ContentFundList ManagerStrategyPage"> 
              {props.children}
        </div>
        <Footer/>
      <div className="Spacer grid-element-center"/>
      <div className="ContainerRight grid-element-side"/>
    </div>
    )
  }

  export default StaticSiteSlideDown
  

