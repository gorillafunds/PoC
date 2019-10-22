import React from "react";
import { graphql } from "gatsby";
import Site from "../components/Site";

// Template für die Pages. Daten können im Inneren von Site als Children übergeben werden, oder über die Attribute
// Die gesammelten Daten für den Fund werden über den dataContainer übergeben, der in gatsby-node gebaut wird.
   
const Page = (props) => {
    console.log("fundTemplate.js:",props)
    return (
    <div>
      <Site 
      name={props.pageContext.name} 
      index={props.pageContext.index} 
      next={props.pageContext.next} 
      id={props.pageContext.id}
      previous={props.pageContext.previous}
      fund = {props.data.melon.fund}
      >
      </Site>
    </div>
    )
  }

export default Page

export const query = graphql`
  query MyFundHoldingsQuery ($id: ID!) {
    melon{
      fund(id: $id) {
      name
      holdingsHistory {
        amount
      }
      sharePrice
      totalSupply
      gav
      calculationsHistory {
        gav
      }
      accounting {
        ownedAssets {
          id
          name
          lastPrice
          symbol
          fundHoldingsHistory{
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
    }
  }
}
`;