import React from "react"
import * as S from "./appointment-banner.styles"
import Grid from "@material-ui/core/Grid"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

const AppointmentBanner = ({ color, content, button }) => {
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
    <S.Wrapper bgColor={color}>
      <Grid xs={12}>
        <CustomBgImage img={staticQuery.banner}>
          <S.ContentWrapper>
            {content && <h2>{parse(content)}</h2>}
            {button && <S.Button href={button?.url}>{button?.title}</S.Button>}
          </S.ContentWrapper>
        </CustomBgImage>
      </Grid>
    </S.Wrapper>
  )
}

export default AppointmentBanner
