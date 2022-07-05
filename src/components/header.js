import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/AH.png"
import { navBar, navItem } from "../styles/header.module.css"

import { Container, Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar
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
            <img src={logo} alt={siteTitle} height={15}></img>
          </Link>
        </a>
        <div>
          <Link to="/photos" className={navItem} style={{ marginRight: 30 }}>
            Photos
          </Link>
          <Link to="/projects" className={navItem} style={{ marginRight: 30 }}>
            Projects
          </Link>
          <Link to="/about" className={navItem}>
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

{
  /* <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <Link to="/photos" className="nav-link" activeClassName="active">
              Photos
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/projects" className="nav-link" activeClassName="active">
              Projects
            </Link>
          </li>
        </ul> */
}
