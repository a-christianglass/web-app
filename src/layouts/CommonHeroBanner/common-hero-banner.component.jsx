import React from "react"
import * as S from "./common-hero-banner.styles"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"

const CommonHeroBanner = ({ imageCommonHero, title, content }) => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <Container>
          <S.TextWrapper>
            {title && <h1>{parse(title)}</h1>}
            {content && <h2>{parse(content)}</h2>}
          </S.TextWrapper>
        </Container>
      </S.TopWrapper>
      {imageCommonHero && <S.BottomWrapper img={imageCommonHero} />}
    </S.Wrapper>
  )
}

export default CommonHeroBanner
