import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Photos = () => (
  <Layout>
    <Seo title="Photography" />
    <h1>Photography</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Back</Link>
  </Layout>
)

export default Photos
