import React from "react"

import Layout from "../../components/layout"
import Container from "@material-ui/core/Container"
import { Helmet } from "react-helmet"

const ThankYouPage = () => (
  <Layout seo={{ title: "Thank You" }} isWhite={true} hideFooterBanner={true}>
    <Helmet>
      <script
        dangerouslySetInnerHTML={{
          __html: `fbq('track', 'Lead');`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `pintrk('track', 'lead')`,
        }}
      />
    </Helmet>
    <Container
      style={{ textAlign: "center", paddingTop: "20em", paddingBottom: "20em" }}
    >
      <h1 style={{ color: "#1284B8" }}>
        Thank you for contacting A-Christian Glass
      </h1>
    </Container>
  </Layout>
)

export default ThankYouPage
