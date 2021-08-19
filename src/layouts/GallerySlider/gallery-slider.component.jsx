import React, { useRef } from "react"
import * as S from "./gallery-slider.styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core"
import { Swiper, SwiperSlide } from "swiper/react"
import CustomImage from "../../components/custom-image/custom-image.component"
import ArrowBack from "../../assets/icons/ArrowBack.svg"
import ArrowForward from "../../assets/icons/ArrowForward.svg"

const GallerySlider = ({ images, bgColor, noPadding }) => {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.down("md"))
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  if (!images) return null
  return (
    <S.Wrapper noPadding={noPadding}>
      <S.CustomArrow ref={navigationPrevRef} className="left">
        <ArrowBack />
      </S.CustomArrow>
      <Swiper
        slidesPerView="auto"
        loop={true}
        centeredSlides={true}
        spaceBetween={0}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        {images.map(({ image }, index) => (
          <SwiperSlide key={`icon-slide-${index}`}>
            {image && <CustomImage img={image} />}
          </SwiperSlide>
        ))}
      </Swiper>
      <S.CustomArrow ref={navigationNextRef} className="right">
        <ArrowForward />
      </S.CustomArrow>
    </S.Wrapper>
  )
}
export default GallerySlider
