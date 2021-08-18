import { graphql } from "gatsby"

export const query = graphql`
    fragment TellUsSection on WpPage_Pagebuilder_Layouts_TellUsSection {
        fieldGroupName
    }
`
