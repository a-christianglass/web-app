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
import TornadoIcon from "../images/tornado.svg"
import ServicesHome from "../layouts/ServicesHome"
import GallerySlider from "../layouts/GallerySlider"
import TestimonialSlider from "../layouts/TestimonialSlider"
import ProjectSlider from "../layouts/ProjectSlider"
import FormBanner from "../layouts/FormBanner"
import VideoRow from "../layouts/VideoRow"
import FeaturesRow from "../layouts/features-row"
import ChoicesSection from "../layouts/ChoicesSection"
import TitleTextRow from "../layouts/TitleTextRow"
import ProjectsGrid from "../layouts/ProjectsGrid"

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
      slide1: file(relativePath: { eq: "slide1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      slide2: file(relativePath: { eq: "slide2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      slide3: file(relativePath: { eq: "slide3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      bgForm: file(relativePath: { eq: "form-section.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      acgLogo: file(relativePath: { eq: "acg-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      youtubeBg: file(relativePath: { eq: "bgYoutube.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      hurricanes: file(relativePath: { eq: "hurricanes.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  const projectObj = {
    image: staticQuery.home,
    link: {
      title: "project name 1",
      url: "/",
    },
  }
  const reviewObj = {
    review:
      "The experience was stress free and every one was so helpful and professional. I contacted quite a few vendors but A Christian Glass had the best prices and the whole process was so smooth.\n" +
      "<br><br>Thank you for everything. I would highly recommend A Christian Glass.",
    author: "Ramon C.",
    location: "Tamarac, FL",
  }
  const buttonObj = {
    url: "/",
    title: "See More",
  }
  const featuredCards = [
    {
      icon: TornadoIcon,
      title: "Hurricanes",
      content:
        "Impact windows protect your family and home from severe weather, burglary, and damage caused by the south Florida sun.",
    },
    {
      icon: TornadoIcon,
      title: "Hurricanes",
      content:
        "Impact windows protect your family and home from severe weather, burglary, and damage caused by the south Florida sun.",
    },
    ,
    {
      icon: TornadoIcon,
      title: "Hurricanes",
      content:
        "Impact windows protect your family and home from severe weather, burglary, and damage caused by the south Florida sun.",
    },
    ,
    {
      icon: TornadoIcon,
      title: "Hurricanes",
      content:
        "Impact windows protect your family and home from severe weather, burglary, and damage caused by the south Florida sun.",
    },
  ]
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
        haveAButton={true}
        button={buttonObj}
      />
      <ImageTextRow
        image={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        haveAButton={true}
        button={buttonObj}
        reverse
      />
      <ImageTextRow
        image={staticQuery.windows}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        haveAButton={true}
        button={buttonObj}
        contained
      />
      <ImageTextRow
        image={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        haveAButton={true}
        button={buttonObj}
        reverse
        contained
      />
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
        title="Partnering with the Best"
        logos={[
          {
            image: { sourceUrl: staticQuery.logo },
          },
          {
            image: { sourceUrl: staticQuery.logo },
          },
          {
            image: { sourceUrl: staticQuery.logo },
          },
          {
            image: { sourceUrl: staticQuery.logo },
          },
          {
            image: { sourceUrl: staticQuery.logo },
          },
          {
            image: { sourceUrl: staticQuery.logo },
          },

          {
            image: { sourceUrl: staticQuery.logo },
          },

          {
            image: { sourceUrl: staticQuery.logo },
          },

          {
            image: { sourceUrl: staticQuery.logo },
          },

          {
            image: { sourceUrl: staticQuery.logo },
          },
        ]}
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
        cards={featuredCards}
      />
      <LayoutTitle>ServicesHome</LayoutTitle>
      <ServicesHome
        leftTag="Our Services to Industries "
        leftTitle="A-Christian Glass is a Full Service Interior Glass Gompany"
        leftContent="We work directly with business owners, construction managers and general contractors from the beginning of the project until the job is complete."
        centerTitle="Residential"
        centerContent="A-Christian Glass specializes in custom frameless shower doors. If you are building a new home, renovating an existing bathroom, or simply replacing a shower door, we have the knowledge, skills, and experience to make your dream shower a reality."
        centerLink={{ title: "Know More", url: "/" }}
        rightTitle="Commercial"
        rightContent="A-Christian Glass specializes in custom frameless shower doors. If you are building a new home, renovating an existing bathroom, or simply replacing a shower door, we have the knowledge, skills, and experience to make your dream shower a reality."
        rightLink={{ title: "Know More", url: "/" }}
      />
      <LayoutTitle>GallerySlider</LayoutTitle>
      <GallerySlider
        bgColor={"gray"}
        images={[
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
        ]}
      />
      <GallerySlider
        bgColor={"white"}
        images={[
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
          {
            image: { sourceUrl: staticQuery.slide2 },
          },
        ]}
      />
      <LayoutTitle>TestimonialSlider</LayoutTitle>
      <TestimonialSlider
        leftContent={{
          title: "Testimonials & Reviews",
          subtitle:
            "People are saying great things about A-Christian Glass every day.",
          description:
            "Read what homeowners think about their new impact resistant windows and doors.",
        }}
        slides={[
          {
            slide: reviewObj,
          },
          {
            slide: reviewObj,
          },
          {
            slide: reviewObj,
          },
          {
            slide: reviewObj,
          },
        ]}
      />
      <LayoutTitle>ProjectSlider</LayoutTitle>
      <ProjectSlider
        leftContent={{
          title: "Projects & Gallery",
          subtitle: "A-Christian Glass on Charge",
          content:
            "A-Christian Glass specializes in custom frameless shower doors. If you are building a new home, renovating an existing bathroom, or simply replacing a shower door, we have the knowledge, skills, and experience to make your dream shower a reality.",
          button: buttonObj,
        }}
        projects={[
          { project: projectObj },
          { project: projectObj },
          { project: projectObj },
        ]}
      />
      <LayoutTitle>FormBanner</LayoutTitle>
      <FormBanner />
      <LayoutTitle>VideoRow</LayoutTitle>
      <VideoRow
        videoBg={staticQuery.youtubeBg}
        logo={staticQuery.acgLogo}
        title={"34 Years of Experience"}
        content={
          "   A-Christian Glass is a full-service company for installing and\n" +
          "              replacement of interior and exterior glass doors and impact proof\n" +
          "              window in Delray Beach, Florida. From 1988, we have offered top\n" +
          "              quality products and services for our customers and the community,\n" +
          "              even before and after several hurricanes and other weather systems"
        }
      />
      <LayoutTitle>FeaturesRow</LayoutTitle>
      <FeaturesRow
        image={staticQuery.hurricanes}
        content={{
          title: "Hurricane<br>Windows and Doors",
          features: [
            {
              feature:
                "Our residential window and door department serves homeowners, architects, and designers, offering customized glass solutions: from interior showers and mirrors, glass railings and stairs, to the windows and sliding glass doors of your home.",
            },
            {
              feature:
                "Our shower and mirror department will help you develop and create all ofyour visions and dreams. We can tap into your imagination to find what you desire, and then give you all the necessary professional guidance needed for the project to realize that dream within.",
            },
            {
              feature:
                "Our commercial department will accommodate all types of projects, from a large multiple high-rise structure to a local shopping center or storefront.",
            },
          ],
        }}
      />
      <FeaturesRow
        reverse={true}
        image={staticQuery.hurricanes}
        content={{
          title: "Hurricane<br>Windows and Doors",
          features: [
            {
              feature:
                "Our residential window and door department serves homeowners, architects, and designers, offering customized glass solutions: from interior showers and mirrors, glass railings and stairs, to the windows and sliding glass doors of your home.",
            },
            {
              feature:
                "Our shower and mirror department will help you develop and create all ofyour visions and dreams. We can tap into your imagination to find what you desire, and then give you all the necessary professional guidance needed for the project to realize that dream within.",
            },
            {
              feature:
                "Our commercial department will accommodate all types of projects, from a large multiple high-rise structure to a local shopping center or storefront.",
            },
            {
              feature:
                "Our commercial department will accommodate all types of projects, from a large multiple high-rise structure to a local shopping center or storefront.",
            },
            {
              feature:
                "Our commercial department will accommodate all types of projects, from a large multiple high-rise structure to a local shopping center or storefront.",
            },
            {
              feature:
                "Our commercial department will accommodate all types of projects, from a large multiple high-rise structure to a local shopping center or storefront.",
            },
          ],
        }}
      />
      <LayoutTitle>ChoicesSection</LayoutTitle>
      <ChoicesSection
        leftContent={{
          title: "We Provide Choices for Every Style and Budget",
          content:
            "A-Christian Glass in Delray Beach knows that not all windows are created equal, and today there are more options than ever. Purchasing the right glass is an important decision since there are a variety of composition levels for windows. Educating customers is an important company initiative.<br><br>A-Christian Glass is a complete glass service facility. Behind the scenes, glazers cut, buff and prep hundreds of panes of glass for delivery to multiple destinations from Sunrise to Lake Worth.",
        }}
        rightContent={
          'The better the composition, the better the glass will deflect heat and cool the home," says Dable. "It\'s great to know that a $400 electric bill can be cut in half by upgrading your windows. \n' +
          "They're a definite money-saver, and they also reduce outside noise.\""
        }
      />
      <LayoutTitle>TitleTextRow</LayoutTitle>
      <TitleTextRow
        title={"Superior Service\n"}
        content={
          "For 34 years, A-Christian Glass and Mirror opened its doors and in the decades and one thing remains the same: Customer service remains the foundation of the company's success."
        }
      />
      <LayoutTitle>ProjectGrid</LayoutTitle>
      <ProjectsGrid
        title={"Custom Houses"}
        content={
          "Omnis excepturi totam saepe. Blanditiis aspernatur odit ratione quos. Necessitatibus aspernatur error. Voluptatum amet debitis magnam occaecati ut."
        }
        projects={[
          { project: projectObj },
          { project: projectObj },
          { project: projectObj },
          { project: projectObj },
          { project: projectObj },
          { project: projectObj },
          { project: projectObj },
          { project: projectObj },
          { project: projectObj },
        ]}
      />
    </Layout>
  )
}

export default Layouts
