import { graphql } from "gatsby"

export const query = graphql`
  fragment FaqTabs on WpPage_Pagebuilder_Layouts_FaqTabs {
    faqTitle
    fieldGroupName
    faqTabs {
      tab {
        title
        faqs {
          faq {
            content
            title
          }
        }
      }
    }
  }
`
