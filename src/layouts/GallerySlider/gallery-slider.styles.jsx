import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  background-color: #f0f5f7;
  .swiper-container {
    width: 100%;
    height: 100%;
    padding: 5em 0;
  }
`

export const CustomIcon = styled(CustomImage)`
  max-width: 457px;
  max-height: 457px;
  object-fit: contain;
  margin-left: -1px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
  }
`
