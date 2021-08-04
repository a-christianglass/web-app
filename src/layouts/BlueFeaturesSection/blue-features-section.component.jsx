import React from "react"
import * as S from "./blue-features-section.styles"
import { Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import CustomImage from "../../components/custom-image/custom-image.component"
const BlueFeaturesSection = ({ image, title, cards }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      blueBg: file(relativePath: { eq: "blue-big.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <Grid xs={4}>
        <CustomImage img={image} />
      </Grid>
      <Grid xs={8}>
        <S.ImageWrapper img={staticQuery.blueBg}>
          <S.ContentWrapper>
            <h2>{parse(title)}</h2>
            <S.CardsGrid container sm={12} spacing={2}>
              {cards.map(({ icon, title, content }, index) => (
                <S.FeatureCard item sm={6} key={`icon-grid-${index}`}>
                  <S.Icon img={icon} />
                  <S.FeaturedTextWrapper>
                    <h3>{title}</h3>
                    <h4>{content}</h4>
                  </S.FeaturedTextWrapper>
                </S.FeatureCard>
              ))}
            </S.CardsGrid>
          </S.ContentWrapper>
        </S.ImageWrapper>
      </Grid>
    </S.Wrapper>
  )
}

export default BlueFeaturesSection
