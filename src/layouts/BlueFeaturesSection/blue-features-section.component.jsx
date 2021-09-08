import React from "react"
import * as S from "./blue-features-section.styles"
import { Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import theme from "../../theme"
import Container from "@material-ui/core/Container"

const BlueFeaturesSection = ({ imageFeatures, mobileImage, title, cards }) => {
  const isXS = useMediaQuery(theme.breakpoints.down("xs"))
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
      <Grid container>
        <Grid item xs={12} md={4}>
          <S.Image img={isXS ? mobileImage : imageFeatures} />
        </Grid>
        <S.RightGrid item xs={12} md={8}>
          <S.BgImage img={staticQuery.blueBg}>
            <Container>
              <S.RightWrapper>
                {title && <h2>{parse(title)}</h2>}
                <Grid container>
                  {cards.map(({ icon, title, content }, index) => (
                    <S.Card item sm={12} md={6} key={`icon-grid-${index}`}>
                      <S.ContentWrapper>
                        <S.TitleWrapper>
                          {icon && <S.Icon img={icon} />}
                          {title && <h3>{title}</h3>}
                        </S.TitleWrapper>
                        {content && (
                          <S.ContentText>{parse(content)}</S.ContentText>
                        )}
                      </S.ContentWrapper>
                    </S.Card>
                  ))}
                </Grid>
              </S.RightWrapper>
            </Container>
          </S.BgImage>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default BlueFeaturesSection
