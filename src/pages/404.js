import React from "react"

import Layout from "../components/layout"
import Container from "@material-ui/core/Container"

const NotFoundPage = () => (
  <Layout
    seo={{ title: "404: Not Found" }}
    isWhite={true}
    hideFooterBanner={true}
  >
    <Container
      style={{ textAlign: "center", paddingTop: "20em", paddingBottom: "20em" }}
    >
      <h1 style={{ color: "#1284B8" }}>NOT FOUND</h1>
    </Container>
  </Layout>
)

export default NotFoundPage
