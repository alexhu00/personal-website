import React, { useState } from "react"
import ThumbGrid from "./thumbnails"
import LightBox from "../lightbox"
import { Grid } from "@material-ui/core"
import { graphql, StaticQuery } from "gatsby"

const GalleryComponent = props => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpen = i => e => {
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length)
  }

  function caps(str) {
    const arr = str.split(" ")
    arr[0] += ","
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    return arr.join(" ")
  }

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          source: allFile(
            filter: { relativeDirectory: { eq: "photos" } }
            sort: { fields: [base] }
          ) {
            edges {
              node {
                base
                birthTime
                childImageSharp {
                  fluid(maxHeight: 700) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const images = data.source.edges
        return (
          <Grid container spacing={3}>
            <ThumbGrid images={images} handleOpen={handleOpen} />
            {showLightbox && selectedImage !== null && (
              <LightBox
                images={images}
                handleClose={handleClose}
                handleNextRequest={handleNextRequest}
                handlePrevRequest={handlePrevRequest}
                selectedImage={selectedImage}
                caps={caps}
              />
            )}
          </Grid>
        )
      }}
    />
  )
}
export default GalleryComponent
