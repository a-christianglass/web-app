import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import * as S from "./door-tab-slider.styles"

// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Pagination } from "swiper/core"
import CustomImage from "../custom-image/custom-image.component"
import { ArrowBack, ArrowForward } from "@material-ui/icons"

// install Swiper modules
SwiperCore.use([Pagination])

const DoorTabSlider = ({ images }) => {
  if (!images) return null
  return (
    <S.CustomSwiper
      pagination={{
        el: '.my-swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + ([index]) + '</span>';
        },
      }}
      slidesPerView="1"
      loop={true}
      autoHeight={true}
    >
      {images.map(({ image }, index) => (
        <SwiperSlide key={`windows-slide-${index}`}>
          {image && <CustomImage img={image} />}
        </SwiperSlide>
      ))}
      <div className="my-swiper-pagination"/>
    </S.CustomSwiper>
  )
}

export default DoorTabSlider
