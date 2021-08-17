import { graphql } from "gatsby"

export const query = graphql`
  fragment WorksSection on WpPage_Pagebuilder_Layouts_WorksSection {
    descriptionWorksSection
    fieldGroupName
    title
    works {
      description
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
    }
  }
`
