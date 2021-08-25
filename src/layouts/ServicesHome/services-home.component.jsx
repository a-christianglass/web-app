import React from "react"
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
  return (
    <S.Wrapper>
      <S.CustomContainer>
        <Grid container spacing={2}>
          <S.GridCard item xs={12} md={4}>
            <S.LeftContentWrapper>
              {leftTag && <S.TagText>{leftTag}</S.TagText>}
              {leftTitle && (
                <h3 style={{ paddingBottom: "1em" }}>{parse(leftTitle)}</h3>
              )}
              {leftContent && <Typography>{leftContent}</Typography>}
            </S.LeftContentWrapper>
          </S.GridCard>
          <S.GridCard item xs={12} md={4}>
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
          </S.GridCard>

          <S.GridCard item xs={12} md={4}>
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
                  <ArrowForward style={{ color: "white" }} className="arrow" />
                </S.CardLink>
              )}
            </S.ContentWrapper>
          </S.GridCard>
        </Grid>
      </S.CustomContainer>
    </S.Wrapper>
  )
}
export default ServicesHome
