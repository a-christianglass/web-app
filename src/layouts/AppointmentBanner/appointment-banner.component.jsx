import React from "react"
import * as S from "./appointment-banner.styles"
import Grid from "@material-ui/core/Grid"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

const AppointmentBanner = ({ ...props }) => {
  const { color, content, button } = { ...props }
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
            <h2>{content}</h2>
            <S.Button href={button && button.url}>
              {button && button.title}
            </S.Button>
          </S.ContentWrapper>
        </CustomBgImage>
      </Grid>
    </S.Wrapper>
  )
}

export default AppointmentBanner
