/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo/seo.component"
import Header from "../components/header/header.component"
import { AppContainer } from "../styles/app.styles"
import Footer from "./footer/footer.component"

const Layout = ({ seo, children, isTransparent, isWhite }) => {
  return (
    <>
      {seo && <SEO data={seo} />}
      <Header isTransparent={isTransparent} isWhite={isWhite} />
      <AppContainer isTransparent={isTransparent} isWhite={isWhite}>
        {children}
      </AppContainer>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
