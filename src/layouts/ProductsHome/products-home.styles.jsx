import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Container from "@material-ui/core/Container"

export const Wrapper = styled(SectionWrapper)`
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2em 0;
  }
`

export const CustomContainer = styled(Container)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`

export const TextWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 380px;
    margin: auto;
  }

  padding-top: 3em;
  padding-bottom: 5em;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 120.5%;
    letter-spacing: 0.01em;
    color: #0d5c80;
    padding-bottom: 1em;
  }

  p {
    padding-bottom: 2em;
    ${({ theme }) => theme.breakpoints.up("md")} {
      min-height: 178px;
    }
  }
`

export const ProductImage = styled(CustomImage)`
  max-height: 390px !important;
  width: auto;
  height: 100%;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-height: 200px !important;
  }
  img {
    max-height: 390px !important;
  }
`
