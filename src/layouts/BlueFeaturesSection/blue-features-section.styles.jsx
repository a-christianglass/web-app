import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  display: flex;
`
export const ImageWrapper = styled(CustomBgImage)`
  height: 100%;
  width: 100%;
  margin-left: -1px;
`
export const ContentWrapper = styled.div`
  padding: 4em;
  h2 {
    font-size: 2.25rem;
    max-width: 512px;
  }
`
