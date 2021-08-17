import { graphql } from "gatsby"

export const query = graphql`
  fragment GalleryGrid on WpPage_Pagebuilder_Layouts_GalleryGrid {
    fieldGroupName
    title
    cards {
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
      title
    }
  }
`
