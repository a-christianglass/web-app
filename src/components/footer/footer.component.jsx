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

const Footer = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <S.GrayContainer />
      <S.ExperienceWrapper>
        <S.ExperienceTextWrapper>
          <S.ExperienceContent>
            <h3>A-Christian Glass</h3>
            <h4>Experience Matters</h4>
            <p>
              Our experienced installation team takes precise measurements so
              your new windows and doors are a perfect fit. We are meticulous to
              ensure you are 100% satisfied with your new impact resistant
              windows and doors.
            </p>
            <S.Button>Schedule an Appointment</S.Button>
          </S.ExperienceContent>
        </S.ExperienceTextWrapper>
      </S.ExperienceWrapper>
      <S.FooterContainer>
        <S.LogoWrapper xs={12}>
          <img
            src="https://admin-a-christianglass.weareshellshock.com/wp-content/uploads/2021/08/logo-White.png"
            alt="ACG logo"
          />
        </S.LogoWrapper>
        <S.SeparatorWrapper>
          <Separator />
        </S.SeparatorWrapper>
        <S.LinksWrapper>
          <S.LeftContainer>
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
          </S.LeftContainer>
          <Container>
            <S.InfoWrapper>
              <S.ContactWrapper>
                <span>Call Us: </span>
                <a href="#">(561) 278-3385</a>
              </S.ContactWrapper>
              <S.LocationWrapper>
                <LocationIcon />
                {parse(
                  `<p>925 S. Congress Avenue<br>Delray Beach, FL 33445</p>`
                )}
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
            </S.InfoWrapper>
          </Container>
        </S.LinksWrapper>
        <S.SeparatorWrapper>
          <Separator />
        </S.SeparatorWrapper>
        <S.FaqGrid>
          <img
            src="https://admin-a-christianglass.weareshellshock.com/wp-content/uploads/2021/08/BBB-seal-footer.png"
            alt="BBC Logo"
          />
          <S.FaqWrapper>
            <a href="#">FAQ</a>
            <Rectangle />
            <a href="#">Privacy Policy</a>
            <Rectangle />
            <a href="#">EQE</a>
          </S.FaqWrapper>
        </S.FaqGrid>
      </S.FooterContainer>
    </S.Wrapper>
  )
}

export default Footer
