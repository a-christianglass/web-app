import React, { useState } from "react"
import * as S from "./form-section.styles"

import { Grid } from "@material-ui/core"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"
import ContactForm from "../../components/contact-form/contact-form.component"
import Container from "@material-ui/core/Container"

const FormSection = ({ contentFormSection, callText, number }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      formBg: file(relativePath: { eq: "form-bg.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <>
      <S.Wrapper>
        <CustomBgImage img={staticQuery.formBg}>
          <Container>
            <S.ContentWrapper>
              <Grid container spacing={3}>
                <S.LeftGrid xs={12} md={6}>
                  <S.LeftWrapper>
                    {contentFormSection && <h2>{parse(contentFormSection)}</h2>}
                    <S.NumberWrapper>
                      {callText && <span>{callText}</span>}
                      {number && <a href="/">{number}</a>}
                    </S.NumberWrapper>
                  </S.LeftWrapper>
                </S.LeftGrid>
                <S.RightGrid
                  style={{ textAlign: "-webkit-right" }}
                  xs={12}
                  md={6}
                >
                  <Container>
                    <ContactForm />
                  </Container>
                </S.RightGrid>
              </Grid>
            </S.ContentWrapper>
          </Container>
        </CustomBgImage>
      </S.Wrapper>
    </>
  )
}
export default FormSection
