import { graphql } from "gatsby"

export const query = graphql`
  fragment DialogGrid on WpPage_Pagebuilder_Layouts_DialogGrid {
    fieldGroupName
    title
    projects {
      projectInfo {
        title
        description
        galleryImages {
          galleryImage {
            galleryImage {
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
      }
      projectImage {
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
