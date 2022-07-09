import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/projects.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <div className={styles.row}>
      <div className={styles.column}>
        <StaticImage src="../images/projects/yahoo.png"></StaticImage>
      </div>
      <div className={styles.text}>
        <p className={styles.projectTitle}>
          <b>Yahoo Fantasy Re-Design</b>
        </p>
        <p>Product Design</p>
        <p>Wireframing</p>
        <p>Figma</p>
        <p>Sports</p>
      </div>
    </div>
  </Layout>
)

export default Projects
