import React from "react"
import { graphql} from "gatsby"
import SpecList from "./SpecList"
export default function BlogPost({ data }) {
  var purpose = data.QLdata.purpose
  return (
    <div>

        <h1>タイトル</h1>
        <h2> {purpose.title}</h2>
        <h1>ブログURL</h1>
        <h2> 　{purpose.url}</h2>
        <h1>内容</h1>
        <h2> 　{purpose.discription}</h2>
        {purpose.images.map(img=>(
          <div><img src={img.url}  /></div>
          
        ))}
        <h1>部品</h1>
        {purpose.specs.map(spec=>(
          <SpecList
            spec = {spec.name}
            sales = {spec.sales}
          />
        ))}
        
    </div>
  )
}
export const query = graphql`
  query($blogId: ID!) {
    QLdata {
      purpose(id: $blogId) {
        title
        url
        discription
        images{
          url
        }
        specs{
          name
          sales{
            price
            url
          }
        }
      }
    }
  }
`