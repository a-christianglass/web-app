import React from "react"
import * as S from "./logos-grid.styles"
import Container from "@material-ui/core/Container"
import IconSlider from "../../components/icon-grid/icon-grid.component"
import { SwiperSlide } from "swiper/react"

const LogosGrid = ({ logos, title }) => {
  if (!logos) return null
  return (
    <S.Wrapper>
      <Container>
        <S.Title>{title}</S.Title>
        <IconSlider
          autoHeight={false}
          slidesToShow={2}
          spacingBetween={30}
          slidesPerColumn={2}
          loop={false}
          breakpoints={{
            600: {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            1200: {
              slidesPerView: 5,
              slidesPerColumn: 2,
            },
          }}
        >
          {logos.map(({ title, image }, index) => (
            <SwiperSlide key={`icon-slide-${index}`}>
              {image && <S.CustomLogo img={image.sourceUrl} />}
            </SwiperSlide>
          ))}
        </IconSlider>
      </Container>
    </S.Wrapper>
  )
}
export default LogosGrid
