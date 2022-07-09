import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const HomeImage = props => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    return array
  }

  return (
    <StaticQuery
      query={graphql`
        query Query {
          source: allFile(filter: { relativeDirectory: { eq: "homePage" } }) {
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
        const images = shuffle(data.source.edges)
        return (
          <Img
            fluid={images[0].node.childImageSharp.fluid}
            alt={images[0].node.base}
          />
        )
      }}
    />
  )
}

export default HomeImage
