import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { Hidden, useScrollTrigger } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import headerItems from "./header.json"
import MegaMenu from "./mega-menu/mega-menu.component"
import MailIcon from "../../assets/icons/blue-mail.svg"
import PhoneIcon from "../../assets/icons/phone-blue.svg"
import parse from "html-react-parser"
import CustomImage from "../custom-image/custom-image.component"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({ isTransparent }) => {
  const [threshold, setTreshold] = useState(100)
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold
  })
  const isDark = scrollTrigger || isTransparent

  const staticQuery = useStaticQuery(graphql`
      query {
          home: file(relativePath: { eq: "logo-white.png" }) {
              childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, quality: 100)
              }
          }
      }
  `)

  return (
    <S.NavWrapper isTransparent={isTransparent}>
      <S.CustomAppBar
        id="mainNav"
        position="fixed"
        elevation={scrollTrigger ? 4 : 0}
      >
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
        <S.MainNav isdark={isDark}>
          <Container>
            <S.MainNavContainer>
              <S.MainItem url="/" className="logo">
                <img src="https://admin-a-christianglass.weareshellshock.com/wp-content/uploads/2021/08/logo-White-1.png" alt="logo" />
              </S.MainItem>
              <S.InnerMainContainer>
                <Hidden smDown>
                  <div>
                    {headerItems.mainItems.map(
                      ({ url, sectionTitle, items }, index) => (
                        <>
                          <S.MainItem key={`title-${index}`} url={url}>
                            {sectionTitle}
                            {items && (
                              <>
                                <S.Arrow className="arrow" />
                                <MegaMenu
                                  sectionTitle={sectionTitle}
                                  items={items}
                                />
                              </>
                            )}
                          </S.MainItem>
                        </>
                      )
                    )}
                  </div>
                </Hidden>
                <S.ButtonWrapper>
                  <S.Button to="/demo">
                    {parse("Schedule an <br>Appointment")}
                  </S.Button>
                </S.ButtonWrapper>
              </S.InnerMainContainer>
            </S.MainNavContainer>
          </Container>
        </S.MainNav>
      </S.CustomAppBar>
    </S.NavWrapper>
  )
}
export default Header
