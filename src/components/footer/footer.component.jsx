import React from "react"

import * as S from "./footer.styles"
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import LinkedInIcon from "../../assets/icons/linkedin.svg"
import PinterestIcon from "../../assets/icons/pinterest.svg"
import YouTubeIcon from "../../assets/icons/youtube.svg"
import MailIcon from "../../assets/icons/mail.svg"
import LocationIcon from "../../assets/icons/location.svg"
import YelpIcon from "../../assets/icons/yelp.svg"
import Rectangle from "../../assets/icons/Rectangle.svg"
import Separator from "../../assets/icons/separator.svg"
import Container from "@material-ui/core/Container"
import parse from "html-react-parser"
import { Grid } from "@material-ui/core"

const Footer = ({ className }) => {
  return (
    <S.Wrapper>
      <S.FooterWrapper>
        <Grid container>
          <Grid xs={12} md={12} justifyContent="center" alignItems="center">
            <S.LogoWrapper>
              <img
                src="https://admin-a-christianglass.weareshellshock.com/wp-content/uploads/2021/08/logo-White.png"
                alt="ACG logo"
              />
            </S.LogoWrapper>
          </Grid>
          <S.BottomGrid container xs={12} md={12}>
            <S.LeftGrid xs={12} md={6}>
              <Grid container>
                <S.ColumnGrid xs={4}>
                  <span>Products</span>
                  <a href="/">Windows</a>
                  <a href="/">Doors</a>
                  <a href="/">Showers</a>
                  <a href="/">Railway</a>
                </S.ColumnGrid>
                <S.ColumnGrid xs={4}>
                  <span>Industries</span>
                  <a href="/">Windows</a>
                  <a href="/">Doors</a>
                </S.ColumnGrid>
                <S.ColumnGrid xs={4}>
                  <span>About</span>
                  <a href="/">News</a>
                  <a href="/">Projects</a>
                </S.ColumnGrid>
              </Grid>
            </S.LeftGrid>

            <S.RightGrid item xs={12} md={6}>
              <a href="/">Call Us: (561) 278-3385</a>
              <S.LocationWrapper>
                <LocationIcon />
                <p>
                  {parse("925 S. Congress Avenue<br>Delray Beach, FL 33445")}
                </p>
              </S.LocationWrapper>
              <S.MailWrapper>
                <MailIcon />
                <a href="/">info@a-christianglass.com</a>
              </S.MailWrapper>
              <h3>FollowUs</h3>
              <S.IconWrapper>
                <a href="#yt" target="_blank">
                  <YouTubeIcon />
                </a>{" "}
                <a href="#fb" target="_blank">
                  <FacebookIcon />
                </a>
                <a href="#ins" target="_blank">
                  <InstagramIcon />
                </a>
                <a href="#yelp" target="_blank">
                  <YelpIcon />
                </a>
                <a href="#pint" target="_blank">
                  <PinterestIcon />
                </a>
                <a href="#lind" target="_blank">
                  <LinkedInIcon />
                </a>
              </S.IconWrapper>
            </S.RightGrid>
          </S.BottomGrid>
          <S.LastGrid container>
            <S.BBBGrid xs={12} md={6}>
              <img
                src="https://admin-a-christianglass.weareshellshock.com/wp-content/uploads/2021/08/BBB-seal-footer.png"
                alt="BBC Logo"
              />
            </S.BBBGrid>
            <S.FaqGrid xs={12} md={6}>
              <a href="#">FAQ</a>
              <S.Line />
              <a href="#">Privacy Policy</a>
              <S.Line />
              <a href="#">EQE</a>
            </S.FaqGrid>
          </S.LastGrid>
        </Grid>
      </S.FooterWrapper>
    </S.Wrapper>
  )
}

export default Footer
