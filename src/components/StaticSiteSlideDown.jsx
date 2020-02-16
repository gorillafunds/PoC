import React from 'react';
import Header from "./Header";
import StaticMenuWelcomePage from "./StaticMenuWelcomePage";
import Footer from "./Footer";
import NewsBox from './NewsBox';

const StaticSiteSlideDown = (props) => {
    return (
    <div className="Container">
      <div className="ContainerLeft grid-element-side"/>
        <Header/>
        <StaticMenuWelcomePage title={props.title}/>
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
  

