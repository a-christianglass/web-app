import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { useScrollTrigger } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import MailIcon from "../../assets/icons/blue-mail.svg"
import PhoneIcon from "../../assets/icons/phone-blue.svg"

const Header = () => {
  const scrollTrigger = useScrollTrigger()

  return (
    <S.CustomAppBar position="fixed" elevation={scrollTrigger ? 4 : 0}>
      <S.TopNav>
        <Container>
          <S.InnerTopContainer>
            <S.TopItem href="mailto:info@a-christianglass.com">
              <S.EmailWrapper>
                <MailIcon />
                info@a-christianglass.com
              </S.EmailWrapper>
            </S.TopItem>
            <S.TopItem href="tel:+5612783385">
              <S.PhoneWrapper>
                <PhoneIcon />
                (561) 278-3385
              </S.PhoneWrapper>
            </S.TopItem>
          </S.InnerTopContainer>
        </Container>
      </S.TopNav>
    </S.CustomAppBar>
  )
}
export default Header
