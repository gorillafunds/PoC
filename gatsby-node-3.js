//import web3 from 'web3'
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

const path = require(`path`)
let fundcount = 20

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const fundTemplate = path.resolve(`src/templates/fundTemplate.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query loadFundsQuery ($limit: Int!) {
          melon {
            funds(orderBy: name, first:$limit, skip: 1, where: {sharePrice_not: 1000000000000}) {
              name
              id
              gav
              sharePrice
              totalSupply
              calculationsHistory {
                sharePrice
            }
          }
        }
      }`
  , { limit: fundcount }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    let i = 0;
    let prev = 0;
    let next = 0;

    result.data.melon.funds.forEach(({id, name}) => {
      
      if( i != 0 ){
        prev = i-1;
      } else {
        prev = i;
      }
      if ( i != fundcount - 1 ) { 
        next = i+1;
      } else {
        next = fundcount - 1;
      }

      createPage({
        // Path for this page — required
        //path: `${__dirname}/src/pages/${id}`,
        
        path: `/${id}`,
        component: fundTemplate,
        context: {
            id: `${id}`,
            index: `${i}`,
            previous: `${prev}`,
            next: `${next}`,
            name: `${name}`,
          
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
      if ( i<fundcount ){
      i = i + 1;
      console.log(i);
      }
    })
  })
}
