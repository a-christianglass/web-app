import { graphql } from "gatsby"

export const query = graphql`
  fragment TestimonialSlider on WpPage_Pagebuilder_Layouts_TestimonialSlider {
    fieldGroupName
    leftContentTestimonialSlider {
      description
      subtitle
      title
    }
    slides {
      author
      location
      review
    }
  }
`
