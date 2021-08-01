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

const Footer = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <S.LogoWrapper xs={12}>
        <h2>ACG ICON</h2>
      </S.LogoWrapper>
      <S.SeparatorWrapper>
        <Separator />
      </S.SeparatorWrapper>
      <S.LinksWrapper>
        <S.ProductsWrapper>
          <S.LinksContainer>
            <h3>Products</h3>
            <a href="#">Windows</a>
            <a href="#">Doors</a>
            <a href="#">Showers</a>
            <a href="#">Railway</a>
          </S.LinksContainer>{" "}
          <S.LinksContainer>
            <h3>Industries</h3>
            <a href="#">Residential</a>
            <a href="#">Commercial</a>
          </S.LinksContainer>{" "}
          <S.LinksContainer>
            <h3>About</h3>
            <a href="#">News</a>
            <a href="#">Projects</a>
          </S.LinksContainer>
        </S.ProductsWrapper>{" "}
        <S.InfoWrapper>
          <S.ContactWrapper>
            <span>Call Us: </span>
            <a href="#">(561) 278-3385</a>
          </S.ContactWrapper>
          <S.LocationWrapper>
            <LocationIcon />
            <p>925 S. Congress AvenueDelray Beach, FL 33445</p>
          </S.LocationWrapper>
          <S.MailWrapper>
            <MailIcon />
            <a href="">info@a-christianglass.com</a>
          </S.MailWrapper>
          <S.SocialIconsWrapper>
            <h3>Follow Us</h3>
            <S.IconRow>
              <S.Logo>
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
              </S.Logo>
            </S.IconRow>
          </S.SocialIconsWrapper>
          <S.FaqWrapper>
            <a href="#">FAQ</a>
            <Rectangle />
            <a href="#">Privacy Policy</a>
            <Rectangle />
            <a href="#">EQUE</a>
          </S.FaqWrapper>
        </S.InfoWrapper>
      </S.LinksWrapper>
    </S.Wrapper>
  )
}

export default Footer
