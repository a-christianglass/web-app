import { graphql } from "gatsby"

export const query = graphql`
  fragment AppointmentBanner on WpPage_Pagebuilder_Layouts_AppointmentBanner {
    color
    content
    button {
      title
      url
    }
    fieldGroupName
  }
`
