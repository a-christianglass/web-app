import React from "react"
import * as S from "./blue-features-section.styles"
import { Grid } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"

const BlueFeaturesSection = ({ ...props }) => {
  const { image } = { ...props }
  return (
    <S.Wrapper>
      <S.RowGrid>
        <Grid xs={4} sm={6}>
          <CustomImage img={image} alt={"alt"} className="left-image" />
        </Grid>
      </S.RowGrid>
    </S.Wrapper>
  )
}
export default BlueFeaturesSection
