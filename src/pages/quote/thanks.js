import React from "react"

import Layout from "../../components/layout"
import Container from "@material-ui/core/Container"

const ThankYouPage = () => (
  <Layout seo={{ title: "Thank You" }}>
    <Container
      style={{ textAlign: "center", paddingTop: "10em", paddingBottom: "10em" }}
    >
      <h1 style={{ color: "#1284B8" }}>
        Thank you for contacting A-Christian Glass
      </h1>
    </Container>
  </Layout>
)

export default ThankYouPage
