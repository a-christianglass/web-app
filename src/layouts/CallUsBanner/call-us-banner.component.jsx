import React from "react"
import * as S from "./call-us-banner.styles"
import PhoneIcon from "../../assets/icons/phone.svg"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import parse from "html-react-parser"
import Grid from "@material-ui/core/Grid";

const CallUsBanner = ({ imageCallBanner, title, number, content }) => {
  // No content == more padding in TextWrapper and text align: left on Content Wrapper
  const morePadding = content === undefined
  return (
    <S.Wrapper>
      <CustomBgImage img={imageCallBanner}>
          <Grid container>
              <Grid item xs={12} md={6}/>
              <Grid item xs={12} md={6}>
                  <S.TextWrapper morePadding={morePadding}>
                      <S.ContentWrapper textAlign={morePadding}>
                          {title && <h2>{title}</h2>}
                          {number && (
                              <a href="tel:+5612783385">
                                  <S.NumberWrapper>
                                      <PhoneIcon />
                                      <span>{number}</span>
                                  </S.NumberWrapper>
                              </a>
                          )}
                          {content && <h3>{parse(content)}</h3>}
                      </S.ContentWrapper>
                  </S.TextWrapper>
              </Grid>
          </Grid>

        {/*<S.TextWrapper morePadding={morePadding}>*/}
        {/*  <S.ContentWrapper textAlign={morePadding}>*/}
        {/*    {title && <h2>{title}</h2>}*/}
        {/*    {number && (*/}
        {/*      <a href="tel:+5612783385">*/}
        {/*        <S.NumberWrapper>*/}
        {/*          <PhoneIcon />*/}
        {/*          <span>{number}</span>*/}
        {/*        </S.NumberWrapper>*/}
        {/*      </a>*/}
        {/*    )}*/}
        {/*    {content && <h3>{parse(content)}</h3>}*/}
        {/*  </S.ContentWrapper>*/}
        {/*</S.TextWrapper>*/}
      </CustomBgImage>
    </S.Wrapper>
  )
}

export default CallUsBanner
