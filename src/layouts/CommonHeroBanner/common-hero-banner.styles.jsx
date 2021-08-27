import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const TopWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 489px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    //padding: 6em 0;
  }

  min-height: 230px;
  position: relative;
  //padding: 6em 10em;
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
    color: #ffffff;
    opacity: 0.75;
  }

  h2 {
    font-size: 2.25rem;
    max-width: 750px;

    ${({ theme }) => theme.breakpoints.down("xs")} {
      font-size: 1.25rem;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`
export const TextWrapper = styled.div`
  max-width: 1077px;
  padding: 2em 0;
  // ${({ theme }) => theme.breakpoints.down("sm")} {
  //   padding-right: 16px;
  // }
`

export const BottomWrapper = styled(CustomImage)`
  width: 100%;
  height: 100%;
`
