import React from "react"
import * as S from "./distributor-section.styles"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"

const DistributorSection = ({ logo, title, subtitle, contentDistributorSection }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <S.LeftGrid item xs={12} md={6}>
          <S.ImageWrapper img={logo} />
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={6}>
          <S.TextWrapper>
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
            {contentDistributorSection && <S.ContentText>{parse(contentDistributorSection)}</S.ContentText>}
          </S.TextWrapper>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default DistributorSection
