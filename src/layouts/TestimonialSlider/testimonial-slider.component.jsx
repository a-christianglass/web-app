import React from "react"
import * as S from "./testimonial-slider.styles"
import { Grid } from "@material-ui/core"
import CustomSlider from "../../components/custom-slider/custom-slider.component"
import { SwiperSlide } from "swiper/react"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"

const TestimonialSlider = ({ leftContentTestimonialSlider, slides }) => {
  return (
    <S.Wrapper>
      <Container>
        <Grid container>
          <S.LeftGrid
            item
            xs={12}
            md={6}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <S.TextWrapper>
              <h3>{leftContentTestimonialSlider?.title}</h3>
              <h2>{leftContentTestimonialSlider?.subtitle}</h2>
              <h4>{leftContentTestimonialSlider?.description}</h4>
            </S.TextWrapper>
          </S.LeftGrid>
          <S.RightGrid item xs={12} md={6}>
            <CustomSlider
              onlyRight={false}
              autoHeight={false}
              spacingBetween={40}
              slidesPerView={1}
              // loop={true}
              breakpoints={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                  },
                },
              ]}
            >
              {slides.map(({ review, author, location }, index) => (
                <SwiperSlide
                  key={`testimonial-slide-${index}`}
                  virtualIndex={index}
                >
                  <S.CardWrapper>
                    <S.ContentWrapper>
                      {review && <p>{parse(review)}</p>}
                      {author && <h4>{author}</h4>}
                      {location && <h5>{location}</h5>}
                    </S.ContentWrapper>
                  </S.CardWrapper>
                </SwiperSlide>
              ))}
            </CustomSlider>
          </S.RightGrid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default TestimonialSlider
