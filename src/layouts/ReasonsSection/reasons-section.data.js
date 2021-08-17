import { graphql } from "gatsby"

export const query = graphql`
  fragment ReasonsSection on WpPage_Pagebuilder_Layouts_ReasonsSection {
    descriptionReasons
    fieldGroupName
    reasons {
      content
      title
    }
    title
  }
`
