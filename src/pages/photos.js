import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../styles/photos.module.css"
import { Container, Row, Col } from "react-bootstrap"
import Gallery from "../components/gallery"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Photos = ({ data }) => (
  <Layout>
    <Seo title="Photography" />
    {/* <h1>Photography</h1> */}
    <Gallery />
    {/* <div>
      <div className={styles.row}>
        <div className={styles.column}>
          <StaticImage
            src="../images/photos/sf-rolling-hills.jpeg"
            width={600}
            placeholder="tracedSVG"
          ></StaticImage>
        </div>
        <div className={styles.column}>
          <StaticImage
            src="../images/photos/san-diego-sunset-cliffs.jpeg"
            width={600}
            placeholder="tracedSVG"
          ></StaticImage>
        </div>
        <div className={styles.column}>
          <StaticImage
            src="../images/photos/nyc-vessel.jpeg"
            width={600}
            placeholder="tracedSVG"
          ></StaticImage>
        </div>
      </div>
    </div> */}
    <Link to="/" className={styles.back}>
      Back
    </Link>
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

{
  /* <Container>
      <Row>
        {data.gallery.edges.map(({ node }) => (
          <Col lg={2} key={node.id}>
            {node.base}
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt={node.base}
            />
          </Col>
        ))}
      </Row>
    </Container> */
}

// {gallery.map((item) => (
//   <div>
//     <div>{item.name}</div>
//     <StaticImage
//       src={String(item.name)}
//       width={600}
//       placeholder="tracedSVG"
//     ></StaticImage>
//   </div>
// ))}
