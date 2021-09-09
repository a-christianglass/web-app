import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Box, Grid } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  ${({ bgColor }) =>
    bgColor === "white"
      ? `
  background-color: white;
   `
      : `
background-color: #f0f5f7;
   `};

  .swiper {
    //width: 100%;
    //height: 100%;
    //padding: 7em 0;
    overflow: unset;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    &:before {
      content: "";
      position: absolute;
      width: 400px;
      height: 100%;
      top: 0;
      right: 0;
      z-index: 1;
      pointer-events: none;
      background: linear-gradient(
        270deg,
        #ffffff 2.36%,
        rgba(255, 255, 255, 0) 35.47%
      );
    }
  }

  .arrows > div:nth-child(1) {
    display: none;
  }
`

export const TextWrapper = styled.div`
  max-width: 452px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: unset;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 2em;
  }
  h3 {
    text-transform: uppercase;
    color: rgba(13, 46, 77, 0.75);
    letter-spacing: 0.06em;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    line-height: 17px;

    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(12)};
    }

    opacity: 0.74;
    margin-bottom: 1em;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    color: #0d5c80;
    margin-bottom: 0.5em;

    ${({ theme }) => theme.breakpoints.down("md")} {
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

    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    }
  }
  p {
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: 26px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 1em;
  }
`
export const LeftGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2em 0;
  }
`

export const ImageWrapper = styled.div`
  padding: 0;
  max-width: 382px;
  max-height: 505px;
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  object-fit: contain !important;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 0.5em 2em;

  span {
    color: #0d5c80;
    font-size: 1rem;
    font-style: normal;
    font-weight: bold;
  }
`
export const Button = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: #ffffff;
  text-transform: capitalize;
`

export const RightGrid = styled(Grid)`
  clip-path: inset(-100vw -100vw -100vw 0);
`
