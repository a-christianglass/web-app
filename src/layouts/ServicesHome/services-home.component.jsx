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
  const staticQuery = useStaticQuery(graphql`
    query {
      blueCard: file(relativePath: { eq: "serviceCardBlue.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      whiteCard: file(relativePath: { eq: "serviceCardWhite.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  const card = {
   centerTitle,
   centerContent,
   centerLink,
   rightTitle,
   rightContent,
   rightLink,
   whiteCard: staticQuery.whiteCard,
   blueCard: staticQuery.blueCard
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
          <Grid
            item
            xs={12}
            md={8}
          >
          <ServiceCard {...card}/>
          </Grid>
        </Grid>
      </S.CustomContainer>
    </S.Wrapper>
  )
}
export default ServicesHome