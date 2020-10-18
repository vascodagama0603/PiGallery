import React from "react"
import { graphql,Link} from "gatsby"
import SpecList from "./SpecList"
import ImageSlides from "./ImageSlides"

export default function BlogPost({ data }) {
  var purpose = data.QLdata.purpose
  var numString = '12345';
  Number(numString).toLocaleString(); // "12,345"
  return (
    <div>
        <h1>
          <Link to ={purpose.url}>{purpose.title}</Link> 
        </h1>
        <h2> 　{purpose.discription}</h2>
        <ImageSlides
          imgs = {purpose.images}
          
          />
        {/*
          purpose.images.map(img=>(
          <div><img src={img.url}  /></div>
          
        ))*/
        }
        <h1>金額</h1>
        <h2>￥{Number(numString).toLocaleString()}</h2>
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