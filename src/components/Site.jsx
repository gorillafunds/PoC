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

    console.log("Site:",{props})
    return (
        <div className="Container">
        <ContainerLeft previous={props.previous}/>
        <Header 
          investments={props.fund.investments} 
          fundAddress={props.id} 
          participationContractAddress={props.fund.participation.id} 
          share={props.fund.share.id}
        />
        <DynamicMenu 
            fundAddress={props.id} 
            participationContractAddress={props.fund.participation.id} 
            accountingContractAddress={props.fund.accounting.id}
            allowedAssets={props.fund.participation.allowedAssets} 
            investments={props.fund.investments}
            title="Explore the funds"/>
              <Content content={props.content}>
                <Fund 
                fund={props.fund} 
                id={props.id} 
                participationContractAddress={props.fund.participation.id} 
                accountingContractAddress={props.fund.accounting.id}
                holdingsHistory={props.fund.holdingsHistory}
                assets={props.assets}
                /> 
              </Content>
        <Footer/>
        <div className="Spacer grid-element-center"/>
        <ContainerRight next={props.next}/> 
      </div>
    )
  }

  export default Site

 