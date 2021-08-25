import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { Hidden, useScrollTrigger } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import headerItems from "./header.json"
import MegaMenu from "./mega-menu/mega-menu.component"
import MailIcon from "../../assets/icons/blue-mail.svg"
import PhoneIcon from "../../assets/icons/phone-blue.svg"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"
import CustomLink from "../custom-link/custom-link.component"
import HeaderMobile from "./header-mobile/header-mobile.component"
import Fade from "@material-ui/core/Fade"
import CloseIcon from "@material-ui/icons/Close"
import MenuIcon from "@material-ui/icons/Menu"

const Header = ({ isTransparent, isWhite, isHomePage }) => {
  const [threshold, setTreshold] = useState(100)
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  console.log("isHomePage", isHomePage)
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold,
  })
  const isDark = scrollTrigger || isTransparent

  const handleToggleMenu = () => {
    setIsActiveMenu(!isActiveMenu)
  }

  const staticQuery = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  const logoUrl = isWhite
    ? "https://admin-a-christianglass.weareshellshock.com/wp-content/uploads/2021/08/blueLogo.png"
    : "https://admin-a-christianglass.weareshellshock.com/wp-content/uploads/2021/08/logo-White-1.png"
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
        <S.MainNav isdark={isDark} isWhite={isWhite}>
          <Container>
            <S.MainNavContainer>
              <S.MainItem url="/" className="logo">
                <img src={logoUrl} alt="logo" />
              </S.MainItem>
              <S.InnerMainContainer>
                <Hidden smDown>
                  <div>
                    {headerItems.mainItems.map(
                      ({ url, sectionTitle, items, removeTopLine }, index) => (
                        <>
                          <S.MainItem
                            removeTopLine={removeTopLine}
                            isWhite={isWhite}
                            key={`title-${index}`}
                            url={url}
                          >
                            {sectionTitle}
                            {items && (
                              <>
                                <S.Arrow isWhite={isWhite} className="arrow" />
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
                <div style={{ display: "flex" }}>
                  <S.ButtonWrapper>
                    <S.Link url="/contact">
                      <S.Button isdark={isDark} className="navButtom" isHomePage={isHomePage}>
                        {parse("Schedule an <br>Appointment")}
                      </S.Button>
                    </S.Link>
                    <Hidden mdUp>
                      <S.MenuButton onClick={handleToggleMenu}>
                        {isActiveMenu ? <CloseIcon /> : <MenuIcon />}
                      </S.MenuButton>
                    </Hidden>
                  </S.ButtonWrapper>
                </div>
              </S.InnerMainContainer>
            </S.MainNavContainer>
          </Container>
        </S.MainNav>
      </S.CustomAppBar>
      <Fade in={isActiveMenu} unmountOnExit mountOnEnter>
        <HeaderMobile items={headerItems.mainItems} />
      </Fade>
    </S.NavWrapper>
  )
}
export default Header
