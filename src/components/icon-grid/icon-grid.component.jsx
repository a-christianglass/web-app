import React, { useRef } from "react"
import * as S from "./icon-grid.styles"
import "swiper/swiper.min.css"
import "swiper/swiper-bundle.css"
import "swiper/swiper-bundle.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper } from "swiper/react"
SwiperCore.use([Pagination, Navigation])

const IconSlider = ({
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
  return (
    <S.Container className={noArrows ? "" : "arrows"}>
      <Swiper
        autoHeight={autoHeight}
        slidesPerColumnFill="row"
        slidesPerGroup={slidesToShow}
        spaceBetween={spacingBetween}
        slidesPerView={slidesToShow}
        grabCursor={false}
        breakpoints={breakpoints}
        slidesPerColumn={slidesPerColumn}
        loop={false}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={pagination}
      >
        {children}
      </Swiper>
    </S.Container>
  )
}
export default IconSlider
