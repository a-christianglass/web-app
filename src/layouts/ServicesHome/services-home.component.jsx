import React, { useState } from "react"
import * as S from "./services-home.styles"
import parse from "html-react-parser"
import Grid from "@material-ui/core/Grid"
import CustomLink from "../../components/custom-link/custom-link.component"
import ServiceCard from "../../components/service-card/service-card.component"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import theme from "../../theme"
import { Typography } from "@material-ui/core"
import Building from "../../assets/icons/building.svg"
import Home from "../../assets/icons/home.svg"
import { ArrowForward } from "@material-ui/icons"
import { graphql, useStaticQuery } from "gatsby"

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
  const isXS = useMediaQuery(theme.breakpoints.down("xs"))

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
          <S.CardGrid item xs={12} md={4}>
            {centerLink.url && (
              <CustomLink url={centerLink.url}>
                {isXS ? (
                  <S.ContentWrapper
                    img={staticQuery.whiteCard}
                    style={{ backgroundColor: "#EAF2F6" }}
                  >
                    <Home />
                    {centerTitle && (
                      <S.CardTitle style={{ color: "#0D5C80" }}>
                        {centerTitle}
                      </S.CardTitle>
                    )}
                    {centerContent && (
                      <Typography style={{ color: "#0D5C80" }}>
                        {centerContent}
                      </Typography>
                    )}
                    {centerLink && (
                      <S.CardLink>
                        <CustomLink className="darkLink" url={centerLink.url}>
                          {" "}
                          {centerLink.title}
                        </CustomLink>
                        <ArrowForward
                          style={{ color: "#0D5C80" }}
                          className="arrow"
                        />
                      </S.CardLink>
                    )}
                  </S.ContentWrapper>
                ) : (
                  <ServiceCard {...centerCard} />
                )}
              </CustomLink>
            )}
          </S.CardGrid>
          <S.CardGrid item xs={12} md={4}>
            {centerLink.url && (
              <CustomLink url={rightLink.url}>
                {isXS ? (
                  <S.ContentWrapper
                    img={staticQuery.blueCard}
                    style={{ backgroundColor: "#1593CD" }}
                  >
                    <Building />
                    {rightTitle && (
                      <S.CardTitle style={{ color: "white" }}>
                        {rightTitle}
                      </S.CardTitle>
                    )}
                    {rightContent && (
                      <Typography style={{ color: "white" }}>
                        {rightContent}
                      </Typography>
                    )}
                    {rightLink && (
                      <S.CardLink>
                        <CustomLink className="lightLink" url={rightLink.url}>
                          {centerLink.title}
                        </CustomLink>
                        <ArrowForward
                          style={{ color: "white" }}
                          className="arrow"
                        />
                      </S.CardLink>
                    )}
                  </S.ContentWrapper>
                ) : (
                  <ServiceCard {...rightCard} />
                )}
              </CustomLink>
            )}
          </S.CardGrid>
        </Grid>
      </S.CustomContainer>
    </S.Wrapper>
  )
}
export default ServicesHome
