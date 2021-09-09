import React, { useRef } from "react"
import * as S from "./custom-slider.styles"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../../node_modules/slick-carousel/slick/slick.css"
import ArrowBack from "../../assets/icons/ArrowBack.svg"
import ArrowForward from "../../assets/icons/ArrowForward.svg"

const CustomSlider = ({
  noArrows,
  slidesToShow = 1,
  children,
  breakpoints,
  slidesPerColumn,
  autoHeight = true,
  spacingBetween = 20,
  pagination = false,
  slidesPerGroup,
}) => {
  let slider = useRef(null)
  const next = () => {
    slider.slickNext()
  }

  const previous = () => {
    slider.slickPrev()
  }

  return (
    <S.Container className={`custom-slider ${noArrows ? "" : "arrows"}`}>
      <S.CustomArrow onClick={previous} className="left">
        <ArrowBack />
      </S.CustomArrow>

      <Slider
        ref={c => (slider = c)}
        autoHeight={autoHeight}
        dots={pagination}
        slidesToScroll={slidesToShow}
        slidesToShow={slidesToShow}
        spaceBetween={spacingBetween}
        slidesPerView={slidesToShow}
        grabCursor={true}
        infinite={true}
        responsive={breakpoints}
      >
        {children}
      </Slider>

      <S.CustomArrow onClick={next} className="right">
        <ArrowForward />
      </S.CustomArrow>
    </S.Container>
  )
}
export default CustomSlider
