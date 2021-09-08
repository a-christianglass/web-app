import styled, { css } from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomImage from "../../components/custom-image/custom-image.component"

const sectionHeight = css`
  height: calc(100vh - ${({ theme }) => theme.navHeight}px);
`

export const HeroWrapper = styled(CustomBgImage)`
  padding: 0;
  background-color: ${({ theme }) => theme.palette.primary.main} !important;
`
export const ContentWrapper = styled.div`
  padding-top: 7em;
  padding-bottom: 4em;
`

export const ImageWrapper = styled(CustomBgImage)`
  // ${sectionHeight};
`

export const TextWrapper = styled.div`
  max-width: 550px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 0;
    padding-top: 23em;
    padding-bottom: 3em;
  }

  h2 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    line-height: 120.5%;
    letter-spacing: 0.01em;
    color: #fafafa;
    margin-bottom: 1em;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    }
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin-bottom: 0.5em;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(28)};
    }
  }
`

export const Button = styled(CustomButton)`
  background: #f89928;
  box-shadow: 0 24px 44px rgba(12, 54, 88, 0.11);
  border-radius: 4px;
  color: white;
  max-width: 307px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    text-transform: none;
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  }
`

export const LogoImage = styled(CustomImage)`
  max-width: 200px;
  height: auto;
  padding-bottom: 3em;
`

export const MobileContentWrapper = styled(CustomBgImage)``
