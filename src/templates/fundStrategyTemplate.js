import React from "react";
import { graphql } from "gatsby";
import StaticSite from "../components/StaticSite";
import { Link } from "gatsby";
import {getAccount} from "../web3/melonweb3";


export default class Page extends React.Component{

  constructor(props){
    super(props);
   
    this.state = {
        ready: false,
    }
  }

  async componentDidMount(){
    const account = await getAccount();
    this.setState({
        ready: true,
        accountAddress: account
    });
    try{
      window.ethereum.on('accountsChanged', async()=>{
          this.setState({accountAddress: getAccount()})
      })}catch{
        console.log("No Metamask");
    }
  }

  content = () => {
    if (typeof this.props.data.allWordpressPost.edges === 'undefined' || this.props.data.allWordpressPost.edges.length === 0){
      return {__html: "Fund-Manager: Please insert Content"};
    }
    else {
      return {__html: this.props.data.allWordpressPost.edges[0].node.content};
    }
  }

  button = () => {
    if ( this.state.accountAddress === this.props.pageContext.manager_id ){
      return {__html: "<a href='https://manager.gorillafunds.org/wp-login.php'>\
                            <h4>\
                              Edit Page\
                            </h4>\
                          </a>"}
    } else {
      return {__html: ""};
    }
  }

  render(){

  //console.log("fundManagerTemplate.js:",props)
  return (
      <div className="WordpressSite">
        <StaticSite 
          title={this.props.pageContext.manager_id}
          id={this.props.pageContext.id} 
          manager_id={this.props.pageContext.manager_id}
          css="Content ContentFundList ManagerStrategyPage"
      >
        <h6>Fund-Manager</h6>
        <h6>Manager-Address:{this.props.pageContext.manager_id}</h6>
        <div dangerouslySetInnerHTML={this.content(this.props)}/>
        <div dangerouslySetInnerHTML={this.button(this.props)}/>
          <Link to={`/${this.props.pageContext.id}`}>
               <div className="BaseButton MoreButton" style={{float:'left', bottom:'10px', position: 'absolute'}}>
                  <h6>
                      Back
                  </h6>
              </div>
          </Link>
      </StaticSite>
    </div>
    )
  }
}

export const query = graphql`
 query MyWordPressStrategyQuery ($manager_id: String!){
      allWordpressPost(filter: {author: {name: {eq: $manager_id}}, categories: {elemMatch: {name: {eq: "Strategy"}}}}) {
        edges {
          node {
            content
          }
        }
      }
    }
  `;
