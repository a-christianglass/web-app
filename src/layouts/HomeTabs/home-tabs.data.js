import { graphql } from "gatsby"

export const query = graphql`
  fragment HomeTabs on WpPage_Pagebuilder_Layouts_HomeTabs {
    fieldGroupName
    tabs {
      tab {
        button {
          title
          url
        }
        content
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
