import React from "react"
import * as S from "./gallery-slider.styles"
import Container from "@material-ui/core/Container"
import CustomSlider from "../../components/custom-slider/custom-slider.component"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core"
import { SwiperSlide } from "swiper/react"

const GallerySlider = ({ images, bgColor }) => {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.down("md"))
  if (!images) return null
  return (
    <S.Wrapper bgColor={bgColor}>
      <Container>
        <CustomSlider
          autoHeight={false}
          spacingBetween={0}
          loop={true}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          noArrows={images.length <= 10 || isMD}
        >
          {images.map(({ image }, index) => (
            <SwiperSlide key={`icon-slide-${index}`}>
              {image && <S.CustomIcon img={image.sourceUrl} />}
            </SwiperSlide>
          ))}
        </CustomSlider>
      </Container>
    </S.Wrapper>
  )
}
export default GallerySlider
