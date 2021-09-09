import React, { useRef } from "react"
import * as S from "./custom-slider.styles"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/pagination"
import { Navigation, Pagination, Virtual } from "swiper"
import { Swiper } from "swiper/react"
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
  pagination = true,
  slidesPerGroup,
}) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <S.Container className={`custom-slider ${noArrows ? "" : "arrows"}`}>
      <S.CustomArrow ref={navigationPrevRef} className="left">
        <ArrowBack />
      </S.CustomArrow>

      <Swiper
        autoHeight={autoHeight}
        // slidesPerColumnFill="row"
        modules={[Navigation, Pagination]}
        // virtual
        spaceBetween={spacingBetween}
        slidesPerView={slidesToShow}
        grabCursor={true}
        breakpoints={breakpoints}
        // slidesPerColumn={slidesPerColumn}
        loop={true}
        // virtual={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={pagination}
      >
        {children}
      </Swiper>

      <S.CustomArrow ref={navigationNextRef} className="right">
        <ArrowForward />
      </S.CustomArrow>
    </S.Container>
  )
}
export default CustomSlider
