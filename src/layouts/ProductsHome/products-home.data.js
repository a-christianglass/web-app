import { graphql } from "gatsby"

export const query = graphql`
  fragment ProductsHome on WpPage_Pagebuilder_Layouts_ProductsHome {
    fieldGroupName
    leftContentProducts {
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
      title
    }
    rightContentProducts {
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
      title
    }
  }
`
