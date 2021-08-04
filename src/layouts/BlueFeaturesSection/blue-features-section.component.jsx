import React from "react"
import * as S from "./blue-features-section.styles"
import { Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
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
        {image && <S.LeftImage img={image} alt={image.altText} />}
      </Grid>
      <Grid xs={8}>
        <S.ImageWrapper img={staticQuery.blueBg}>
          <S.ContentWrapper>
            {title && <h2>{parse(title)}</h2>}
            <S.CardsGrid container sm={12} spacing={2}>
              {cards.map(({ icon, title, content }, index) => (
                <S.FeatureCard item sm={6} key={`icon-grid-${index}`}>
                  {icon && <S.Icon img={icon} />}
                  <S.FeaturedTextWrapper>
                    {title && <h3>{title}</h3>}
                    {content && <h4>{content}</h4>}
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
