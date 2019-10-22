import React from 'react';
import { Link } from "gatsby";
import { StaticQuery, graphql } from 'gatsby';

// String für slug verketten
let concenated_string = (string_list_array) => {
    return string_list_array.join('.');
}

let content = (data, props) => {
    
    console.log("Hier:",data);
    console.log("props",props);

    if (typeof data.allWordpressPost.edges === 'undefined' || data.allWordpressPost.edges.length === 0){
        console.log("1");
        return {__html: "Fund-Manager: Please insert Content"}
    }
    else {
            let ManagerContent = data.allWordpressPost.edges.filter((element) => {
                    console.log(element);
                   let author_name = element.node.author.name;
                   console.log(author_name);
                    if (author_name === props.manageraddress){
                        return true;
                    } else {
                        return false;
                    }
                }
            )
            console.log("ManagerContent", ManagerContent)

            if ( ManagerContent.length !== 0 ){
                if ( typeof ManagerContent[0].node.content !== 'undefined'){
                        console.log(2);
                        return { 
                            __html: ManagerContent[0].node.content
                            }
                        }
                    } else {
                        console.log(3);
                        return {
                            __html: "Fund-Manager: Please insert Content, rapidly!"
                        }
                    }
                }   
            
            }   

export default (props) => (

    <StaticQuery 
        query = {graphql`
            query MyWordPressManagerPageQuery {
                allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Manager"}}}}) {
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
        <div className="Manager content-element">
        <div className="ManagerTitel"><h5>Fund-Manager</h5></div>
        <div className="ManagerText">
        <div dangerouslySetInnerHTML={content(data, props)}/>
        </div>
        <div className="ManagerLink">
            <Link to={concenated_string(["manager", props.manageraddress])}>
                 <div className="base_button MoreButton" style={{float:'right'}}>
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

