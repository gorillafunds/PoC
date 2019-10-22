import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ContainerRight from "./ContainerRight";
import ContainerLeft from "./ContainerLeft";
import Content from "./Content";
import Fund from "./Fund";
import DynamicMenu from "./DynamicMenu";
import "../utils/typography";

// Grundaufbau der generierten Websites zur Darstellung der Fundinfos.

const Site = (props) => {
    console.log("Site:",{props})
    return (
      <div className="Container">
        <ContainerLeft previous={props.previous}/>
        <Header/>
        <DynamicMenu fundaddress={props.id} title="Explore the funds"/>
              <Content content={props.content}>
                <Fund fund={props.fund} id={props.id}/> 
              </Content>
        <Footer/>
        <div className="Spacer grid-element-center"/>
        <ContainerRight next={props.next}/> 
      </div>
    )
  }

  export default Site

 