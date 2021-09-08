import React from "react"
import * as S from "./works-section.styles"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"
import Container from "@material-ui/core/Container"

const WorksSection = ({ title, descriptionWorksSection, works }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      residentialBg: file(relativePath: { eq: "residential-bg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.BgImageWrapper img={staticQuery.residentialBg}>
        <Container>
          <S.WorksWrapper>
            <S.TopGrid container>
              <S.LeftGrid item xs={12} md={6}>
                <S.LeftWrapper>{title && <h2>{title}</h2>}</S.LeftWrapper>
              </S.LeftGrid>
              <Grid item xs={12} md={6}>
                <S.RightWrapper>
                  {descriptionWorksSection && (
                    <S.DescriptionText>
                      {parse(descriptionWorksSection)}
                    </S.DescriptionText>
                  )}
                </S.RightWrapper>
              </Grid>
            </S.TopGrid>
            <Grid container>
              {works &&
                works.map(({ description, logo }, index) => (
                  <S.WorkGrid item xs={12} md={6} key={`feature-${index}`}>
                    <S.WorkWrapper>
                      {logo && <S.Logo img={logo} />}
                      {description && (
                        <S.WorkDescription>
                          {parse(description)}
                        </S.WorkDescription>
                      )}
                    </S.WorkWrapper>
                  </S.WorkGrid>
                ))}
            </Grid>
          </S.WorksWrapper>
        </Container>
      </S.BgImageWrapper>
    </S.Wrapper>
  )
}

export default WorksSection
