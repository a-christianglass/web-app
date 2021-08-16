import { graphql } from "gatsby"

export const query = graphql`
  fragment ChoicesSection on WpPage_Pagebuilder_Layouts_ChoicesSection {
    fieldGroupName
    rightContentChoicesSection
    leftContentChoicesSection {
      content
      title
    }
  }
`
