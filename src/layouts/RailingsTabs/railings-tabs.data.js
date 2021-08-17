import { graphql } from "gatsby"

export const query = graphql`
  fragment RailingsTabs on WpPage_Pagebuilder_Layouts_RailingsTabs {
    descriptionRaillings
    fieldGroupName
    tabsRaillings {
      tab {
        features {
          feature {
            content
            title
          }
        }
        title
      }
    }
    title
  }
`
