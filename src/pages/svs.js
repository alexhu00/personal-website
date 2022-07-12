import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/project-page.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Gallery from "../components/galleries/svs_gallery/gallery"

const Svs = () => {
  return (
    <Layout>
      <Seo title="Svs" />
      <StaticImage src="../images/projectCovers/svs.png"></StaticImage>
      <h1>Social Media Graphics</h1>
      <p>
        For two years I served as the Marketing Director for NYU Strategic
        Venture Society, a Venture Capital club at NYU. Below are some samples
        of the marketing and graphic design work I've done.
      </p>
      <hr style={{ marginTop: "2rem" }}></hr>
      <Gallery />
    </Layout>
  )
}

export default Svs
