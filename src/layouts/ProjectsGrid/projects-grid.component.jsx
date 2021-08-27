import React from "react"
import * as S from "./projects-grid.styles"
import { Grid, useTheme } from "@material-ui/core"
import parse from "html-react-parser"
import { CustomLink } from "../../components/custom-link/custom-link.styles"
import CustomImage from "../../components/custom-image/custom-image.component"
import Arrow from "../../assets/icons/arrow.svg"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const ProjectsGrid = ({ title, content, projects, color }) => {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <S.Wrapper contained bgColor={color}>
      <S.TopGrid container>
        <S.LeftGrid item xs={12} md={6}>
          <S.LeftTextWrapper>{title && <h2>{title}</h2>}</S.LeftTextWrapper>
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={6}>
          <S.RightTextWrapper>
            {content && <S.ContentText>{parse(content)}</S.ContentText>}
          </S.RightTextWrapper>
        </S.RightGrid>
      </S.TopGrid>
      <Grid container spacing={isMD ? 5 : 2}>
        {projects.map(({ image, link }, index) => (
          <S.BottomGrid
            item
            xs={12}
            sm={6}
            md={4}
            key={`project-card-${index}`}
          >
            <S.CardContainer>
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
            </S.CardContainer>
          </S.BottomGrid>
        ))}
      </Grid>
    </S.Wrapper>
  )
}

export default ProjectsGrid
