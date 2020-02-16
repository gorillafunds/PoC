import React from 'react';
import Header from "./Header";
import StaticMenu from "./StaticMenu";
import Footer from "./Footer";
import staticsite from "./staticsite.module.css";
import "../styles/global.css";

const StaticSite = (props) => {
    return (
    <div className={staticsite.Container}>
      <div className="ContainerLeft grid-element-side"/>
        <Header/>
        <StaticMenu title={props.title}/>
        <div className="Content ContentFundList ManagerStrategyPage"> 
              {props.children}
        </div>
        <Footer/>
      <div className="Spacer grid-element-center"/>
      <div className="ContainerRight grid-element-side"/>
    </div>
    )
  }

  export default StaticSite
  