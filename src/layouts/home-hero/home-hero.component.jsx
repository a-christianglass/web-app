import React from "react"
import * as S from "./home-hero.styles"
import parse from "html-react-parser"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { Container } from "@material-ui/core"

const HomeHero = ({ imageHome, title, subtitle, button }) => {
  return (
    <S.HeroWrapper>
      <CustomBgImage img={imageHome}>
        <Container>
          <S.TextWrapper>
            {subtitle && <h2>{parse(subtitle)}</h2>}
            {subtitle && <h1>{parse(title)}</h1>}
            {button && <S.Button href={button?.url}>{button?.title}</S.Button>}
          </S.TextWrapper>
        </Container>
      </CustomBgImage>
    </S.HeroWrapper>
  )
}

export default HomeHero
