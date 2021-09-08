import React from "react"
import * as S from "./contact-info.styles"
import { Container, Grid } from "@material-ui/core"
import PhoneIcon from "../../assets/icons/phone-blue.svg"
import MailIcon from "../../assets/icons/blue-mail.svg"
import LocationIcon from "../../assets/icons/location-blue.svg"
import parse from "html-react-parser"

const ContactInfo = ({}) => {
  return (
    <S.Wrapper>
      <Container>
        <h2>Get in Touch</h2>
      </Container>
      <Grid container>
        <S.ItemGrid item xs={12} md={4}>
          <S.ContentWrapper>
            <PhoneIcon />
            <a href="tel:+15612783385">(561) 278-3385</a>
          </S.ContentWrapper>
        </S.ItemGrid>
        <S.ItemGrid item xs={12} md={4}>
          <S.ContentWrapper>
            <MailIcon />
            <a href="mailto:info@a-christianglass.com">
              info@a-christianglass.com
            </a>
          </S.ContentWrapper>
        </S.ItemGrid>
        <S.ItemGrid item xs={12} md={4}>
          <S.LocationWrapper>
            <LocationIcon />
            <span>
              {parse("925 S. Congress Avenue<br>Delray Beach, FL 33445")}
            </span>
          </S.LocationWrapper>
        </S.ItemGrid>
      </Grid>
      <S.MapGrid>
        <S.Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.2123475675508!2d-80.09418408448316!3d26.448883283329447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e2affcc12915%3A0xc512f6171fb2101c!2sA-Christian%20Glass!5e0!3m2!1sen!2sus!4v1631138366667!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        />
      </S.MapGrid>
    </S.Wrapper>
  )
}

export default ContactInfo
