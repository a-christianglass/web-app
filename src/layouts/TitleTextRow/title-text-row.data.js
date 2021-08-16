import { graphql } from "gatsby"

export const query = graphql`
    fragment TitleTextRow on WpPage_Pagebuilder_Layouts_TitleTextRow {
        contentTitleTextRow
        fieldGroupName
        title
    }
`
