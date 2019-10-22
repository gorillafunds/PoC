import React from "react"
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import StaticSite from "../components/StaticSite";
import FundListItem from "../components/FundListItem";
import FundList from "../components/FundList";

export const GATSBY_QUERY = graphql`{
    melon {
      funds(orderBy: name, first:10, skip: 1) {
       name
       id
      }
    }
  }`

export default ({ data })  => {
  console.log(data)
  
  return(
      <StaticSite title="Funds on the Melon-Network">
        <FundList>
        {data.melon.funds.map(({name,id}) => (
            <div key={id}>
              <Link to={id}> 
                <div className="FundList">
                  <FundListItem id={id} name={name}/>
                  <br/>
                </div>
              </Link>
            </div>
            ))
        }
      </FundList>
      </StaticSite>
  )};
  