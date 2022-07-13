import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Gallery from "../components/galleries/yahoo_gallery/gallery"
import OldGallery from "../components/galleries/yahoo_gallery/oldGallery"

const Yahoo = () => {
  return (
    <Layout>
      <Seo title="Yahoo" />
      <StaticImage src="../images/projectCovers/yahoo.png"></StaticImage>
      <h1 style={{ marginTop: "2rem" }}>Yahoo Fantasy Re-Design</h1>
      <p>
        As a fun side-project, I decided to re-design the Yahoo Fantasy
        basketball website with the following goals in mind: ​
      </p>
      <p>1.) Improve the visual aesthetic of the desktop version</p>
      <p>2.) Reduce information clutter</p>
      <p>3.) Add more player analysis features ​</p>
      <hr style={{ marginTop: "2rem" }}></hr>
      <h2>Actual Desktop Site</h2>
      <OldGallery />
      <hr style={{ marginTop: "3rem" }}></hr>
      <h2>Re-Design</h2>
      <Gallery />
    </Layout>
  )
}

export default Yahoo
