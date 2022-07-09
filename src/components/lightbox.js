import React from "react"

//https://github.com/treyhuffine/lightbox-react/blob/master/src/lightbox-react.js
//https://reactjsexample.com/lightbox-for-components-or-images-built-for-react/
import LightboxReact from "lightbox-react"
import "lightbox-react/style.css"

import NonStretchedImage from "./nonStretchedImage"

const Lightbox = ({
  images,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
}) => {
  const array = []
  const titles = []

  images.forEach(image =>
    array.push(<NonStretchedImage fluid={image.node.childImageSharp.fluid} />)
  )

  images.forEach(image =>
    titles.push(image.node.base.split(".")[0].replaceAll("-", " "))
  )

  return (
    <LightboxReact
      enableZoom={false}
      clickOutsideToClose={true}
      mainSrc={array[selectedImage]}
      nextSrc={array[(selectedImage + 1) % array.length]}
      prevSrc={array[(selectedImage + array.length - 1) % images.length]}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
      onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
      imageTitle={titles[selectedImage]}
    />
  )
}

export default Lightbox
