import { graphql } from "gatsby"

export const query = graphql`
  fragment ChoicesQuote on WpPage_Pagebuilder_Layouts_ChoicesQuote {
    choicesTitle
    choicesContent
    choicesQuote
    quoteAuthor
    quoteLocation
  }
`
