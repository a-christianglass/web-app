import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"
import ImageTextRow from "../layouts/ImageTextRow"

const Layouts = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "doors.jpg" }) {
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
      <LayoutTitle>Image Text Row</LayoutTitle>
      <ImageTextRow
        image={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
      />
    </Layout>
  )
}

export default Layouts
