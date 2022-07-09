import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/about.module.css"
import Img from "gatsby-image"

const About = () => {
  return (
    <Layout>
      <Seo title="Photography" />
      <div className={styles.container}>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
      </div>
    </Layout>
  )
}

export default About
