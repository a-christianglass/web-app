import React from "react"
import * as S from "./project-slider.styles"
import { Grid } from "@material-ui/core"
import CustomSlider from "../../components/custom-slider/custom-slider.component"
import { SwiperSlide } from "swiper/react"
import ProjectCard from "../../components/project-card/project-card.component"
import CustomLink from "../../components/custom-link/custom-link.component"

const ProjectSlider = ({ leftContentProjectSlider, projects, color }) => {
  return (
    <S.Wrapper bgColor={color} contained>
      <Grid container>
        <S.LeftGrid
          item
          xs={12}
          md={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
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
        <S.RightGrid item xs={12} md={8}>
          <CustomSlider
            onlyRight={false}
            autoHeight={false}
            spacingBetween={30}
            slidesToShow={2}
            loop={true}
            breakpoints={[
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
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
            {projects.map((project, index) => (
              <SwiperSlide key={`project-slide-${index}`}>
                <CustomLink
                  url={"/about/projects-and-gallery/"}
                  style={{ display: "block" }}
                >
                  <ProjectCard {...project} />
                </CustomLink>
              </SwiperSlide>
            ))}
          </CustomSlider>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default ProjectSlider
