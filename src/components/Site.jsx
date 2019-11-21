import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ContainerRight from "./ContainerRight";
import ContainerLeft from "./ContainerLeft";
import Content from "./Content";
import Fund from "./Fund";
import DynamicMenu from "./DynamicMenu";
import "../utils/typography";

const Site = (props) => {
    //console.log("Site:",{props})
    return (
        <div className="Container">
        <div className="ContainerLeft grid-element-side"/>
        <ContainerLeft previous={props.previous}/>
        <Header investments={props.fund.investments}/>
        <DynamicMenu 
            fundAddress={props.id} 
            participationContractAddress={props.fund.participation.id} 
            allowedAssets={props.fund.participation.allowedAssets} 
            investments={props.fund.investments}
            title="Explore the funds"/>
              <Content content={props.content}>
                <Fund fund={props.fund} id={props.id} /> 
              </Content>
        <Footer/>
        <div className="Spacer grid-element-center"/>
        <ContainerRight next={props.next}/> 
        <div className="ContainerRight grid-element-side"/>
      </div>
    )
  }

  export default Site

 