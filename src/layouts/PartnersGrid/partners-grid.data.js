import { graphql } from "gatsby"

export const query = graphql`
  fragment PartnersGrid on WpPage_Pagebuilder_Layouts_PartnersGrid {
    fieldGroupName
    partnersTitle
    partnersLogos {
      image {
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
  }
`
