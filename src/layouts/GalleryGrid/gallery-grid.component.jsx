import React from "react"
import * as S from "./gallery-grid.styles"
import Container from "@material-ui/core/Container"
import { Grid, useTheme } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const GalleryGrid = ({ title, cards }) => {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <S.Wrapper>
      <Container>
        {title && <S.Title>{title}</S.Title>}
        <Grid container spacing={isMD ? 5 : 2}>
          {cards.map(({ image, title }, index) => (
            <S.BottomGrid item xs={6} md={4} key={`project-card-${index}`}>
              <S.CardContainer>
                <S.Card>
                  <CustomImage img={image} />
                  <S.LinkWrapper>
                    <S.TitleWrapper>
                      <span>{title}</span>
                    </S.TitleWrapper>
                  </S.LinkWrapper>
                </S.Card>
              </S.CardContainer>
            </S.BottomGrid>
          ))}
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default GalleryGrid
