import { graphql } from "gatsby"

export const query = graphql`
  fragment FormBanner on WpPage_Pagebuilder_Layouts_FormBanner {
    fieldGroupName
    imageFormBanner {
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
