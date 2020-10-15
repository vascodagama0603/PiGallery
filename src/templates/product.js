import React from "react"
import { graphql } from "gatsby"
export default function BlogPost({ data }) {
  const post = data
  console.log("AAAAAA")
  console.log(data.strapiPurpose.id)
  return (
    <div>
      <div>
        <h1>{data.strapiPurpose.id}</h1>
        <h2>{data.strapiPurpose.url}</h2>
      </div>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    strapiPurpose(fields: { slug: { eq: $slug } }) {
        id
        url
        title
    }
  }
`

console.log("AAAA")

console.log(query)