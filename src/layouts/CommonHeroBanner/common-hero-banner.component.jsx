import React from "react"
import * as S from "./common-hero-banner.styles"
import parse from "html-react-parser"

const CommonHeroBanner = ({ image, title, content }) => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.TextWrapper>
          {title && <h1>{parse(title)}</h1>}
          {content && <h2>{parse(content)}</h2>}
        </S.TextWrapper>
      </S.TopWrapper>
      {image && <S.BottomWrapper img={image} />}
    </S.Wrapper>
  )
}

export default CommonHeroBanner
