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
      <a className={styles.column}>
        <Link to="/yahoo">
          <StaticImage src="../images/projectCovers/yahoo.png"></StaticImage>
        </Link>
      </a>
      <div className={styles.text}>
        <p className={styles.projectTitle}>
          <Link to="/yahoo" className={styles.links}>
            <b>Yahoo Fantasy Re-Design</b>
          </Link>
        </p>
        <p>Product Design</p>
        <p>Wireframing</p>
        <p>Figma</p>
        <p>Sports</p>
      </div>
    </div>
    <div className={styles.row}>
      <a
        className={styles.column}
        href="https://issuu.com/corporateaction/docs/thecall2020_nyustern/26"
        target="_blank"
      >
        <StaticImage src="../images/projectCovers/olympics.png"></StaticImage>
      </a>
      <div className={styles.text}>
        <p className={styles.projectTitle}>
          <a
            href="https://issuu.com/corporateaction/docs/thecall2020_nyustern/26"
            target="_blank"
            className={styles.links}
          >
            <b>Olympics Sustainability Proposal</b>
          </a>
        </p>
        <p>Writing</p>
        <p>Stakeholder Analysis</p>
        <p>Sustainability</p>
        <p>Sports</p>
      </div>
    </div>
    <div className={styles.row}>
      <a className={styles.column}>
        <Link to="/svs">
          <StaticImage src="../images/projectCovers/svs.png"></StaticImage>
        </Link>
      </a>
      <div className={styles.text}>
        <p className={styles.projectTitle}>
          <Link to="/svs" className={styles.links}>
            <b>Social Media Graphics</b>
          </Link>
        </p>
        <p>Graphic Design</p>
        <p>Marketing</p>
        <p>Figma</p>
        <p>Instagram</p>
      </div>
    </div>
    <div className={styles.row}>
      <a
        className={styles.column}
        href="https://drive.google.com/file/d/19qh3W-DjEu0PPG-gkUITjSVPEo33ct3S/view?usp=sharing"
        target="_blank"
      >
        <StaticImage src="../images/projectCovers/glooko.png"></StaticImage>
      </a>
      <div className={styles.text}>
        <p className={styles.projectTitle}>
          <a
            href="https://drive.google.com/file/d/19qh3W-DjEu0PPG-gkUITjSVPEo33ct3S/view?usp=sharing"
            target="_blank"
            className={styles.links}
          >
            <b>Glooko Pitch Deck</b>
          </a>
        </p>
        <p>Venture Capital</p>
        <p>Slide Design</p>
        <p>Digital Health</p>
        <p>Diabetes</p>
      </div>
    </div>
  </Layout>
)

export default Projects
