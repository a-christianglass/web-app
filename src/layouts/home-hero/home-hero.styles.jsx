import styled, { css } from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

const sectionHeight = css`
  height: calc(100vh - ${({ theme }) => theme.navHeight}px);
`

export const HeroWrapper = styled(SectionWrapper)`
  padding: 0;
`
export const ContentWrapper = styled.div``

export const ImageWrapper = styled(CustomBgImage)`
  // ${sectionHeight};
`

export const TextWrapper = styled.div`
  padding: 18em 0;
  margin-left: 5em;
  max-width: 550px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
    margin: 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 1em;
  }

  h1 {
    font-size: 3.375rem;
    margin-bottom: 0.5em;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: 2rem;
    }
  }
`

export const Button = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.text.primary};
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: capitalize;
`
