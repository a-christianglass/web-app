import React from "react"
import * as S from "./common-hero-banner.styles"
import parse from "html-react-parser"
import { Grid } from "@material-ui/core"

const CommonHeroBanner = ({ imageCommonHero, title, content }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <S.TopWrapper>
          <Grid item xs={12}>
            {title && <h1>{parse(title)}</h1>}
          </Grid>
          <Grid item xs={12}>
            {content && <h2>{parse(content)}</h2>}
          </Grid>
        </S.TopWrapper>
      </Grid>
      {imageCommonHero && <S.BottomWrapper img={imageCommonHero} />}
    </S.Wrapper>
  )
}

export default CommonHeroBanner
