import React, { useState } from "react"
import * as S from "./services-home.styles"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import Building from "../../assets/icons/building.svg"
import Home from "../../assets/icons/home.svg"
import CustomLink from "../../components/custom-link/custom-link.component"
import { ArrowForward } from "@material-ui/icons"
import { graphql, useStaticQuery } from "gatsby"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import ServiceCard from "../../components/service-card/service-card.component"

const ServicesHome = ({
  leftTag,
  leftTitle,
  leftContent,
  centerIcon,
  centerTitle,
  centerContent,
  centerLink,
  rightIcon,
  rightTitle,
  rightContent,
  rightLink,
}) => {
  const centerCard = {
    title: centerTitle,
    content: centerContent,
    link: centerLink,
    isResidentialCard: true,
  }

  const rightCard = {
    title: rightTitle,
    content: rightContent,
    link: rightLink,
    isResidentialCard: false,
  }
  return (
    <S.Wrapper>
      <S.CustomContainer>
        <Grid container spacing={2}>
          <S.LeftGrid item xs={12} md={4}>
            <S.LeftContentWrapper>
              {leftTag && <S.TagText>{leftTag}</S.TagText>}
              {leftTitle && (
                <h3 style={{ paddingBottom: "1em" }}>{parse(leftTitle)}</h3>
              )}
              {leftContent && (
                <S.LeftContentText>{leftContent}</S.LeftContentText>
              )}
            </S.LeftContentWrapper>
          </S.LeftGrid>
          <Grid item xs={12} md={4}>
            <ServiceCard {...centerCard} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard {...rightCard} />
          </Grid>
        </Grid>
      </S.CustomContainer>
    </S.Wrapper>
  )
}
export default ServicesHome
