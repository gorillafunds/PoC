import React from 'react';
import Header from "./Header";
import StaticMenu from "./StaticMenu";
import Footer from "./Footer";
import Content from "./Content";

const StaticSite = (props) => {
    console.log("StaticSite-Layout:",{props})
    return (
    <div className="Container">
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
  

