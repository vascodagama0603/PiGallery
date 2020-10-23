/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
/*
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `StrapiPurpose`) {
    const slug = node.id
    //console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  const { data } = await graphql(`
  query {
    QLdata {
      purposes(sort: "updated_at:DESC") {
        id
        title
        updated_at
      }
    }
  }
  `)
  data.QLdata.purposes.forEach(({id, title }) => {
      createPage({
        path: id,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          blogId:id
        },
      })
      
    })
    
}
*/