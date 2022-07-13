import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const HomeImage = ({ num }) => {
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
        const images = data.source.edges
        return (
          <Img
            fluid={images[num].node.childImageSharp.fluid}
            alt={images[num].node.base}
          />
        )
      }}
    />
  )
}

export default HomeImage
