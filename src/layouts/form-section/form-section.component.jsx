import React, { useState } from "react"
import * as S from "./form-section.styles"

import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"
import ContactForm from "../../components/contact-form/contact-form.component"

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
              <S.RightGrid xs={12} md={6}>
                <ContactForm />
              </S.RightGrid>
            </Grid>
          </S.ContentWrapper>
        </CustomBgImage>
      </S.Wrapper>
    </>
  )
}
export default FormSection
