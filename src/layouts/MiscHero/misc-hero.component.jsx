import React from "react"
import * as S from "./misc-hero.styles"

const MiscHero = ({ image, title }) => {
  return (
    <S.Wrapper>
      {image && (
        <S.BgImage img={image}>
          <S.TitleWrapper>{title && <h1>{title}</h1>}</S.TitleWrapper>
        </S.BgImage>
      )}
    </S.Wrapper>
  )
}

export default MiscHero
