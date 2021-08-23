import React, { useState } from "react"
import * as S from "./header-mobile.styles.jsx"
import HeaderMobileItem from "./header-mobile-item/header-mobile-item.component"
const HeaderMobile = ({ items, children }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  return (
    <S.ItemsWrapper id="mobileItemsWrapper">
      {children}
      {items.map(item => (
        <HeaderMobileItem
          handleClose={() => setIsActiveMenu(false)}
          item={item}
        />
      ))}
    </S.ItemsWrapper>
  )
}
export default HeaderMobile
