import React from "react"
import * as S from "./services-home.styles"
import parse from "html-react-parser"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import Building from "../../assets/icons/building.svg"
import Home from "../../assets/icons/home.svg"
import CustomLink from "../../components/custom-link/custom-link.component"
import { GridCard } from "./services-home.styles"

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
  return (
    <SectionWrapper>
      <Container>
        <Grid container spacing={2}>
          <S.GridCard item xs={12} md={4}>
            {leftTag && <S.TagText>{leftTag}</S.TagText>}
            {leftTitle && <h3 style={{ paddingBottom: "1em" }}>{leftTitle}</h3>}
            {leftContent && <Typography>{leftContent}</Typography>}
          </S.GridCard>
          <S.GridCard item xs={12} md={4}>
            <S.ContentWrapper style={{ backgroundColor: "#EAF2F6" }}>
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
                <S.CardLink style={{ color: "#0D5C80" }}>
                  {centerLink.title}
                </S.CardLink>
              )}
            </S.ContentWrapper>
          </S.GridCard>

          <S.GridCard item xs={12} md={4}>
            <S.ContentWrapper style={{ backgroundColor: "#1593CD" }}>
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
                <S.CardLink style={{ color: "white" }}>
                  {rightLink.title}
                </S.CardLink>
              )}
            </S.ContentWrapper>
          </S.GridCard>
        </Grid>
      </Container>
    </SectionWrapper>
  )
}
export default ServicesHome
