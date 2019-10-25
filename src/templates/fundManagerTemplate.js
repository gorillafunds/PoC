import React from "react";
import { graphql } from "gatsby";
import StaticSite from "../components/StaticSite";
import { Link } from "gatsby";
import web3 from "../web3/web3";

const account = web3.currentProvider.selectedAddress;
console.log(account);

// Template für die Pages. Daten können im Inneren von Site als Children übergeben werden, oder über die Attribute
// Die gesammelten Daten für den Fund werden über den dataContainer übergeben, der in gatsby-node gebaut wird.
let content = (props) => {
  if (typeof props.data.allWordpressPost.edges === 'undefined' || props.data.allWordpressPost.edges.length === 0){
    return {__html: "Fund-Manager: Please insert Content"};
  }
  else {
    return {__html: props.data.allWordpressPost.edges[0].node.content};
  }
}

let button = (props) => {
  if ( account === props.pageContext.manager_id ){
    return {__html: "<a href='http://managinggorillafundscom.local/wp-login.php'>\
                          <h4>\
                            Edit Page\
                          </h4>\
                        </a>"}
  } else {
    return {__html: ""};
  }
}
   
const Page = (props) => {
    console.log("fundManagerTemplate.js:",props)
    return (
        <div>
        <StaticSite title={props.pageContext.manager_id}
        id={props.pageContext.id} 
        manager_id={props.pageContext.manager_id}
        >
          <h2>Fund-Manager</h2>
          <h6>Manager-Address:{props.pageContext.manager_id}</h6>
          <div dangerouslySetInnerHTML={content(props)}/>
          <div dangerouslySetInnerHTML={button(props)}/>
          <Link to={props.pageContext.id}>
                 <div className="base_button MoreButton" style={{float:'left', bottom:'10px', position: 'absolute'}}>
                    <h6>
                        Back
                    </h6>
                </div>
            </Link>
        </StaticSite>
      </div>
    )
  }

export default Page

export const query = graphql`
 query MyWordPressManagerQuery ($manager_id: String!){
  allWordpressPost(filter: {author: {name: {eq: $manager_id}}, categories: {elemMatch: {name: {eq: "Manager"}}}}) {
        edges {
          node {
            content
          }
        }
      }
    }
`;

