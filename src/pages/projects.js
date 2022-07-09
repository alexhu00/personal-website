import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <h1>Projects</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Back</Link>
  </Layout>
)

export default Projects