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
import HomeTabs from "../layouts/HomeTabs"
import FaqTabs from "../layouts/FaqTabs"
import RailingsTabs from "../layouts/RailingsTabs"
import GalleryGrid from "../layouts/GalleryGrid"
import WindowsTabs from "../layouts/WindowsTabs"
import DoorsTabs from "../layouts/DoorsTabs/doors-tabs.component"
import ProductsHome from "../layouts/ProductsHome"
import PartnersGrid from "../layouts/PartnersGrid/partners-grid.component"
import DialogGrid from "../layouts/DialogGrid"
import ChoicesQuote from "../layouts/ChoicesQuote"

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
      homeTabs: file(relativePath: { eq: "34-years.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      windowsTabs: file(relativePath: { eq: "windowsTabs.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      doorsSlider: file(relativePath: { eq: "doorsSlider.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      product1: file(relativePath: { eq: "product1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      product2: file(relativePath: { eq: "product2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      gallery: file(relativePath: { eq: "gallery.jpg" }) {
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
        featuredLogos={[
          { featuredImage: { sourceUrl: staticQuery.logo } },
          { featuredImage: { sourceUrl: staticQuery.logo } },
          { featuredImage: { sourceUrl: staticQuery.logo } },
          { featuredImage: { sourceUrl: staticQuery.logo } },
        ]}
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
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
        ]}
      />
      <GallerySlider
        bgColor={"white"}
        images={[
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
          },
          {
            image: staticQuery.slide2,
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
        reverseFeatures={true}
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
      <LayoutTitle>ProjectsGrid</LayoutTitle>
      <ProjectsGrid
        title={"Custom Houses"}
        content={
          "Omnis excepturi totam saepe. Blanditiis aspernatur odit ratione quos. Necessitatibus aspernatur error. Voluptatum amet debitis magnam occaecati ut."
        }
        projects={[
          {
            image: staticQuery.home,
            link: {
              url: "/",
              title: "project name 1",
            },
          },
          {
            image: staticQuery.home,
            link: {
              url: "/",
              title: "project name 1",
            },
          },
          {
            image: staticQuery.home,
            link: {
              url: "/",
              title: "project name 1",
            },
          },
          {
            image: staticQuery.home,
            link: {
              url: "/",
              title: "project name 1",
            },
          },
          {
            image: staticQuery.home,
            link: {
              url: "/",
              title: "project name 1",
            },
          },
          {
            image: staticQuery.home,
            link: {
              url: "/",
              title: "project name 1",
            },
          },
        ]}
      />
      <LayoutTitle>DistributorSection</LayoutTitle>
      <DistributorSection
        logo={staticQuery.pgtLogo}
        title={"authorized distributor"}
        subtitle={"PGT Impact Resistant Windows"}
        contentDistributorSection={
          "<strong>A-Christian Glass is an authorized distributor and installation contractor for PGT windows and doors.</strong> We provide high quality impact resistant PGT products for both residential and commercial clients. PGT is one of the most trusted names in the impact resistant window and door industry and we are proud to offer you their products. PGT is known for providing the highest level of hurricane protection and energy efficiency available."
        }
      />
      <LayoutTitle>ReasonsSection</LayoutTitle>
      <ReasonsSection
        title={"Why You Should Hire A-Christian Glass"}
        descriptionReasons={
          'A-Christian Glass is one of the most trusted hurricane impact resistant window companies in South Florida. So, what gives us the edge on our competitors? Why should you choose us? If you are still struggling with the question of "how to find a reputable company that offers window replacement near me", then here are more reasons A-Christian Glass is the answer you are looking for.'
        }
        reasons={[
          {
            title: "We Provide the Windows and the Installation",
            content:
              "The hassle of finding impact windows and installation services from more than one company may prove overwhelming for someone who has other things to do. A-Christian Glass lets you get everything you need for your project by just making a single phone call. And just so you know, getting project supplies and installation services from the same company is significantly more economical.",
          },
          {
            title: "We Provide the Windows and the Installation",
            content:
              "The hassle of finding impact windows and installation services from more than one company may prove overwhelming for someone who has other things to do. A-Christian Glass lets you get everything you need for your project by just making a single phone call. And just so you know, getting project supplies and installation services from the same company is significantly more economical.",
          },
          {
            title: "We Provide the Windows and the Installation",
            content:
              "The hassle of finding impact windows and installation services from more than one company may prove overwhelming for someone who has other things to do. A-Christian Glass lets you get everything you need for your project by just making a single phone call. And just so you know, getting project supplies and installation services from the same company is significantly more economical.",
          },
        ]}
      />
      <LayoutTitle>WorksSection</LayoutTitle>
      <WorksSection
        title="Working with the Best of the Field"
        descriptionWorksSection="A-Christian Glass is a full-service company for installing and replacement of interior and exterior glass doors and impact proof window in Delray Beach, Florida. From 1988, we have offered top quality products and services for our customers and the community, even before and after several hurricanes and other weather systems"
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
          tagText: "A-CHRISTIAN GLASS",
          title: "A-Christian Glass Can Help Your Business",
          content:
            "Our commercial products vary from hurricane storefronts to curtain-wall systems; we work on both single-story buildings and 20 - 30 story highrises. We do new construction and retro-fit projects, historical preservation projects, hotels, strip malls and individual storefronts.<br><br>Whether you're a startup business or a long-standing company that needs renovation, we can accommodate your needs.<br><br><strong>Call A-Christian Glass at<br></strong><a href='/'>(561) 278-3385</a><br><strong>and we will work with you to achieve your goals on your project.\n</strong>",
        }}
      />
      <LayoutTitle>MiscHero</LayoutTitle>
      <MiscHero image={staticQuery.miscHero} title="Privacy Policy" />
      <LayoutTitle>FormSection</LayoutTitle>
      <FormSection
        contentFormSection="Schedule a free, no-obligation estimate to have hurricane impact resistant windows installed in your home.
"
        callText="Or call us at"
        number="(561) 278-3385 "
      />
      <LayoutTitle>ContactInfo</LayoutTitle>
      <ContactInfo />
      <LayoutTitle>TellUsSection</LayoutTitle>
      <TellUsSection />
      <LayoutTitle>HomeTabs</LayoutTitle>
      <HomeTabs
        tabs={[
          {
            tab: {
              title: "34 years of experience",
              subtitle:
                "34 Years of Experience Installing Impact Windows and Doors",
              content:
                "Our goal is to provide the most aesthetically pleasing home protection solutions possible. With our hurricane windows and doors, you can protect your home from hurricanes, theft, sun damage, and high insurance premiums. Do hurricane windows lower insurance premiums? How low can premiums go with hurricane windows and doors?",
              button: {
                url: "/",
                title: "About Us",
              },
              image: staticQuery.homeTabs,
            },
          },
          {
            tab: {
              title: "Tab 2",
              subtitle:
                "34 Years of Experience Installing Impact Windows and Doors",
              content:
                "Our goal is to provide the most aesthetically pleasing home protection solutions possible. With our hurricane windows and doors, you can protect your home from hurricanes, theft, sun damage, and high insurance premiums. Do hurricane windows lower insurance premiums? How low can premiums go with hurricane windows and doors?",
              button: {
                url: "/",
                title: "About Us",
              },
              image: staticQuery.homeTabs,
            },
          },
          {
            tab: {
              title: "Tab 3",
              subtitle:
                "34 Years of Experience Installing Impact Windows and Doors",
              content:
                "Our goal is to provide the most aesthetically pleasing home protection solutions possible. With our hurricane windows and doors, you can protect your home from hurricanes, theft, sun damage, and high insurance premiums. Do hurricane windows lower insurance premiums? How low can premiums go with hurricane windows and doors?",
              button: {
                url: "/",
                title: "About Us",
              },
              image: staticQuery.homeTabs,
            },
          },
          {
            tab: {
              title: "Tab 4",
              subtitle:
                "34 Years of Experience Installing Impact Windows and Doors",
              content:
                "Our goal is to provide the most aesthetically pleasing home protection solutions possible. With our hurricane windows and doors, you can protect your home from hurricanes, theft, sun damage, and high insurance premiums. Do hurricane windows lower insurance premiums? How low can premiums go with hurricane windows and doors?",
              button: {
                url: "/",
                title: "About Us",
              },
              image: staticQuery.homeTabs,
            },
          },
        ]}
      />
      <LayoutTitle>FaqTabs</LayoutTitle>
      <FaqTabs
        faqTitle="Frequenly Asked Questions"
        faqTabs={[
          {
            tab: {
              title: "GENERAL QUESTIONS",
              faqs: [
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
              ],
            },
          },
          {
            tab: {
              title: "BUSINESS",
              faqs: [
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
              ],
            },
          },
          {
            tab: {
              title: "DOORS",
              faqs: [
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
              ],
            },
          },
          {
            tab: {
              title: "WINDOWS",
              faqs: [
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
              ],
            },
          },
          {
            tab: {
              title: "OTHERS",
              faqs: [
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
                {
                  faq: {
                    title:
                      "How do I choose the best window contractor for my house?",
                    content:
                      "Choosing a good window contractor may be complex, but there are several key factors to look for starting any impact resistant window installation.",
                  },
                },
              ],
            },
          },
        ]}
      />
      <LayoutTitle>RailingsTabs</LayoutTitle>
      <RailingsTabs
        title="Railings System We Offer"
        descriptionRaillings="Here at A-Christian Glass we have our very own Glass Railing department that specializes in a wide variety of options to assist you in either the interior or exterior of your home. We offer systems that are sleek and sophisticated for any of your needs."
        tabsRaillings={[
          {
            tab: {
              title: "INTERIOR RAILING SYSTEM",
              features: [
                {
                  feature: {
                    title: "Standoff Systems",
                    content:
                      'Standoff Railings are an option we give to our clients for a compact design with minimal obstruction with glass ranging from 1/2" thickness to 27/32".',
                  },
                },
                {
                  feature: {
                    title: "Standoff Systems",
                    content:
                      'Standoff Railings are an option we give to our clients for a compact design with minimal obstruction with glass ranging from 1/2" thickness to 27/32".',
                  },
                },
                {
                  feature: {
                    title: "Standoff Systems",
                    content:
                      'Standoff Railings are an option we give to our clients for a compact design with minimal obstruction with glass ranging from 1/2" thickness to 27/32".',
                  },
                },
                {
                  feature: {
                    title: "Standoff Systems",
                    content:
                      'Standoff Railings are an option we give to our clients for a compact design with minimal obstruction with glass ranging from 1/2" thickness to 27/32".',
                  },
                },
              ],
            },
          },
          {
            tab: {
              title: "EXTERIOR RAILING SYSTEM",
              features: [
                {
                  feature: {
                    title: "Standoff Systems",
                    content:
                      'Exterior Base shoes which are similar to our interior base shoe systems consist of glass ranging from 1/2" thickness to 1 1/16" are installed with TAPER-LOC systems which supports all mounting methods with one compact installation/removal tool which eliminates the use of messy cement. \n' +
                      "<br><br>Base shoes systems have the option for cap rail and hand rail installation, also with drain blocks to provide drainage for water run-off. This is especially important for balconies or decks where water could dam up unless proper drainage available. \n" +
                      "<br><br>Base shoes are installed with the option of cladding to match the cap rails finishes available in brushed stainless, polished stainless, polished brass, satin brass satin anodized, dark bronze anodized and powder coating to match any other finishes the client desires.",
                  },
                },
                {
                  feature: {
                    title: "Standoff Systems",
                    content:
                      "This option is great for pool fencing, balcony, and deck applications. This look provides a break from the wind using an almost invisible frameless glass look which is also known as spigots. \n" +
                      "<br><br>There are different option models to choose from, core, side and new surface. All models are available in brushed stainless and some in polished. There is an option for a U-channel cap that can be added to the top of the glass for added support or for visual preference.",
                  },
                },
              ],
            },
          },
        ]}
      />
      <LayoutTitle>GalleryGrid</LayoutTitle>
      <GalleryGrid
        title="Frameless Shower Doors"
        cards={[
          {
            image: staticQuery.home,
            title: "project name 1",
          },
          {
            image: staticQuery.home,
            title: "project name 1",
          },
          {
            image: staticQuery.home,
            title: "project name 1",
          },
          {
            image: staticQuery.home,
            title: "project name 1",
          },
          {
            image: staticQuery.home,
            title: "project name 1",
          },
          {
            image: staticQuery.home,
            title: "project name 1",
          },
          {
            image: staticQuery.home,
            title: "project name 1",
          },
          {
            image: staticQuery.home,
            title: "project name 1",
          },
          {
            image: staticQuery.home,
            title: "project name 1",
          },
        ]}
      />
      <LayoutTitle>WindowsTabs</LayoutTitle>
      <WindowsTabs
        titleWindows="Types of Impact Resistant Windows We Offer"
        tabsWindows={[
          {
            tab: {
              image: staticQuery.windowsTabs,
              title: "SINGLE OR DOUBLE-HUNG WINDOWS",
              subtitle: "Single or Double-Hung Windows",
              features: [
                {
                  feature: {
                    title: "Single Hung",
                    content:
                      "The single hung window is more of the classic style design which contains a stationary top panel and a bottom panel that opens and closes vertically. The single hung style provides convenience for cleaning by having the ability to tilt inward, which allows exterior cleaning.",
                  },
                },
                {
                  feature: {
                    title: "Double Hung",
                    content:
                      "Double hung windows can be raised from the bottom and lowered from the top to maximize ventilation in almost any room.",
                  },
                },
              ],
            },
          },
          {
            tab: {
              image: staticQuery.windowsTabs,
              title: "CASEMENTS",
              subtitle: "Casements",
              content:
                "Commonly used in bathrooms and kitchens, casement windows are hinged at the side to open outward, letting air flow freely throughout your home while providing an unobstructed view. Casement picture and architectural windows provide the perfect complement, creating a cohesive look with our casement windows.",
            },
          },
          {
            tab: {
              image: staticQuery.windowsTabs,
              title: "HORIZONTAL ROLLER WINDOWS",
              subtitle: "Horizontal Roller \n" + "Windows",
              content:
                "The horizontal roller contains two or three sashes side by side and is designed to open and close horizontally. Most options provide easy cleaning with the ability to remove operating panels. With the horizontal roller, you are able to experience a clear vertical view for an optimal visual.",
            },
          },
          {
            tab: {
              image: staticQuery.windowsTabs,
              title: "FIXED GLASS WINDOWS",
              subtitle: "Fixed Glass Windows",
              content:
                "Creating a stunning centerpiece for living rooms and other gathering spaces, picture windows are fixed windows that offer an abundance of natural light while framing the outdoors.",
            },
          },
        ]}
      />
      <LayoutTitle>DoorTabs</LayoutTitle>
      <DoorsTabs
        titleDoors="Types of Doors We Offer"
        tabsDoors={[
          {
            tab: {
              images: [
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
              ],
              title: "ENTRY<br>DOORS",
              subtitle: "Entry Doors",
              features: [
                {
                  feature: {
                    title: "A wide selection",
                    content:
                      "We offer a wide selection of stylish impact resistant entry doors that will enhance your home's design while providing the strongest hurricane protection available<br><ul><li>Glass Doors</li><li>Fiberglass Doors</li><li>Metal Doors</li></ul>",
                  },
                },
                {
                  feature: {
                    title: "Showcase Your Style",
                    content:
                      "Your front door shows a lot about your personal style and sets the tone for the entire house. Choosing an entry door that enhances the style of the property is incredibly important and can greatly improve your home's curb appeal.",
                  },
                },
              ],
            },
          },
          {
            tab: {
              images: [
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
              ],
              title: "FOLDING<br>DOORS",
              subtitle: "Folding Doors",
              content:
                "Commonly used in bathrooms and kitchens, casement windows are hinged at the side to open outward, letting air flow freely throughout your home while providing an unobstructed view. Casement picture and architectural windows provide the perfect complement, creating a cohesive look with our casement windows.",
              features: [
                {
                  feature: {
                    title: "A Multitude of Design Options",
                    content:
                      "Do not overlook your choices for locks, handles, and hinges. You can include the following accessories, along with color finishes for each item:<br><ul><li>The classic Euro Series Lever Lock Set comes in stainless steel or bronze finishes</li><li>The classic Euro Series Lever Lock Set comes in stainless steel or bronze finishes</li><li>The classic Euro Series Lever Lock Set comes in stainless steel or bronze finishes</li><li>The classic Euro Series Lever Lock Set comes in stainless steel or bronze finishes</li></ul>",
                  },
                },
              ],
            },
          },
          {
            tab: {
              images: [
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
              ],
              title: "FRENCH<br>DOORS",
              subtitle: "French Doors",
              features: [
                {
                  feature: {
                    title: "A wide selection",
                    content:
                      "We offer a wide selection of stylish impact resistant entry doors that will enhance your home's design while providing the strongest hurricane protection available<br><ul><li>Glass Doors</li><li>Fiberglass Doors</li><li>Metal Doors</li></ul>",
                  },
                },
                {
                  feature: {
                    title: "Showcase Your Style",
                    content:
                      "Your front door shows a lot about your personal style and sets the tone for the entire house. Choosing an entry door that enhances the style of the property is incredibly important and can greatly improve your home's curb appeal.",
                  },
                },
              ],
            },
          },
          {
            tab: {
              images: [
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
              ],
              title: "PATIO<br>DOORS",
              subtitle: "Patio Doors",
              content:
                "Creating a stunning centerpiece for living rooms and other gathering spaces, picture windows are fixed windows that offer an abundance of natural light while framing the outdoors.",
              features: [
                {
                  feature: {
                    title: "Largest Impact Rated Panel Sizes",
                  },
                },
                {
                  feature: {
                    title: "Florida Approved",
                  },
                },
                {
                  feature: {
                    title: "Robust and Safe",
                  },
                },
                {
                  feature: {
                    title: "Drainage System",
                  },
                },
              ],
            },
          },
          {
            tab: {
              images: [
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
              ],
              title: "PIVOT<br>DOORS",
              subtitle: "Pivot Doors",
              content:
                "Creating a stunning centerpiece for living rooms and other gathering spaces, picture windows are fixed windows that offer an abundance of natural light while framing the outdoors.",
            },
          },
          {
            tab: {
              images: [
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
              ],
              title: "SLIDING<br>GLASS DOORS",
              subtitle: "Sliding Glass Doors",
              content:
                "Creating a stunning centerpiece for living rooms and other gathering spaces, picture windows are fixed windows that offer an abundance of natural light while framing the outdoors.",
            },
          },

          {
            tab: {
              images: [
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
                { image: staticQuery.doorsSlider },
              ],
              title: "STOREFRONT<br>DOORS",
              subtitle: "Sliding Glass Doors",
              content:
                "Creating a stunning centerpiece for living rooms and other gathering spaces, picture windows are fixed windows that offer an abundance of natural light while framing the outdoors.",
            },
          },
        ]}
      />
      <LayoutTitle>ProductsHome</LayoutTitle>
      <ProductsHome
        leftContentProducts={{
          image: staticQuery.product1,
          title: "Frameless Shower Doors",
          content:
            "A-Christian Glass specializes in custom frameless shower doors. If you are building a new home, renovating an existing bathroom, or simply replacing a shower door, we have the knowledge, skills, and experience to make your dream shower a reality.",
          button: {
            title: "See More",
            url: "/",
          },
        }}
        rightContentProducts={{
          image: staticQuery.product1,
          title: "Frameless Shower Doors",
          content:
            "A-Christian Glass specializes in custom frameless shower doors. If you are building a new home, renovating an existing bathroom, or simply replacing a shower door, we have the knowledge, skills, and experience to make your dream shower a reality.",
          button: {
            title: "See More",
            url: "/",
          },
        }}
      />
      <LayoutTitle>PartnersLogos</LayoutTitle>
      <PartnersGrid
        partnersTitle="Partnering with the Best"
        partnersLogos={[
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

          {
            image: { sourceUrl: staticQuery.logo },
          },

          {
            image: { sourceUrl: staticQuery.logo },
          },
        ]}
      />
      <LayoutTitle>DialogGrid</LayoutTitle>
      <DialogGrid
        title={"Custom Houses"}
        projects={[
          {
            image: staticQuery.home,
            projectTitle: "707 N Ocean",
            projectInfo: {
              title: "Home in Boca Raton",
              description:
                "A-Christian Glass worked with J.P. DiMisa on this 9,083 square foot new construction home nestled between the intracoastal waterway and the Grand Canal located in the Royal Palm Yacht and Country Club.",
              galleryImages: [
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.product1,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.product1,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.product1,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.product1,
                },
              ],
            },
          },
          {
            image: staticQuery.home,
            projectTitle: "708 N Ocean",
            projectInfo: {
              title: "Home in Boca Raton",
              description:
                "A-Christian Glass worked with J.P. DiMisa on this 9,083 square foot new construction home nestled between the intracoastal waterway and the Grand Canal located in the Royal Palm Yacht and Country Club.",
              galleryImages: [
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.product1,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.product1,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.product1,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.product1,
                },
              ],
            },
          },
          {
            image: staticQuery.home,
            projectTitle: "709 N Ocean",
            projectInfo: {
              title: "Home in Boca Raton",
              description:
                "A-Christian Glass worked with J.P. DiMisa on this 9,083 square foot new construction home nestled between the intracoastal waterway and the Grand Canal located in the Royal Palm Yacht and Country Club.",
              galleryImages: [
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
              ],
            },
          },
          {
            image: staticQuery.home,
            projectTitle: "710 N Ocean",
            projectInfo: {
              title: "Home in Boca Raton",
              description:
                "A-Christian Glass worked with J.P. DiMisa on this 9,083 square foot new construction home nestled between the intracoastal waterway and the Grand Canal located in the Royal Palm Yacht and Country Club.",
              galleryImages: [
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
              ],
            },
          },
          {
            image: staticQuery.home,
            projectTitle: "711 N Ocean",
            projectInfo: {
              title: "Home in Boca Raton",
              description:
                "A-Christian Glass worked with J.P. DiMisa on this 9,083 square foot new construction home nestled between the intracoastal waterway and the Grand Canal located in the Royal Palm Yacht and Country Club.",
              galleryImages: [
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
              ],
            },
          },
          {
            image: staticQuery.home,
            projectTitle: "712 N Ocean",
            projectInfo: {
              title: "Home in Boca Raton",
              description:
                "A-Christian Glass worked with J.P. DiMisa on this 9,083 square foot new construction home nestled between the intracoastal waterway and the Grand Canal located in the Royal Palm Yacht and Country Club.",
              galleryImages: [
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
                {
                  galleryImage: staticQuery.gallery,
                },
              ],
            },
          },
        ]}
      />
      <LayoutTitle>ChoicesQuote</LayoutTitle>
      <ChoicesQuote
        choicesTitle="We Provide Choices for Every Style and Budget"
        choicesContent="A-Christian Glass in Delray Beach knows that not all windows are created equal, and today there are more options than ever. Purchasing the right glass is an important decision since there are a variety of composition levels for windows. Educating customers is an important company initiative."
        choicesQuote="It's great to know that a $400 electric bill can be cut in half by upgrading your windows. They're a definite money-saver, and they also reduce outside noise."
        quoteAuthor="Mary C."
        quoteLocation="Boca Raton, FL."
      />
    </Layout>
  )
}

export default Layouts
