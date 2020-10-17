/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `StrapiPurpose`) {
    const slug = node.id
    console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { data } = await graphql(`
  query {
    QLdata {
      purposes {
        id
        title
      }
    }
  }
  `)
  //console.log(JSON.stringify(data, null, 4))


  data.QLdata.purposes.forEach(({id, title }) => {
      console.log("AAA",id)
      
      createPage({
        path: id,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          blogId:id
        },
      })
      
    })
    
}