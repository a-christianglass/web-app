import React from "react"
import * as S from "./misc-content.styles.jsx"
import parse from "html-react-parser"
import Grid from "@material-ui/core/Grid"
import ContactForm from "../../components/contact-form/contact-form.component"

const MiscContent = ({ containerMaxWidth, content }) => {
  if (!content) return null
  return (
    <S.Wrapper maxWidth={containerMaxWidth ? containerMaxWidth : false}>
      <Grid container>
        <Grid item sm={12} md={6}>
          <S.TextWrapper>{parse(content)}</S.TextWrapper>
        </Grid>
        <Grid item sm={12} md={6}>
          <S.ContactWrapper>
            <ContactForm />
          </S.ContactWrapper>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}
export default MiscContent
