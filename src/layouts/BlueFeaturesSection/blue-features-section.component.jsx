import React from "react"
import * as S from "./blue-features-section.styles"
import { Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomTypography from "../../components/custom-typography/custom-typography.component"
const BlueFeaturesSection = ({ image, title }) => {
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
          </S.ContentWrapper>
        </S.ImageWrapper>
      </Grid>
    </S.Wrapper>
  )
}

export default BlueFeaturesSection
