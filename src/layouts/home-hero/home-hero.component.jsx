import React from "react"
import { HeroWrapper } from "./home-hero.styles"
import * as S from "./home-hero.styles"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

const HomeHero = ({ ...props }) => {
  const { image, title, subtitle, button } = { ...props }
  return (
    <S.HeroWrapper>
      <CustomBgImage img={image}>
        <S.ContentWrapper>
          <S.TextWrapper>
            <h2>{subtitle}</h2>
            <h1>{title}</h1>
            <S.Button href={button && button.url}>
              {button && button.title}
            </S.Button>
          </S.TextWrapper>
        </S.ContentWrapper>
      </CustomBgImage>
    </S.HeroWrapper>
  )
}

export default HomeHero
