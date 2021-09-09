import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import * as S from "./door-tab-slider.styles"

// Import Swiper styles
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/pagination"
import { Navigation, Pagination, Virtual } from "swiper"
import CustomImage from "../custom-image/custom-image.component"

const DoorTabSlider = ({ images }) => {
  if (!images) return null
  return (
    <S.CustomSwiper
      modules={[Navigation, Pagination, Virtual]}
      pagination={{
        el: ".my-swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + [index] + "</span>"
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
      <div className="my-swiper-pagination" />
    </S.CustomSwiper>
  )
}

export default DoorTabSlider
