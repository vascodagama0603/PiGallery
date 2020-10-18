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
      discription
      specs{
        id
        name
        isCheck
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
    <Header
      siteTitle="Raspberry Pi Gallery"
    />
    <SEO title="Home" />
    <div className={styles.grid}>
    {data.QLdata.purposes.map(purpose => (
        <div className={styles.card}>
          <PurposeCard
            key = {purpose.title}
            style={{"display": "block"}}
            purpose={purpose}
          />
        </div> 
    ))}
    </div>
  </>);

export default IndexPage
