import { graphql } from "gatsby"

export const query = graphql`
  fragment HomeHero on WpPage_Pagebuilder_Layouts_HomeHero {
    fieldGroupName
    subtitle
    button {
      title
      url
    }
    imageHome {
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
`
