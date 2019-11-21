import React from "react";
import { graphql } from "gatsby";
import Site from "../components/Site";


export default class Page extends React.Component{

  constructor(props) {
      super(props); 
  }

  render(){
    //console.log("fundTemplate.js:",props)
    return (
    <div>
      <Site 
      name={this.props.pageContext.name} 
      index={this.props.pageContext.index} 
      next={this.props.pageContext.next} 
      id={this.props.pageContext.id}
      previous={this.props.pageContext.previous}
      fund = {this.props.data.melon.fund}
      createdAt = {this.props.pageContext.createdAt}
      >
      </Site>
    </div>
    )
  }
}

export const query = graphql`
  query MyFundHoldingsQuery ($id: ID!, $createdAt:MELON_BigInt!) {
    melon{
      fund(id: $id) {
      name
      createdAt
      holdingsHistory {
        amount
      }
      sharePrice
      totalSupply
      gav
      calculationsHistory {
        sharePrice
        timestamp
      }
      accounting {
        ownedAssets {
          id
          name
          lastPrice
          symbol
          decimals
          fundHoldingsHistory(where: {timestamp_gte: $createdAt}){
            amount
          }
        }
      }
      feeManager {
        managementFee {
          managementFeeRate
        }
        performanceFee {
          performanceFeeRate
        }
      }
      manager {
        id
      }
      policyManager {
        policies {
          maxConcentration
          maxPositions
          position
          priceTolerance
          identifier
        }
      }
      participation {
        id
        allowedAssets {
          id
          symbol
        }
      }
      investments{
        owner{
          id
          }
        shares
        sharePrice
      }
    }
  }
}
`;