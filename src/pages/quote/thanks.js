import React, { useEffect } from "react"

import Layout from "../../components/layout"
import Container from "@material-ui/core/Container"

const ThankYouPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("track", "Lead")
      }
      if (window.pintrk != null) {
        window.pintrk("track", "lead")
      }
    }
  }, [])
  return (
    <Layout
      seo={{
        title: "Thank You",
        metaRobotsNoindex: "noindex",
        metaRobotsNofollow: "nofollow",
      }}
      isWhite={true}
      hideFooterBanner={true}
    >
      <Container
        style={{
          textAlign: "center",
          paddingTop: "20em",
          paddingBottom: "20em",
        }}
      >
        <h1 style={{ color: "#1284B8" }}>
          Thank you for contacting A-Christian Glass
        </h1>
      </Container>
    </Layout>
  )
}

export default ThankYouPage
