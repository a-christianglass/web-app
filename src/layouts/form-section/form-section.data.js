import { graphql } from "gatsby"

export const query = graphql`
    fragment FormSection on WpPage_Pagebuilder_Layouts_FormSection {
        callText
        contentFormSection
        number
        fieldGroupName
    }
`
