import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`
export const BgImage = styled(CustomBgImage)``

export const TitleWrapper = styled.div`
  padding: 4em 10em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
  height: 324px;
  display: flex;
  align-items: flex-end;

  h1 {
    font-weight: bold;
    font-style: normal;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    color: #fafafa;
  }
`
