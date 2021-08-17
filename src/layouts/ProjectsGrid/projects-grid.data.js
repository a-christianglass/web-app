import { graphql } from "gatsby"

export const query = graphql`
  fragment ProjectsGrid on WpPage_Pagebuilder_Layouts_ProjectsGrid {
    content
    fieldGroupName
    projects {
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
      link {
        title
        url
      }
    }
    title
  }
`
