import { graphql } from "gatsby"

export const query = graphql`
  fragment ServicesHome on WpPage_Pagebuilder_Layouts_ServicesHome {
    centerContent
    centerTitle
    centerLink {
      title
      url
    }
    fieldGroupName
    leftContent
    leftTag
    leftTitle
    rightContent
    rightLink {
      title
      url
    }
    rightTitle
  }
`
