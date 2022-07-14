import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/projects.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <div className={styles.row}>
      <a className={styles.column}>
        <AniLink fade to="/yahoo">
          <StaticImage src="../images/projectCovers/yahoo.png"></StaticImage>
        </AniLink>
      </a>
      <div className={styles.text}>
        <p className={styles.projectTitle}>
          <AniLink fade to="/yahoo" className={styles.links}>
            <b>Yahoo Fantasy Re-Design</b>
          </AniLink>
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
            <b>Sustainability Proposal</b>
          </a>
        </p>
        <p>Writing</p>
        <p>Olympics</p>
        <p>Stakeholder Analysis</p>
        <p>Sustainability</p>
      </div>
    </div>
    <div className={styles.row}>
      <a className={styles.column}>
        <AniLink fade to="/svs">
          <StaticImage src="../images/projectCovers/svs.png"></StaticImage>
        </AniLink>
      </a>
      <div className={styles.text}>
        <p className={styles.projectTitle}>
          <AniLink fade to="/svs" className={styles.links}>
            <b>Social Media Graphics</b>
          </AniLink>
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
