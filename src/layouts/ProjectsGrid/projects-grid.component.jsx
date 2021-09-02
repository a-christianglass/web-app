import React from "react"
import * as S from "./projects-grid.styles"
import { Grid, useTheme } from "@material-ui/core"
import parse from "html-react-parser"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ProjectCard from "../../components/project-card/project-card.component"

const ProjectsGrid = ({ title, content, projects, color }) => {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <S.Wrapper contained bgColor={color}>
      <S.TopGrid container>
        <S.LeftGrid item xs={12} md={6}>
         {title && <h2>{title}</h2>}
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={6}>
          <S.RightTextWrapper>
            {content && <S.ContentText>{parse(content)}</S.ContentText>}
          </S.RightTextWrapper>
        </S.RightGrid>
      </S.TopGrid>
      <Grid container spacing={isMD ? 5 : 2}>
        {projects.map((props, index) => (
          <S.BottomGrid item xs={6} sm={6} md={4} key={`project-card-${index}`}>
            <ProjectCard {...props} />
          </S.BottomGrid>
        ))}
      </Grid>
    </S.Wrapper>
  )
}

export default ProjectsGrid
