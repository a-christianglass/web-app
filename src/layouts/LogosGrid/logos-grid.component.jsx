import React from "react"
import * as S from "./logos-grid.styles"
import Grid from "@material-ui/core/Grid"
import CustomImage from "../../components/custom-image/custom-image.component"

const LogosGrid = ({ title, logos }) => {
  if (!logos) return null
  return (
    <S.Wrapper contained maxWidth="md">
      {title && <S.Title>{title}</S.Title>}
      <Grid container spacing={4}>
        {logos.map(({ logo }, index) => (
          <Grid item xs={6} sm={3} key={`logo-${index}`}>
            <CustomImage img={logo} alt={"logo"} />
          </Grid>
        ))}
      </Grid>
    </S.Wrapper>
  )
}
export default LogosGrid
