import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const TopWrapper = styled.div`
  min-height: 175px;
  position: relative;
  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 489px;
  }
  padding: 6em 10em;
  width: 100%;
  background: radial-gradient(
    56.04% 163.52% at 66.32% 139.24%,
    #4fbff3 0%,
    #1593cd 100%
  );

  h1 {
    margin-bottom: 2em;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    line-height: 120.5%;
    letter-spacing: 0.06em;
    color: #FFFFFF;
    opacity: 0.75;
  }

  h2 {
    font-size: 2.25rem;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: 1rem;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
`
export const TextWrapper = styled.div`
  max-width: 865px;
  position: absolute;
  bottom: 2em;
`

export const BottomWrapper = styled(CustomImage)`
  width: 100%;
  height: 100%;
`
