import { graphql } from "gatsby"

export const query = graphql`
  fragment GallerySlider on WpPage_Pagebuilder_Layouts_GallerySlider {
    bgColor
    fieldGroupName
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
  }
`
