import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const TopWrapper = styled.div`
  max-height: 488px;
  padding: 6em 10em;
  width: 100%;
  background: radial-gradient(
    56.04% 163.52% at 66.32% 139.24%,
    #4fbff3 0%,
    #1593cd 100%
  );

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

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
`

export const BottomWrapper = styled(CustomImage)`
  width: 100%;
  height: 100%;
`
