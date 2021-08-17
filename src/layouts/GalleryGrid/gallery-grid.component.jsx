import React from "react"
import * as S from "./gallery-grid.styles"
import Container from "@material-ui/core/Container"
import { Grid } from "@material-ui/core"
import { CustomLink } from "../../components/custom-link/custom-link.styles"
import CustomImage from "../../components/custom-image/custom-image.component"
import Arrow from "../../assets/icons/arrow.svg"

const GalleryGrid = ({ title, cards }) => {
  return (
    <S.Wrapper>
      <Container>
        {title && <S.Title>{title}</S.Title>}
        <Grid container>
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
