import * as React from "react"
import { graphql } from "gatsby"
import Gallery from "../components/galleries/photos_gallery/gallery"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Photos = ({ data }) => (
  <Layout>
    <Seo title="Photography" />
    <Gallery />
  </Layout>
)

export default Photos

export const pageQuery = graphql`
  query {
    gallery: allFile(filter: { relativeDirectory: { eq: "photos" } }) {
      edges {
        node {
          id
          base
          publicURL
          birthTime
          childImageSharp {
            gatsbyImageData(
              transformOptions: { fit: COVER }
              placeholder: BLURRED
              webpOptions: { quality: 50 }
            )
          }
        }
      }
    }
  }
`
