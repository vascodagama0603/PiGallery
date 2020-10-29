import React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
//import SEO from "../components/seo"
import PurposeCard from "../components/PurposeCard";
import SearchBox from "../components/SearchBox";
import { graphql } from 'gatsby';
import styles from "./index.module.css"
import Header from "../components/header"
import Footer from "../components/Footer"
import MainPage from "../components/MainPage"
import SEO from "../components/seo"
import "./indexCommon.css"
export const query = graphql`
query {
  QLdata {
    purposes(sort: "updated_at:DESC")  {
      images{
        url
        id
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
    <SEO
      title="Raspberry Pi Gallery"/>
    <div>
      <Header
        siteTitle="Raspberry Pi Gallery"
      />
      <div className ={styles.discriptionarea}>
        <div className={styles.discription}>
          <h2>Raspberry Pi Galleryは様々なブログの部品や金額をまとめたサイトです。</h2>
          
        </div>
        <div className={styles.moreinfo}>
          <p>部品の金額は日々変動しますのでご参考程度にしてください。</p>
        </div>
      </div>
      
      <MainPage
        purposes = {data.QLdata.purposes}
      />
      <Footer/>
    </div>
  </>);

export default IndexPage
