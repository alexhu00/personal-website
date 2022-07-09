import React, { useState } from "react"
import ThumbGrid from "./thumbnails"
import LightBox from "./lightbox"
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

  //   function shuffle(array) {
  //     let currentIndex = array.length,
  //       randomIndex

  //     // While there remain elements to shuffle.
  //     while (currentIndex != 0) {
  //       // Pick a remaining element.
  //       randomIndex = Math.floor(Math.random() * currentIndex)
  //       currentIndex--

  //       // And swap it with the current element.
  //       ;[array[currentIndex], array[randomIndex]] = [
  //         array[randomIndex],
  //         array[currentIndex],
  //       ]
  //     }

  //     return array
  //   }

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          source: allFile(filter: { relativeDirectory: { eq: "photos" } }) {
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
              />
            )}
          </Grid>
        )
      }}
    />
  )
}
export default GalleryComponent
