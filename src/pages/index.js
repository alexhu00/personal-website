import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"
import HomeImage from "../components/homeImage"

var refreshPage = () => window.location.reload()
var instagram = () =>
  (window.location.href = "https://www.instagram.com/alexhu._/")
var linkedin = () =>
  (window.location.href = "https://www.linkedin.com/in/alex-hu00/")

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.row}>
      <div className={styles.column}>
        <HomeImage />
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
            <StaticImage src="../images/socials/linkedin.png" width={25} />
          </button>
          <button className={styles.socialButton} onClick={instagram}>
            <StaticImage src="../images/socials/instagram.png" width={25} />
          </button>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
