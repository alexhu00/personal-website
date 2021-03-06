import React from "react"
import Img from "gatsby-image"

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        // maxHeight: window.innerHeight - 50,
        height: "auto",
        width: "auto",
        margin: "50px auto 0", // Used to center the image
      },
    }
  }
  return <Img {...normalizedProps} />
}
export default NonStretchedImage
