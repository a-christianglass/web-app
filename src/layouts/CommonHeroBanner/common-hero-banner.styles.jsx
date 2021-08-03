import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`
export const TopWrapper = styled.div`
  max-height: 488px;
  padding: 2em;
  background: radial-gradient(
    56.04% 163.52% at 66.32% 139.24%,
    #4fbff3 0%,
    #1593cd 100%
  );
`

export const TextWrapper = styled.div`
  max-width: 950px;
  padding: 10em 0 2em 10em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
  h1 {
    font-size: 0.875rem;
    margin-bottom: 1em;
    text-transform: uppercase;
  }
  h2 {
    font-size: 2.25rem;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: 1rem;
    }
  }
`

export const BottomWrapper = styled(CustomImage)`
  width: 100%;
  height: 100%;
`
