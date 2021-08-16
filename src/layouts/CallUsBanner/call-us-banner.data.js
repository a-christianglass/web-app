import { graphql } from "gatsby"

export const query = graphql`
  fragment CallUsBanner on WpPage_Pagebuilder_Layouts_CallUsBanner {
    content
    fieldGroupName
    imageCallBanner {
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
    number
  }
`
