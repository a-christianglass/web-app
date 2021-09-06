import React from "react"
import * as S from "./home-hero.styles"
import parse from "html-react-parser"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { Container, Grid, Hidden } from "@material-ui/core"
import ContactForm from "../../components/contact-form/contact-form.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { graphql, useStaticQuery } from "gatsby"

const HomeHero = ({ imageHome, title, subtitle, button }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.HeroWrapper img={imageHome}>
      <Container>
        <S.ContentWrapper>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <S.TextWrapper>
                <Hidden mdDown>
                  <S.LogoImage img={staticQuery.logo} />
                </Hidden>
                {subtitle && <h2>{parse(subtitle)}</h2>}
                {subtitle && <h1>{parse(title)}</h1>}
                <Hidden mdUp>
                  <S.Button href="/contact">Schedule an Appointment</S.Button>
                </Hidden>
              </S.TextWrapper>
            </Grid>
            <Hidden mdDown>
              <Grid style={{ textAlign: "-webkit-right" }} item xs={12} md={5}>
                <ContactForm />
              </Grid>
            </Hidden>
          </Grid>
        </S.ContentWrapper>
      </Container>
    </S.HeroWrapper>
  )
}

export default HomeHero
