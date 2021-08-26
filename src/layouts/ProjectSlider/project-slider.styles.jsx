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

  .swiper-container {
    width: 100%;
    height: 100%;
    //padding: 7em 0;
    overflow: unset;
  }

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
      #ffffff 11.36%,
      rgba(255, 255, 255, 0) 59.47%
    );
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
    font-size: 14px;
    opacity: 0.74;
    margin-bottom: 1em;
  }
  h2 {
    font-size: 36px;
    line-height: 47px;
    color: #0d5c80;
    margin-bottom: 0.5em;
  }
  h4 {
    font-size: 16px;
    line-height: 26px;
    color: rgba(29, 56, 69, 0.75);
    font-style: normal;
    font-weight: 500;
    margin-bottom: 1em;
  }
`
export const LeftGrid = styled(Grid)`
  padding: 2em;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2em 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  //max-width: 400px;
  border: 0.5px solid rgba(188, 197, 204, 0.2);
  border-radius: 5px;
`
export const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  filter: drop-shadow(0px 8px 12px rgba(8, 44, 73, 0.04));
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

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  border-bottom-right-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primary.main};

  padding: 1em;

  svg {
    width: 32px;
    height: 32px;
    object-fit: contain !important;
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
