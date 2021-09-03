import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid } from "@material-ui/core"
import { SwiperSlide } from "swiper/react"

export const Wrapper = styled(SectionWrapper)`
  //padding: 0;
  background-color: #f0f5f7;
  position: relative;
  ${({ theme }) => theme.breakpoints.up("lg")} {
    &:before {
      content: "";
      position: absolute;
      width: 337px;
      height: 295px;
      top: 70px;
      right: 0;
      z-index: 1;
      pointer-events: none;
      background: linear-gradient(
        270deg,
        #ffffff 11.36%,
        rgba(255, 255, 255, 0) 59.47%
      );
    }
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    //padding: 7em 0;
    overflow: unset;
  }

  .arrows > div:nth-child(1) {
    display: none;
  }
`

export const TextWrapper = styled.div`
  max-width: 452px;
  h3 {
    text-transform: uppercase;
    color: rgba(13, 46, 77, 0.75);
    letter-spacing: 0.06em;
    line-height: 17px;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    opacity: 0.74;
    margin-bottom: 1em;
  }
  h2 {
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    color: #0d5c80;
    margin-bottom: 0.5em;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(24)};
      line-height: 29px;
    }
  }
  h4 {
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: 26px;
    color: rgba(29, 56, 69, 0.75);
    font-style: normal;
    font-weight: 500;
    margin-bottom: 1em;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    }
  }
`
export const LeftGrid = styled(Grid)`
  padding: 2em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  //padding: 3em;
  //min-height: 222px;
  height: 295px;
  width: 100%;
  border: 0.5px solid rgba(188, 197, 204, 0.2);
  border-radius: 5px;
`

export const ContentWrapper = styled.div`
  max-width: 500px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 1em;
  }
  p {
    padding: 0;
    margin-bottom: 1em;
    font-weight: 500;
    color: #0d2e4d;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    }
  }
  h4 {
    color: #00447b;
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    padding: 0;
    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    }
  }
  h5 {
    color: rgba(13, 46, 77, 0.75);
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    opacity: 0.75;
    padding: 0;
    margin: 0.2em 0 0 0;
    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    }
  }
`

export const RightGrid = styled(Grid)`
  clip-path: inset(-100vw -100vw -100vw 0);
`
