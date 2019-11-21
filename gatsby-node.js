
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const fundTemplate = path.resolve(`src/templates/fundTemplate.js`);
  const fundManager = path.resolve(`src/templates/fundManagerTemplate.js`);
  const fundStrategy = path.resolve(`src/templates/fundStrategyTemplate.js`);
  
  return graphql(`
    query loadFundsQuery{
          melon {
            funds(orderBy: name, skip: 1, where: {gav_gt: "1000000000000000", isShutdown: false, sharePrice_not: "1"}) {
              name
              id
              createdAt
              manager {
                  id
              }  
          }
        }
      }`
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    let i = 0;
    let prev = 0;
    let next = 0;
    console.log(result.data.melon.funds.length);
    var fundcount = result.data.melon.funds.length;
    console.log("Fundcount:",fundcount);

    result.data.melon.funds.forEach(({id, name, manager,createdAt}) => {
      
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
        
        path: `/${id}`,
        component: fundTemplate,
        context: {
            id: `${id}`,
            index: `${i}`,
            previous: `${prev}`,
            next: `${next}`,
            name: `${name}`,
            manager_id: `${manager.id}`,
            createdAt: `${createdAt}`
        },
      })
      if ( i<fundcount ){
      i = i + 1;
      }
    })

    result.data.melon.funds.forEach(({manager, id}) => {

        createPage({
            
            path: `/manager-${manager.id}`,
            component: fundManager,
            context: {
               id: `${id}`,
               manager_id: `${manager.id}`,
            }
        })
    })

    result.data.melon.funds.forEach(({manager, id}) => {

        createPage({
            
            path: `/strategy-${manager.id}-${id}`,
            component: fundStrategy,
            context: {
                id: `${id}`,
                manager_id: `${manager.id}`,
             }
         })
     })
  })
}

