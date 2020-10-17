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
    purposes {
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

          <Link to={purpose.id} style={{ textDecoration: 'none', color: 'Black' }}>
          <PurposeCard
            style={{"display": "block"}}
            purpose={purpose}
          />
          </Link>
        </div>
      
      
    ))}
    </div>
  </>);

export default IndexPage
