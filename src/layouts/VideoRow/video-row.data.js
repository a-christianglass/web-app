import { graphql } from "gatsby"

export const query = graphql`
  fragment VideoRow on WpPage_Pagebuilder_Layouts_VideoRow {
    contentVideoRow
    fieldGroupName
    logo {
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
    videoBg {
      altText
      sourceUrl
      title
      localFile {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
    youtubeId
  }
`
