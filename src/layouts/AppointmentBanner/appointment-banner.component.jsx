import React from "react"
import * as S from "./appointment-banner.styles"
import Grid from "@material-ui/core/Grid"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import Container from "@material-ui/core/Container"

const AppointmentBanner = ({ color, content, button, haveTopPadding }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  return (
    <S.Wrapper bgColor={color} haveTopPadding={haveTopPadding}>
      <Container>
        <Grid xs={12}>
          <CustomBgImage img={staticQuery.banner}>
            <S.ContentWrapper>
              {content && <h2>{parse(content)}</h2>}
              {button && (
                <S.Button href={button?.url}>{button?.title}</S.Button>
              )}
            </S.ContentWrapper>
          </CustomBgImage>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default AppointmentBanner
