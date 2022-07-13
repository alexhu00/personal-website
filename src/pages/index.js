// import * as React from "react"
import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"
import HomeImage from "../components/homeImage"

var refreshPage = () => window.location.reload()
var instagram = () =>
  window.open("https://www.instagram.com/alexhu._/", "_blank")
var linkedin = () =>
  window.open("https://www.linkedin.com/in/alex-hu00/", "_blank")
var github = () => window.open("https://github.com/alexhu00/", "_blank")

function getRandNum() {
  return Math.floor(Math.random() * 11)
}

const IndexPage = () => {
  const [num, setNum] = useState(getRandNum())
  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.row}>
        <div className={styles.column}>
          <HomeImage num={num} />
        </div>
        <div className={styles.text}>
          <p className={styles.alex}>
            <b>Alex Hu</b>
          </p>
          <p>Product Manager</p>
          <p>Aspiring Photographer</p>
          <p>Sports Nut</p>
          <p>Eater of Food</p>
          <p style={{ paddingTop: "20px" }}>Born in Markham, ON 🍁</p>
          <p style={{ paddingBottom: "30px" }}>Based in New York, NY 🗽</p>
          <p style={{ paddingBottom: "80px" }}>
            <button className={styles.refresh} onClick={refreshPage}>
              <b>refresh</b>
            </button>
          </p>
          <div className={styles.socials}>
            <button className={styles.socialButton} onClick={linkedin}>
              <StaticImage src="../images/socials/linkedin.png" width={23} />
            </button>
            <button className={styles.socialButton} onClick={instagram}>
              <StaticImage src="../images/socials/instagram.png" width={23} />
            </button>
            <button className={styles.socialButton} onClick={github}>
              <StaticImage src="../images/socials/github.png" width={23} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
