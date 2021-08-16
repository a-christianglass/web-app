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
import DistributorSection from "../layouts/DistributorSection"
import ReasonsSection from "../layouts/ReasonsSection"
import WorksSection from "../layouts/WorksSection"
import IndustriesServices from "../layouts/IndustriesServices"
import MiscHero from "../layouts/MiscHero"
import FormSection from "../layouts/form-section"
import ContactInfo from "../layouts/ContactInfo"
import TellUsSection from "../layouts/TellUsSection"

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
      pgtLogo: file(relativePath: { eq: "pgt-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      shieldIcon: file(relativePath: { eq: "shieldIcon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      tornadoIcon: file(relativePath: { eq: "tornadoIcon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      uvIcon: file(relativePath: { eq: "uvIcon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      windIcon: file(relativePath: { eq: "windIcon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      miscHero: file(relativePath: { eq: "misc-hero.jpg" }) {
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
        imageHome={staticQuery.homeHero}
        title={"Best Impact Windows and Doors in South Florida"}
        subtitle={"30 years in the business"}
        button={buttonObj}
      />
      <LayoutTitle>CommonHero</LayoutTitle>
      <CommonHeroBanner
        imageCommonHero={staticQuery.commonHero}
        title={"About"}
        content={
          "We are a family owned and a full service glass company for all your projects; from a glass replacement to major high-rise and commercial storefronts developments."
        }
      />
      <LayoutTitle>MiscContent</LayoutTitle>
      <MiscContent
        content={`<h2>Privacy Policy Last Updated:<br>May 29, 2019
</h2><br><p>A-Christian Glass («us», «we», or «our») operates https://www.a-christianglass.com (the «Site»). This page informs you of our policies regarding the collection, use and disclosure of personal information we receive from users of the Site.
<br><br>We use your personal information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p><br><br><h3>Contact Us</h3><p>If you have any questions about this Privacy Policy, please contact us by filling out this form, or by calling us at <a href="/">(561) 278-3385.</a></p>`}
      />
      <LayoutTitle>ImageTextRow</LayoutTitle>
      <ImageTextRow
        imageTextRow={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
      />
      <ImageTextRow
        imageTextRow={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
        rightImage
      />
      <ImageTextRow
        imageTextRow={staticQuery.windows}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
        contained
      />
      <ImageTextRow
        imageTextRow={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
        rightImage
        contained
      />
      <ImageTextRow
        imageTextRow={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
      />
      <ImageTextRow
        imageTextRow={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
        rightImage
      />
      <ImageTextRow
        imageTextRow={staticQuery.windows}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
        contained
      />
      <ImageTextRow
        imageTextRow={staticQuery.home}
        content={`<h2>Impact Resistant Doors</h2><p>Selecting the right impact resistant doors for your south Florida home can be a daunting task, and that's why A-Christian Glass works with you to select the ideal door to suit your style, budget and needs.</p>`}
        button={buttonObj}
        rightImage
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
        imageCallBanner={staticQuery.openDoor}
        number={`(561) 278-3385`}
      />
      <LayoutTitle>BlueFeaturesSection</LayoutTitle>
      <BlueFeaturesSection
        imageFeatures={staticQuery.features}
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
        leftContentTestimonialSlider={{
          title: "Testimonials & Reviews",
          subtitle:
            "People are saying great things about A-Christian Glass every day.",
          description:
            "Read what homeowners think about their new impact resistant windows and doors.",
        }}
        slides={[
          {
            review:
              "The experience was stress free and every one was so helpful and professional. I contacted quite a few vendors but A Christian Glass had the best prices and the whole process was so smooth.\n" +
              "<br><br>Thank you for everything. I would highly recommend A Christian Glass.",
            author: "Ramon C.",
            location: "Tamarac, FL",
          },
          {
            review:
              "The experience was stress free and every one was so helpful and professional. I contacted quite a few vendors but A Christian Glass had the best prices and the whole process was so smooth.\n" +
              "<br><br>Thank you for everything. I would highly recommend A Christian Glass.",
            author: "Ramon C.",
            location: "Tamarac, FL",
          },
          {
            review:
              "The experience was stress free and every one was so helpful and professional. I contacted quite a few vendors but A Christian Glass had the best prices and the whole process was so smooth.\n" +
              "<br><br>Thank you for everything. I would highly recommend A Christian Glass.",
            author: "Ramon C.",
            location: "Tamarac, FL",
          },
          {
            review:
              "The experience was stress free and every one was so helpful and professional. I contacted quite a few vendors but A Christian Glass had the best prices and the whole process was so smooth.\n" +
              "<br><br>Thank you for everything. I would highly recommend A Christian Glass.",
            author: "Ramon C.",
            location: "Tamarac, FL",
          },
        ]}
      />
      <LayoutTitle>ProjectSlider</LayoutTitle>
      <ProjectSlider
        leftContentProjectSlider={{
          title: "Projects & Gallery",
          subtitle: "A-Christian Glass on Charge",
          content:
            "A-Christian Glass specializes in custom frameless shower doors. If you are building a new home, renovating an existing bathroom, or simply replacing a shower door, we have the knowledge, skills, and experience to make your dream shower a reality.",
          button: buttonObj,
        }}
        projects={[
          {
            image: staticQuery.home,
            link: {
              title: "project name",
              url: "/",
            },
          },
          {
            image: staticQuery.home,
            link: {
              title: "project name",
              url: "/",
            },
          },
          {
            image: staticQuery.home,
            link: {
              title: "project name",
              url: "/",
            },
          },
        ]}
      />
      <LayoutTitle>FormBanner</LayoutTitle>
      <FormBanner />
      <LayoutTitle>VideoRow</LayoutTitle>
      <VideoRow
        videoBg={staticQuery.youtubeBg}
        logo={staticQuery.acgLogo}
        title={"34 Years of Experience"}
        contentVideoRow={
          "   A-Christian Glass is a full-service company for installing and\n" +
          "              replacement of interior and exterior glass doors and impact proof\n" +
          "              window in Delray Beach, Florida. From 1988, we have offered top\n" +
          "              quality products and services for our customers and the community,\n" +
          "              even before and after several hurricanes and other weather systems"
        }
      />
      <LayoutTitle>FeaturesRow</LayoutTitle>
      <FeaturesRow
        imageFeaturesRow={staticQuery.hurricanes}
        contentFeaturesRow={{
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
        contentFeaturesRow={{
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
        leftContentChoicesSection={{
          title: "We Provide Choices for Every Style and Budget",
          content:
            "A-Christian Glass in Delray Beach knows that not all windows are created equal, and today there are more options than ever. Purchasing the right glass is an important decision since there are a variety of composition levels for windows. Educating customers is an important company initiative.<br><br>A-Christian Glass is a complete glass service facility. Behind the scenes, glazers cut, buff and prep hundreds of panes of glass for delivery to multiple destinations from Sunrise to Lake Worth.",
        }}
        rightContentChoicesSection={
          'The better the composition, the better the glass will deflect heat and cool the home," says Dable. "It\'s great to know that a $400 electric bill can be cut in half by upgrading your windows. \n' +
          "They're a definite money-saver, and they also reduce outside noise.\""
        }
      />
      <LayoutTitle>TitleTextRow</LayoutTitle>
      <TitleTextRow
        title={"Superior Service\n"}
        contentTitleTextRow={
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
      <LayoutTitle>DistributorSection</LayoutTitle>
      <DistributorSection
        logo={staticQuery.pgtLogo}
        title={"authorized distributor"}
        subtitle={"PGT Impact Resistant Windows"}
        content={
          "<strong>A-Christian Glass is an authorized distributor and installation contractor for PGT windows and doors.</strong> We provide high quality impact resistant PGT products for both residential and commercial clients. PGT is one of the most trusted names in the impact resistant window and door industry and we are proud to offer you their products. PGT is known for providing the highest level of hurricane protection and energy efficiency available."
        }
      />
      <LayoutTitle>ReasonsSection</LayoutTitle>
      <ReasonsSection
        title={"Why You Should Hire A-Christian Glass"}
        description={
          'A-Christian Glass is one of the most trusted hurricane impact resistant window companies in South Florida. So, what gives us the edge on our competitors? Why should you choose us? If you are still struggling with the question of "how to find a reputable company that offers window replacement near me", then here are more reasons A-Christian Glass is the answer you are looking for.'
        }
        reasons={[
          {
            reason: {
              title: "We Provide the Windows and the Installation",
              content:
                "The hassle of finding impact windows and installation services from more than one company may prove overwhelming for someone who has other things to do. A-Christian Glass lets you get everything you need for your project by just making a single phone call. And just so you know, getting project supplies and installation services from the same company is significantly more economical.",
            },
          },
          {
            reason: {
              title: "We Provide the Windows and the Installation",
              content:
                "The hassle of finding impact windows and installation services from more than one company may prove overwhelming for someone who has other things to do. A-Christian Glass lets you get everything you need for your project by just making a single phone call. And just so you know, getting project supplies and installation services from the same company is significantly more economical.",
            },
          },
          {
            reason: {
              title: "We Provide the Windows and the Installation",
              content:
                "The hassle of finding impact windows and installation services from more than one company may prove overwhelming for someone who has other things to do. A-Christian Glass lets you get everything you need for your project by just making a single phone call. And just so you know, getting project supplies and installation services from the same company is significantly more economical.",
            },
          },
        ]}
      />
      <LayoutTitle>WorksSection</LayoutTitle>
      <WorksSection
        title="Working with the Best of the Field"
        description="A-Christian Glass is a full-service company for installing and replacement of interior and exterior glass doors and impact proof window in Delray Beach, Florida. From 1988, we have offered top quality products and services for our customers and the community, even before and after several hurricanes and other weather systems"
        works={[
          {
            logo: staticQuery.tornadoIcon,
            description:
              "A-Christian Glass is a full-service company for installing and replacement of interior and exterior glass doors and impact proof window in Delray Beach, Florida. From 1988, we have offered top quality products and services for our customers and the community, even before and after several hurricanes and other weather systems",
          },
          {
            logo: staticQuery.shieldIcon,
            description:
              "A-Christian Glass is a full-service company for installing and replacement of interior and exterior glass doors and impact proof window in Delray Beach, Florida. From 1988, we have offered top quality products and services for our customers and the community, even before and after several hurricanes and other weather systems",
          },
          {
            logo: staticQuery.uvIcon,
            description:
              "A-Christian Glass is a full-service company for installing and replacement of interior and exterior glass doors and impact proof window in Delray Beach, Florida. From 1988, we have offered top quality products and services for our customers and the community, even before and after several hurricanes and other weather systems",
          },
          ,
          {
            logo: staticQuery.windIcon,
            description:
              "A-Christian Glass is a full-service company for installing and replacement of interior and exterior glass doors and impact proof window in Delray Beach, Florida. From 1988, we have offered top quality products and services for our customers and the community, even before and after several hurricanes and other weather systems",
          },
        ]}
      />
      <LayoutTitle>IndustriesServices</LayoutTitle>
      <IndustriesServices
        title="Residential Services"
        imageIndustriesServices={staticQuery.slide1}
        description={{
          title: "Custom Houses",
          content:
            "At A-Christian Glass, we do it all. We keep a watchful eye on the process and direct each project to keep everything exactly as planned. No job is too large or too small for us.\n" +
            "<br><br>We pride ourselves in working with business owners, construction managers and contractors from start to finish. Our philosophy has always been about relationships and commitment to our clients. We believe integrity and loyalty are the grounds for ultimate success.",
        }}
        button={buttonObj}
      />
      <IndustriesServices
        title="Residential Services"
        imageIndustriesServices={staticQuery.slide1}
        description={{
          title: "Custom Houses",
          content:
            "At A-Christian Glass, we do it all. We keep a watchful eye on the process and direct each project to keep everything exactly as planned. No job is too large or too small for us.\n" +
            "<br><br>We pride ourselves in working with business owners, construction managers and contractors from start to finish. Our philosophy has always been about relationships and commitment to our clients. We believe integrity and loyalty are the grounds for ultimate success.",
        }}
        reverse
        button={buttonObj}
      />
      <IndustriesServices
        imageIndustriesServices={staticQuery.slide1}
        description={{
          title: "A-Christian Glass Can Help Your Business",
          content:
            "Our commercial products vary from hurricane storefronts to curtain-wall systems; we work on both single-story buildings and 20 - 30 story highrises. We do new construction and retro-fit projects, historical preservation projects, hotels, strip malls and individual storefronts.<br><br>Whether you're a startup business or a long-standing company that needs renovation, we can accommodate your needs.<br><br><strong>Call A-Christian Glass at<br></strong><a href='/'>(561) 278-3385</a><br><strong>and we will work with you to achieve your goals on your project.\n</strong>",
        }}
      />
      <LayoutTitle>MiscHero</LayoutTitle>
      <MiscHero image={staticQuery.miscHero} title="Privacy Policy" />
      <LayoutTitle>FormSection</LayoutTitle>
      <FormSection
        content="Schedule a free, no-obligation estimate to have hurricane impact resistant windows installed in your home.
"
        callText="Or call us at"
        number="(561) 278-3385 "
      />
      <LayoutTitle>ContactInfo</LayoutTitle>
      <ContactInfo />
      <LayoutTitle>TellUsSection</LayoutTitle>
      <TellUsSection />
    </Layout>
  )
}

export default Layouts
