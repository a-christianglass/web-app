import { graphql } from "gatsby"

export const query = graphql`
  fragment ProjectSlider on WpPage_Pagebuilder_Layouts_ProjectSlider {
    fieldGroupName
    leftContentProjectSlider {
      button {
        title
        url
      }
      content
      subtitle
      title
    }
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
  }
`
