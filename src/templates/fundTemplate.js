import React from "react";
import { graphql } from "gatsby";
import Site from "../components/Site";
   
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
      participation {
        id
        allowedAssets {
          id
          symbol
        }
      }
    }
  }
}
`;