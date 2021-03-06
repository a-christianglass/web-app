import { graphql } from "gatsby"

export const query = graphql`
  fragment IndustriesServices on WpPage_Pagebuilder_Layouts_IndustriesServices {
    fieldGroupName
    reverse
    color
    morePadding
    description {
      content
      tagText
      title
    }
    button {
      title
      url
    }
    imageIndustriesServices {
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
