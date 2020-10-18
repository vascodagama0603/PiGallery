import React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
//import SEO from "../components/seo"
import PurposeCard from "../components/PurposeCard";
import SearchBox from "../components/SearchBox";
import { graphql } from 'gatsby';
import styles from "./index.module.css"
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
        sales{
          price
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
    <div className={styles.grid}>
    {data.QLdata.purposes.map(purpose => (
        <div className={styles.card}>
          <PurposeCard
            style={{"display": "block"}}
            purpose={purpose}
          />
        </div> 
    ))}
    </div>
  </>);

export default IndexPage
