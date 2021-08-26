import React from "react"
import * as S from "./partners-grid.styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

const PartnersGrid = ({ partnersTitle, partnersLogos }) => {
  return (
    <S.Wrapper>
      <Container>
        {partnersTitle && <S.Title>{partnersTitle}</S.Title>}
        <Grid container spacing={30}>
          {partnersLogos &&
            partnersLogos.map(({ image }, index) => (
              <Grid item xs={6} md={2}>
                <S.CustomLogo img={image.sourceUrl} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default PartnersGrid
