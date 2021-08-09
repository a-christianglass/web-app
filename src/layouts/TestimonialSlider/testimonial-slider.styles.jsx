import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid } from "@material-ui/core"
import { SwiperSlide } from "swiper/react"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  background-color: #f0f5f7;

  .swiper-container {
    width: 100%;
    height: 100%;
    padding: 7em 0;
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
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 3em;
  max-width: 550px;
  border: 0.5px solid rgba(188, 197, 204, 0.2);
  border-radius: 5px;
  p {
    padding: 0;
    margin-bottom: 1em;
    font-weight: 500;
    color: #0d2e4d;
  }
  h4 {
    color: #00447b;
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    padding: 0;
  }
  h5 {
    color: rgba(13, 46, 77, 0.75);
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    opacity: 0.75;
    padding: 0;
    margin: 0.2em 0 0 0;
  }
`
