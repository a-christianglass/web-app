import React, { useRef } from "react"
import { useTheme } from "@material-ui/core"
import * as S from "./custom-slider.styles"
import "swiper/swiper.min.css"
import "swiper/swiper-bundle.css"
import "swiper/swiper-bundle.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper } from "swiper/react"
import ArrowBack from "../../assets/icons/ArrowBack.svg"
import ArrowForward from "../../assets/icons/ArrowForward.svg"
SwiperCore.use([Pagination, Navigation])

const CustomSlider = ({
  noArrows,
  slidesToShow = 1,
  children,
  breakpoints,
  slidesPerColumn,
  autoHeight = true,
  spacingBetween = 20,
  pagination = true,
}) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const theme = useTheme()
  return (
    <S.Container className={`custom-slider ${noArrows ? "" : "arrows"}`}>
      <S.CustomArrow ref={navigationPrevRef} className="left">
        <ArrowBack />
      </S.CustomArrow>

      <Swiper
        autoHeight={autoHeight}
        slidesPerColumnFill="row"
        slidesPerGroup={slidesToShow}
        spaceBetween={spacingBetween}
        slidesPerView={slidesToShow}
        grabCursor={true}
        breakpoints={breakpoints}
        slidesPerColumn={slidesPerColumn}
        loop={true}
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
