import { graphql } from "gatsby"

export const query = graphql`
  fragment WindowsTabs on WpPage_Pagebuilder_Layouts_WindowsTabs {
    fieldGroupName
    titleWindows
    tabsWindows {
      tab {
        content
        features {
          feature {
            content
            title
          }
        }
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
        subtitle
        title
      }
    }
  }
`
