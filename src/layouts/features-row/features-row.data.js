import { graphql } from "gatsby"

export const query = graphql`
  fragment FeaturesRow on WpPage_Pagebuilder_Layouts_FeaturesRow {
    fieldGroupName
    contentFeaturesRow {
      features {
        feature
      }
      fieldGroupName
      title
    }
    imageFeaturesRow {
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
