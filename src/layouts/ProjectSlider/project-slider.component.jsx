import React from "react"
import * as S from "./project-slider.styles"
import { Grid } from "@material-ui/core"
import CustomSlider from "../../components/custom-slider/custom-slider.component"
import { SwiperSlide } from "swiper/react"
import CustomImage from "../../components/custom-image/custom-image.component"
import { CustomLink } from "../../components/custom-link/custom-link.styles"
import Arrow from "../../assets/icons/arrow.svg"

const ProjectSlider = ({ leftContentProjectSlider, projects, color }) => {
  return (
    <S.Wrapper bgColor={color} contained>
      <Grid container>
        <S.LeftGrid item xs={12} md={7} alignItems={"center"} justifyContent={"center"}>
          <S.TextWrapper>
            {leftContentProjectSlider.title && (
              <h3>{leftContentProjectSlider.title}</h3>
            )}
            {leftContentProjectSlider.subtitle && (
              <h2>{leftContentProjectSlider.subtitle}</h2>
            )}
            {leftContentProjectSlider.content && (
              <p>{leftContentProjectSlider.content}</p>
            )}
            {leftContentProjectSlider.description && (
              <h4>{leftContentProjectSlider.description}</h4>
            )}
            {leftContentProjectSlider.button && (
              <S.Button href={leftContentProjectSlider.button.url}>
                {leftContentProjectSlider.button.title}
              </S.Button>
            )}
          </S.TextWrapper>
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={5}>
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
            {projects.map(({ image, link }, index) => (
              <SwiperSlide key={`project-slide-${index}`}>
                <S.CardWrapper>
                  {link && (
                    <CustomLink to={link.url}>
                      <S.Card>
                        <CustomImage img={image} />
                        <S.LinkWrapper>
                          <S.TitleWrapper>
                            <span>{link.title}</span>
                          </S.TitleWrapper>
                          <S.ArrowWrapper>
                            <Arrow />
                          </S.ArrowWrapper>
                        </S.LinkWrapper>
                      </S.Card>
                    </CustomLink>
                  )}
                </S.CardWrapper>
              </SwiperSlide>
            ))}
          </CustomSlider>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default ProjectSlider
