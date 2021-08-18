import { graphql } from "gatsby"

export const query = graphql`
  fragment DoorsTabs on WpPage_Pagebuilder_Layouts_DoorsTabs {
    fieldGroupName
    titleDoors
    tabsDoors {
      tab {
        content
        features {
          feature {
            content
            title
          }
        }
        images {
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
        subtitle
        title
      }
    }
  }
`
