import React from "react"
import * as S from "./project-slider.styles"
import { Grid } from "@material-ui/core"
import CustomSlider from "../../components/custom-slider/custom-slider.component"
import { SwiperSlide } from "swiper/react"
import CustomImage from "../../components/custom-image/custom-image.component"
import { CustomLink } from "../../components/custom-link/custom-link.styles"
import { graphql, useStaticQuery } from "gatsby"
import Arrow from "../../assets/icons/arrow.svg"

const ProjectSlider = ({ leftContent, projects }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      windows: file(relativePath: { eq: "doors.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <Grid container>
        <S.LeftGrid item xs={6} alignItems={"center"} justifyContent={"center"}>
          <S.TextWrapper>
            {leftContent.title && <h3>{leftContent.title}</h3>}
            {leftContent.subtitle && <h2>{leftContent.subtitle}</h2>}
            {leftContent.content && <p>{leftContent.content}</p>}
            {leftContent.description && <h4>{leftContent.description}</h4>}
            {leftContent.button && (
              <S.Button href={leftContent.button.url}>
                {leftContent.button.title}
              </S.Button>
            )}
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
            {projects.map(({ project }, index) => (
              <SwiperSlide key={`project-slide-${index}`}>
                <S.CardWrapper>
                  {project.link && (
                    <CustomLink to={project.link.url}>
                      <S.Card>
                        <CustomImage img={project.image} />
                        <S.LinkWrapper>
                          <S.TitleWrapper>
                            <span>{project.link.title}</span>
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
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default ProjectSlider
