import { graphql } from "gatsby"

export const query = graphql`
  fragment DistributorSection on WpPage_Pagebuilder_Layouts_DistributorSection {
    contentDistributorSection
    fieldGroupName
    logo {
      altText
      sourceUrl
      title
      localFile {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
    subtitle
    title
  }
`
