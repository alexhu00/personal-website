import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.row}>
      <div className={styles.column}>
        <StaticImage
          src="../images/photos/sf-rolling-hills.jpeg"
          width={600}
          placeholder="tracedSVG"
        ></StaticImage>
      </div>
      <div className={styles.text}>
        <p className={styles.alex}>
          <b>Alex Hu</b>
        </p>
        {/* <p className={styles.intro}></p> */}
        <p>Product Manager</p>
        <p>Aspiring Photographer</p>
        <p>Sports Nut</p>
        <p>Eater of Food</p>
        <p style={{ paddingTop: "20px" }}>Born in Markham, ON 🍁</p>
        <p style={{ paddingBottom: "20px" }}>Based in New York, NY 🗽</p>
        <button>Refresh</button>
        <div className={styles.socials}>
          <button>IG</button>
          <button>LI</button>
        </div>
      </div>
    </div>
    <div
      style={{
        padding: "1000px",
      }}
    ></div>
  </Layout>
)

export default IndexPage

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

{
  /* <ul className={styles.list}>
{links.map(link => (
  <li key={link.url} className={styles.listItem}>
    <a
      className={styles.listItemLink}
      href={`${link.url}${utmParameters}`}
    >
      {link.text} ↗
    </a>
    <p className={styles.listItemDescription}>{link.description}</p>
  </li>
))}
</ul>
{moreLinks.map((link, i) => (
<React.Fragment key={link.url}>
  <a href={`${link.url}${utmParameters}`}>{link.text}</a>
  {i !== moreLinks.length - 1 && <> · </>}
</React.Fragment>
))} */
}

// <StaticImage
// src="../images/example.png"
// loading="eager"
// width={64}
// quality={95}
// formats={["auto", "webp", "avif"]}
// alt=""
// style={{ marginBottom: `var(--space-3)` }}
// />

// const samplePageLinks = [
//   {
//     text: "Photos",
//     url: "photos",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "Projects", url: "projects" },
//   { text: "About", url: "about" },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`
