import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>About</h1>
    <p>Welcome to About</p>
    <Link to="/">Back</Link>
  </Layout>
)

export default About
