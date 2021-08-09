import React from "react"
import * as S from "./testimonial-slider.styles"
import { Grid } from "@material-ui/core"
import CustomSlider from "../../components/custom-slider/custom-slider.component"
import { SwiperSlide } from "swiper/react"

const TestimonialSlider = ({ leftContent, slides }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <S.LeftGrid item xs={6} alignItems={"center"} justifyContent={"center"}>
          <S.TextWrapper>
            <h3>{leftContent?.title}</h3>
            <h2>{leftContent?.subtitle}</h2>
            <h4>{leftContent?.description}</h4>
          </S.TextWrapper>
        </S.LeftGrid>
        <Grid item xs={6}>
          <CustomSlider
            onlyRight={false}
            autoHeight={false}
            spacingBetween={30}
            loop={true}
            breakpoints={{
              600: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}
          >
            {slides.map(({ slide }, index) => (
              <SwiperSlide key={`testimonial-slide-${index}`}>
                <S.CardWrapper>
                  {slide && <p>{slide?.review}</p>}
                  {slide && <h4>{slide?.author}</h4>}
                  {slide && <h5>{slide?.location}</h5>}
                </S.CardWrapper>
              </SwiperSlide>
            ))}
          </CustomSlider>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default TestimonialSlider
