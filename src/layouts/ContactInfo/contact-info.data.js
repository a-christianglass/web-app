import { graphql } from "gatsby"

export const query = graphql`
  fragment ContactInfo on WpPage_Pagebuilder_Layouts_ContactInfo {
    fieldGroupName
  }
`
