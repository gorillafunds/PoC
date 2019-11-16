import React from 'react';
import { Link } from "gatsby";
import { StaticQuery, graphql } from 'gatsby';

let concenated_string = (string_list_array) => {
    return string_list_array.join('-');
}

let content = (data, props) => {
    
    //console.log("Hier:",data);
    //console.log("props",props);

    if (typeof data.allWordpressPost.edges === 'undefined' || data.allWordpressPost.edges.length === 0){
        //console.log("1");
        return {__html: "Fund-Manager: Please insert Content"}
    }
    else {
            let StrategyContent = data.allWordpressPost.edges.filter((element) => {
                    //console.log(element);
                   let author_name = element.node.author.name;
                   //console.log(author_name);
                    if (author_name === props.manageraddress){
                        return true;
                    } else {
                        return false;
                    }
                }
            )
            //console.log("StrategyContent", StrategyContent)

            if ( StrategyContent.length !== 0 ){
                if ( typeof StrategyContent[0].node.content !== 'undefined'){
                        //console.log(2);
                        return { 
                            __html: StrategyContent[0].node.content
                            }
                        }
                    } else {
                        //console.log(3);
                        return {
                            __html: "Fund-Manager: Please insert Content, rapidly!"
                        }
                    }
                }   
            
            }   

export default (props) => (

    <StaticQuery 
        query = {graphql`
            query MyWordPressStrategyPageQuery {
                allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Strategy"}}}}) {
                    edges {
                        node {
                            content
                            author {
                                    name
                                }
                            }
                        }
                    }
                }
            `}
     
    render = { data => (
        <div className="Strategy content-element">
        <div className="StrategyTitel"><h5>Strategy</h5></div>
        <div className="StrategyText">
        <div dangerouslySetInnerHTML={content(data, props)}/>
        </div>
        <div className="StrategyLink">
            <Link to={concenated_string(["strategy", props.manageraddress, props.id])}>
                 <div className="BaseButton MoreButton" style={{float:'right'}}>
                    <h6>
                        More
                    </h6>
                </div>
            </Link>
        </div> 
        </div>
        )}
    />
); 

