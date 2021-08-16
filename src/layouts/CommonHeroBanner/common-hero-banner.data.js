import { graphql } from "gatsby"

export const query = graphql`
  fragment CommonHeroBanner on WpPage_Pagebuilder_Layouts_CommonHeroBanner {
    content
    fieldGroupName
    imageCommonHero {
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
