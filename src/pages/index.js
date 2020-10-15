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
  allStrapiPurpose {
    edges {
      node {
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
}
`

const IndexPage = ({data}) => (
  <>
    <div className={styles.searchbox}>
      <SearchBox />
    </div>
    <div className={styles.grid}>
    {data.allStrapiPurpose.edges.map(purpose => (
      
        
        <div className={styles.card}>

          <Link to={purpose.node.id} style={{ textDecoration: 'none', color: 'Black' }}>
          <PurposeCard
            style={{"display": "block"}}
            purpose={purpose.node}
          />
          </Link>
        </div>
      
      
    ))}
    </div>
  </>);
const cardstyle = {
  marginTop: '1.25rem',
  fontSize: '1.1rem',
  lineHeight: 1.75,
  background: "DodgerBlue",
  padding: "40px",
}

export default IndexPage
