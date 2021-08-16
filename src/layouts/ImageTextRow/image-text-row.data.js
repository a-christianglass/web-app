import { graphql } from "gatsby"

export const query = graphql`
  fragment ImageTextRow on WpPage_Pagebuilder_Layouts_ImageTextRow {
    contained
    content
    button {
      title
      url
    }
    fieldGroupName
    rightImage
    imageTextRow {
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
`
