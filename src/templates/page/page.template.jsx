import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { getPageLayout } from "../../get-layout-utils"

export const query = graphql`
  query PageQuery($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      isFrontPage
      title
      content
      uri
      slug
      parentId

      seo {
        canonical
        title
        focuskw
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphImage {
          altText
          sourceUrl
          title
        }
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          title
        }
      }
      pageBuilder {
        layouts {
          ... on WpPage_Pagebuilder_Layouts_MiscContent {
            ...MiscContent
          }
          ... on WpPage_Pagebuilder_Layouts_HomeHero {
            ...HomeHero
          }
          ... on WpPage_Pagebuilder_Layouts_FormBanner {
            ...FormBanner
          }
          ... on WpPage_Pagebuilder_Layouts_ImageTextRow {
            ...ImageTextRow
          }
          ... on WpPage_Pagebuilder_Layouts_BlueFeaturesSection {
            ...BlueFeaturesSection
          }
          ... on WpPage_Pagebuilder_Layouts_CallUsBanner {
            ...CallUsBanner
          }
          ... on WpPage_Pagebuilder_Layouts_ServicesHome {
            ...ServicesHome
          }
          ... on WpPage_Pagebuilder_Layouts_LogosGrid {
            ...LogosGrid
          }
          ... on WpPage_Pagebuilder_Layouts_ProjectSlider {
            ...ProjectSlider
          }
          ... on WpPage_Pagebuilder_Layouts_AppointmentBanner {
            ...AppointmentBanner
          }
          ... on WpPage_Pagebuilder_Layouts_GallerySlider {
            ...GallerySlider
          }
          ... on WpPage_Pagebuilder_Layouts_TestimonialSlider {
            ...TestimonialSlider
          }
          ... on WpPage_Pagebuilder_Layouts_CommonHeroBanner {
            ...CommonHeroBanner
          }
          ... on WpPage_Pagebuilder_Layouts_VideoRow {
            ...VideoRow
          }
          ... on WpPage_Pagebuilder_Layouts_FeaturesRow {
            ...FeaturesRow
          }
          ... on WpPage_Pagebuilder_Layouts_ChoicesSection {
            ...ChoicesSection
          }
          ... on WpPage_Pagebuilder_Layouts_TitleTextRow {
            ...TitleTextRow
          }
          ... on WpPage_Pagebuilder_Layouts_IndustriesServices {
            ...IndustriesServices
          }
          ... on WpPage_Pagebuilder_Layouts_ProjectsGrid {
            ...ProjectsGrid
          }
          ... on WpPage_Pagebuilder_Layouts_FormSection {
            ...FormSection
          }
          ... on WpPage_Pagebuilder_Layouts_ReasonsSection {
            ...ReasonsSection
          }
          ... on WpPage_Pagebuilder_Layouts_WorksSection {
            ...WorksSection
          }
          ... on WpPage_Pagebuilder_Layouts_FaqTabs {
            ...FaqTabs
          }
          ... on WpPage_Pagebuilder_Layouts_HomeTabs {
            ...HomeTabs
          }
          ... on WpPage_Pagebuilder_Layouts_MiscHero {
            ...MiscHero
          }
          ... on WpPage_Pagebuilder_Layouts_RailingsTabs {
            ...RailingsTabs
          }
          ... on WpPage_Pagebuilder_Layouts_GalleryGrid {
            ...GalleryGrid
          }
          ... on WpPage_Pagebuilder_Layouts_ContactInfo {
            ...ContactInfo
          }
          ... on WpPage_Pagebuilder_Layouts_TellUsSection {
            ...TellUsSection
          }
          ... on WpPage_Pagebuilder_Layouts_WindowsTabs {
            ...WindowsTabs
          }
          ... on WpPage_Pagebuilder_Layouts_DoorsTabs {
            ...DoorsTabs
          }
          ... on WpPage_Pagebuilder_Layouts_DistributorSection {
            ...DistributorSection
          }
          ... on WpPage_Pagebuilder_Layouts_ProductsHome {
            ...ProductsHome
          }
          ... on WpPage_Pagebuilder_Layouts_PartnersGrid {
            ...PartnersGrid
          }
          ... on WpPage_Pagebuilder_Layouts_ChoicesQuote {
            ...ChoicesQuote
          }
          ... on WpPage_Pagebuilder_Layouts_DialogGrid {
            ...DialogGrid
          }
        }
        pageConfiguration {
          hideFooter
          hideHeaderItems
          isTransparent
          isWhite
          hideFooterBanner
          whiteFooterBanner
          isHomePage
        }
      }
    }
  }
`
const PageTemplate = ({ data }) => {
  const { seo, slug, pageBuilder, title } = data.wpPage
  const layouts = pageBuilder.layouts || []
  return (
    <Layout {...pageBuilder.pageConfiguration} seo={seo}>
      {layouts.map(layout => getPageLayout(layout))}
    </Layout>
  )
}

export default PageTemplate
