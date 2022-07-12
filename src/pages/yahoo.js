import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/project-page.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Yahoo = () => {
  return (
    <Layout>
      <Seo title="Yahoo" />
      <StaticImage src="../images/projects/yahoo.png"></StaticImage>
      <h1>Yahoo Fantasy Re-Design</h1>
      <p>
        As a fun side-project, I decided to re-design the Yahoo Fantasy
        basketball website with the following goals in mind: ​
      </p>
      <p>1.) Improve the visual aesthetic of the desktop version</p>
      <p>2.) Reduce information clutter</p>
      <p>3.) Add more player analysis features ​</p>
      <div className={styles.row}>
        <div className={styles.column}>
          <StaticImage src="../images/projects/yahoo.png"></StaticImage>
        </div>
        <div className={styles.column}>
          <StaticImage src="../images/projects/yahoo.png"></StaticImage>
        </div>
      </div>
    </Layout>
  )
}

export default Yahoo
