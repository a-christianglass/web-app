import React from "react"
import * as S from "./call-us-banner.styles"
import PhoneIcon from "../../assets/icons/phone.svg"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import parse from "html-react-parser"
import Grid from "@material-ui/core/Grid"
import theme from "../../theme"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const CallUsBanner = ({
  imageCallBanner,
  mobileImageCallBanner,
  title,
  number,
  content,
}) => {
  // No content == more padding in TextWrapper and text align: left on Content Wrapper
  const morePadding = content === undefined
  const isMD = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <S.Wrapper>
      {!isMD ? (
        <CustomBgImage img={imageCallBanner}>
          <Grid container>
            <Grid item xs={12} md={6} />
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
        </CustomBgImage>
      ) : (
        <Grid container direction="column">
          <Grid item>
            <S.MobileBgImage img={mobileImageCallBanner}>
              <S.MobileTextWrapper>
                {title && <h2>{title}</h2>}
              </S.MobileTextWrapper>
            </S.MobileBgImage>
          </Grid>
          <Grid item>
            <S.MobileContentWrapper>
              {number && (
                <a href="tel:+5612783385">
                  <S.NumberWrapper>
                    <PhoneIcon />
                    <span>{number}</span>
                  </S.NumberWrapper>
                </a>
              )}
              {content && <h3>{parse(content)}</h3>}
            </S.MobileContentWrapper>
          </Grid>
        </Grid>
      )}
    </S.Wrapper>
  )
}

export default CallUsBanner
