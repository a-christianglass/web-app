import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"
import ImageTextRow from "../layouts/ImageTextRow"
import LogosGrid from "../layouts/LogosGrid"

const Layouts = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "doors.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      windows: file(relativePath: { eq: "windows.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      logo: file(relativePath: { eq: "windoor.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  const buttonObj = {
    url: "/",
    title: "See More",
  }
  return (
    <Layout seo={{ title: "Layouts - ONLY FOR DEV" }}>
      <LayoutTitle>MiscContent</LayoutTitle>
      <MiscContent content={`<p>Some content Here</p>`} />
      <LayoutTitle>ImageTextRow</LayoutTitle>
      <ImageTextRow
        image={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
      />
      <ImageTextRow
        image={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
        reverse
      />

      <ImageTextRow
        image={staticQuery.windows}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
        contained
      />
      <ImageTextRow
        image={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
        reverse
        contained
      />
      <LayoutTitle>LogosGrid</LayoutTitle>
      <LogosGrid
        logos={[
          {
            logo: staticQuery.logo,
          },
          {
            logo: staticQuery.logo,
          },
          {
            logo: staticQuery.logo,
          },
          {
            logo: staticQuery.logo,
          },
          {
            logo: staticQuery.logo,
          },
          {
            logo: staticQuery.logo,
          },
          {
            logo: staticQuery.logo,
          },
          {
            logo: staticQuery.logo,
          },
          {
            logo: staticQuery.logo,
          },
          {
            logo: staticQuery.logo,
          },
        ]}
        title="Partnering with the Best"
      />
    </Layout>
  )
}

export default Layouts
