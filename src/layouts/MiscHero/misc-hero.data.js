import { graphql } from "gatsby"

export const query = graphql`
  fragment MiscHero on WpPage_Pagebuilder_Layouts_MiscHero {
    fieldGroupName
    title
    image {
      altText
      sourceUrl
      localFile {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  }
`
