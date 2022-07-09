import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { withStyles, ButtonBase, Grid } from "@material-ui/core"

const style = theme => ({
  previewButton: {
    display: "inline-block",
    background: "transparent",
    border: "none",
    width: "100%",
    height: "100%",
  },
  thumbnail: {
    aspectRatio: "2/3",
  },
})

const ThumbGrid = ({ images, classes, handleOpen }) => {
  return images.map((image, i) => (
    <Grid item key={i} xs={12} sm={6} md={4}>
      <ButtonBase onClick={handleOpen(i)} className={classes.previewButton}>
        <Img
          fluid={image.node.childImageSharp.fluid}
          className={classes.thumbnail}
          alt={image.node.base}
        />
      </ButtonBase>
    </Grid>
  ))
}

ThumbGrid.propTypes = {
  classes: PropTypes.object,
  images: PropTypes.array,
}
export default withStyles(style)(ThumbGrid)
