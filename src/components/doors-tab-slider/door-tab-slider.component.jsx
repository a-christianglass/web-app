import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Pagination } from "swiper/core"
import CustomImage from "../custom-image/custom-image.component"

// install Swiper modules
SwiperCore.use([Pagination])

const DoorTabSlider = ({ images }) => {
  if (!images) return null
  return (
    <Swiper
      pagination={{
        clickable: true,
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
    </Swiper>
  )
}

export default DoorTabSlider
