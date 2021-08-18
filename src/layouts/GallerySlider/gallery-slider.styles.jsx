import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  ${({ theme }) => theme.sectionPadding};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;

  p {
    margin-bottom: 2em;
  }

  .swiper-slide {
    max-height: 386px;
    max-width: 386px;
  }

  .gatsby-image-wrapper img {
    object-fit: contain !important;
  }
}

${({ theme }) => theme.breakpoints.down("sm")} {
  .swiper-container {
    overflow: unset;
  }

  .swiper-slide {
    max-height: 300px;
    max-width: 300px;
  }
}
`
