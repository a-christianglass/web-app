import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Typography } from "@material-ui/core"

export const Wrapper = styled(SectionWrapper)`
  padding: 2em;
  .swiper-container {
    padding-bottom: 2em;
    padding-top: 2em;
  }

  .left {
    left: -2em;
  }

  .right {
    right: -2em;
  }

  .swiper-slide {
    margin-top: 30px !important;
  }
`

export const CustomLogo = styled(CustomImage)`
  width: 160px;
  height: 90px;
  object-fit: contain;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
  }
`

export const Text = styled(Typography)`
  font-weight: 500;
  min-height: 48px;
  color: #212121;
`
export const Title = styled.h2`
  letter-spacing: 0;
  line-height: 47px;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 0;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.dark};
`
