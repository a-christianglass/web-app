import React, { useRef } from "react"
import * as S from "./icon-grid.styles"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper"
import { Swiper } from "swiper/react"

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
        modules={[Pagination, Navigation]}
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
