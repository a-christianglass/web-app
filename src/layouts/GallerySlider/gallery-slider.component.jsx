import React from "react"
import * as S from "./gallery-slider.styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core"
import { Swiper, SwiperSlide } from "swiper/react"
import CustomImage from "../../components/custom-image/custom-image.component"

const GallerySlider = ({ images, bgColor }) => {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.down("md"))
  if (!images) return null
  return (
    <S.Wrapper>
      <Swiper
        slidesPerView="auto"
        loop={true}
        centeredSlides={true}
        spaceBetween={0}
      >
        {images.map(({ image }, index) => (
          <SwiperSlide key={`icon-slide-${index}`}>
            {image && <CustomImage img={image} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  )
}
export default GallerySlider
