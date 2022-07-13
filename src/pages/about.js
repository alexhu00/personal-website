import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/index.module.css"

var instagram = () =>
  window.open("https://www.instagram.com/alexhu._/", "_blank")
var linkedin = () =>
  window.open("https://www.linkedin.com/in/alex-hu00/", "_blank")
var github = () => window.open("https://github.com/alexhu00/", "_blank")

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className={styles.row}>
        <div className={styles.column}>
          <p className={styles.points}>Here’s some fun facts about me:</p>
          <p className={styles.points}>
            I'm a HUGE sports fan. The Blue Jays and Raptors are my teams
            (Although Damian Lillard is my favourite of all time). ⚾🏀🕑
          </p>
          <p className={styles.points}>
            I take lots of pics and vids (I shoot with a Nikon D3500 and always
            learning). 📸
          </p>
          <p className={styles.points}>
            I eat a ton of food. Like a ton of food. My metabolism is pretty
            sweet. 🍔
          </p>
          <p className={styles.points}>
            I'm basically lactose intolerant, but I still love cheese.
            Especially poutine cheese curds. 🧀
          </p>
          <p className={styles.points}>
            Feel free to email me at ah4605@stern.nyu.edu
          </p>
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
          <p style={{ paddingBottom: "80px" }}>Based in New York, NY 🗽</p>
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

export default About
