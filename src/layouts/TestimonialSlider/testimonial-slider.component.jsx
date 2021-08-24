import React from "react"
import * as S from "./testimonial-slider.styles"
import { Grid } from "@material-ui/core"
import CustomSlider from "../../components/custom-slider/custom-slider.component"
import { SwiperSlide } from "swiper/react"
import parse from "html-react-parser"

const TestimonialSlider = ({ leftContentTestimonialSlider, slides }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <S.LeftGrid item xs={12} md={6} alignItems={"center"} justifyContent={"center"}>
          <S.TextWrapper>
            <h3>{leftContentTestimonialSlider?.title}</h3>
            <h2>{leftContentTestimonialSlider?.subtitle}</h2>
            <h4>{leftContentTestimonialSlider?.description}</h4>
          </S.TextWrapper>
        </S.LeftGrid>
        <Grid item xs={12} md={6}>
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
            {slides.map(({ review, author, location }, index) => (
              <SwiperSlide key={`testimonial-slide-${index}`}>
                <S.CardWrapper>
                  {review && <p>{parse(review)}</p>}
                  {author && <h4>{author}</h4>}
                  {location && <h5>{location}</h5>}
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
