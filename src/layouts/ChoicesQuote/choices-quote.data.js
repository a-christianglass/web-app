import { graphql } from "gatsby"

export const query = graphql`
  fragment ChoicesQuote on WpPage_Pagebuilder_Layouts_ChoicesQuote {
    fieldGroupName
    choicesTitle
    choicesContent
    choicesQuote
    quoteAuthor
    quoteLocation
  }
`
