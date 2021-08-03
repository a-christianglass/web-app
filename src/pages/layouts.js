import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"
import ImageTextRow from "../layouts/ImageTextRow"
import LogosGrid from "../layouts/LogosGrid"
import AppointmentBanner from "../layouts/AppointmentBanner"
import CallUsBanner from "../layouts/CallUsBanner"
import HomeHero from "../layouts/home-hero"
import CommonHeroBanner from "../layouts/CommonHeroBanner"
import BlueFeaturesSection from "../layouts/BlueFeaturesSection"

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
      phone: file(relativePath: { eq: "phone-woman-cta.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      openDoor: file(relativePath: { eq: "open-door.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      homeHero: file(relativePath: { eq: "home-hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      commonHero: file(relativePath: { eq: "common-hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      features: file(relativePath: { eq: "features.jpg" }) {
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
      <LayoutTitle>HomeHero</LayoutTitle>
      <HomeHero
        image={staticQuery.homeHero}
        title={"Best Impact Windows and Doors in South Florida"}
        subtitle={"30 years in the business"}
        button={buttonObj}
      />
      <LayoutTitle>CommonHero</LayoutTitle>
      <CommonHeroBanner
        image={staticQuery.commonHero}
        title={"About"}
        content={
          "We are a family owned and a full service glass company for all your projects; from a glass replacement to major high-rise and commercial storefronts developments."
        }
      />
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
      <LayoutTitle>AppointmentBanner</LayoutTitle>
      <AppointmentBanner
        button={buttonObj}
        content={`top quality products and services for our customers and the
          community`}
        color="white"
      />
      <AppointmentBanner
        button={buttonObj}
        content={`top quality products and services for our customers and the
          community`}
        color="gray"
      />
      <AppointmentBanner
        button={buttonObj}
        content={`top quality products and services for our customers and the
          community`}
        color="whiteGray"
      />
      <AppointmentBanner
        button={buttonObj}
        content={`top quality products and services for our customers and the
          community`}
        color="grayWhite"
      />
      <LayoutTitle>CallUsBanner</LayoutTitle>
      <CallUsBanner
        title={`Do you need a quick response from our team?`}
        image={staticQuery.phone}
        number={`(561) 278-3385`}
        content={`Our expert staff will answer any questions and can schedule a free
              consultation.`}
      />{" "}
      <CallUsBanner
        title={`Do you need a quick response from our team?`}
        image={staticQuery.openDoor}
        number={`(561) 278-3385`}
      />
      <LayoutTitle>BlueFeaturesSection</LayoutTitle>
      <BlueFeaturesSection
        image={staticQuery.features}
        title={`<h2>With A-Christian Glass<br>you Protect your Home from</h2>`}
      />
    </Layout>
  )
}

export default Layouts
