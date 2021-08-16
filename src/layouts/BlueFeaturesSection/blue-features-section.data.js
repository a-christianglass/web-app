import { graphql } from "gatsby"

export const query = graphql`
  fragment BlueFeaturesSection on WpPage_Pagebuilder_Layouts_BlueFeaturesSection {
    fieldGroupName
    title
    cards {
      content
      icon {
        altText
        sourceUrl
        title
      }
      title
    }
    imageFeatures {
      altText
      sourceUrl
      title
      localFile {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  }
`
