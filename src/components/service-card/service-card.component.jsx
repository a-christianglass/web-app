import React from "react"
import * as S from "./service-card.styles"
import CustomButton from "../custom-button/custom-button.component"
import { navigate } from "gatsby"
import Building from "../../assets/icons/building.svg"
import Home from "../../assets/icons/home.svg"
import Link from "gatsby-link"
import { CustomLink } from "../custom-link/custom-link.styles"

const ServiceCard = ({
  centerTitle,
  centerContent,
  rightTitle,
  rightContent,
  whiteCard,
  blueCard,
}) => {
  return (
    <S.Wrapper>
      <S.ResidentialWrapper className="residentialWrapper" tag="div" img={whiteCard}>
        <S.InnerWrapper>
          <Home />
          <S.Title>{centerTitle}</S.Title>
          <S.ShortDesc>{centerContent}</S.ShortDesc>
        </S.InnerWrapper>
      </S.ResidentialWrapper>

      <S.CommercialWrapper className="commercialWrapper" tag="div" img={blueCard}>
        <S.InnerWrapper>
          <Building />
          <S.Title>{rightTitle}</S.Title>
          <S.ShortDesc>{rightContent}</S.ShortDesc>
        </S.InnerWrapper>
      </S.CommercialWrapper>
    </S.Wrapper>
  )
}
export default ServiceCard
