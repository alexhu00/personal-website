import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/AH.png"
import * as styles from "../styles/header.module.css"
import { Container, Navbar } from "react-bootstrap"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle }) => (
  <header className={styles.mobileNav}>
    <Container>
      <Navbar
        sticky="top"
        style={{
          margin: `0 auto`,
          padding: "80px 60px 20px 60px",
          display: `flex`,
          justifyContent: `space-between`,
          backgroundColor: "rgb(250, 250, 250)",
          maxWidth: 850, // essentially 730 after 60 60 padding
        }}
      >
        <div class="navbar-brand">
          <AniLink fade to="/">
            <img src={logo} alt={siteTitle} height={12}></img>
          </AniLink>
        </div>
        <div>
          <AniLink fade to="/photos" className={styles.navItem}>
            Photos
          </AniLink>
          <AniLink fade to="/projects" className={styles.navItem}>
            Projects
          </AniLink>
          <AniLink fade to="/about" className={styles.navItem}>
            About
          </AniLink>
        </div>
      </Navbar>
      <div
        style={{
          margin: `0 auto`,
          padding: "0px 60px 0px 60px",
        }}
      >
        <hr
          style={{
            maxWidth: 730,
            margin: "0 auto",
          }}
        ></hr>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
