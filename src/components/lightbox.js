import React from "react"

//https://github.com/treyhuffine/lightbox-react/blob/master/src/lightbox-react.js
//https://reactjsexample.com/lightbox-for-components-or-images-built-for-react/
import LightboxReact from "lightbox-react"
import "lightbox-react/style.css"
import NonStretchedImage from "./nonStretchedImage"

function caps(str) {
  const arr = str.split(" ")
  arr[0] += ","
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(" ")
}

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
    titles.push(
      caps(
        image.node.base
          .split(".")[0]
          .replaceAll("-", " ")
          .replaceAll(/[0-9]/g, "")
      ).replaceAll("( ", "(")
    )
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
