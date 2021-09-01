import styled from "styled-components"
import { Container } from "@material-ui/core"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled.div`
  background-color: #000000;
  .thumbSwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .thumbSwiper .swiper-slide-thumb-active {
    opacity: 1;
  }
`
export const ContentWrapper = styled.div`
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #ffffff;
  }
`

export const ImageWrapper = styled.div`
  max-width: 874px;
  max-height: 576px;
`

export const GalleryImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
`
export const CustomArrow = styled.div`
  width: 32px;
  height: 32px;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  padding: 0;
  &.left {
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
`

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
