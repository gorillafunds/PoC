import React from "react";
import { graphql } from "gatsby";
import Site from "../components/Site";


export default class Page extends React.Component{

  constructor(props) {
      super(props); 
  }

  render(){
    //console.log("fundTemplate.js:",props)

    console.log()

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
      assets = {this.props.data.melon.assets}
      >
      </Site>
    </div>
    )
  }
}


export const query = graphql`
  query MyFundHoldingsQuery ($id: ID!) {
    melon{
      fund(id: $id) {
        name
        createdAt
        sharePrice
        totalSupply
        gav
        calculationsHistory (first: 100){
            sharePrice
            timestamp
            }
        c1: calculationsHistory (first: 100){
          sharePrice
          timestamp
          }
        c2: calculationsHistory (skip: 100){
          sharePrice
          timestamp
          }
        c3: calculationsHistory (skip: 200){
          sharePrice
          timestamp
          }
        c4:  calculationsHistory (skip: 300){
          sharePrice
          timestamp
          }
        c5: calculationsHistory (skip: 400){
          sharePrice
          timestamp
          }
        accounting {
          id
          ownedAssets {
            id
            name
            lastPrice
            symbol
            decimals
            fundHoldingsHistory (orderDirection: desc, orderBy: timestamp, first:1){
              amount
              timestamp
            }
          }
        }
        holdingsHistory(orderBy: timestamp, orderDirection: desc, first: 12) {
          amount
          asset {
            id
            name
            symbol
            decimals
          }
          assetGav
          timestamp
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
        share {
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
      assets {
          id
          symbol
        }
      } 
    }
  `;