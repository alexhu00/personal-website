import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/AH.png"
import * as styles from "../styles/header.module.css"
import { Container, Navbar } from "react-bootstrap"

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
        <a class="navbar-brand">
          <Link to="/">
            <img src={logo} alt={siteTitle} height={12}></img>
          </Link>
        </a>
        <div>
          <Link to="/photos" className={styles.navItem}>
            Photos
          </Link>
          <Link to="/projects" className={styles.navItem}>
            Projects
          </Link>
          <Link to="/about" className={styles.navItem}>
            About
          </Link>
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
