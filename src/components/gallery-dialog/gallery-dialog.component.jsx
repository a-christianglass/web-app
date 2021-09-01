import React from "react"
import * as S from "./gallery-dialog.styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

const GalleryDialog = ({ title, description }) => {
  return (
    <S.Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </Grid>
          <Grid item xs={12} md={8}>
            {title && <h2>{title}</h2>}
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default GalleryDialog
