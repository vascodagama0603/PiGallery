import React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
//import SEO from "../components/seo"
import PurposeCard from "../components/PurposeCard";
import SearchBox from "../components/SearchBox";
import { graphql } from 'gatsby';
import styles from "./index.module.css"
import Header from "../components/header"
import SEO from "../components/seo"
import "./indexCommon.css"
export const query = graphql`
query {
  QLdata {
    purposes(sort: "updated_at:DESC")  {
      images{
        url
      }
      id
      url
      title
      rank
      discription
      specs{
        id
        name
        isCheck
        discription
        sales{
          price
          url
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => (
  <>
    {/*
    <div className={styles.searchbox}>
      <SearchBox />
    </div>
    */}
    <SEO title="Home" />
    <div>
      <Header
        siteTitle="Raspberry Pi Gallery"
      />
      <div className ={styles.discriptionarea}>
      <div className={styles.discription}>
      <h2><span>Raspberry Pi Galleryは</span><span>様々な</span><span>ブログの部品購入金額を</span><span>まとめたサイトです。</span></h2>
      </div>
      </div>
      
      <div className={styles.grid}>
      {data.QLdata.purposes.map(purpose => (
          <div >
            <PurposeCard
              key = {purpose.title}
              purpose={purpose}
            />
          </div> 
      ))}
      </div>
    </div>
  </>);

export default IndexPage
