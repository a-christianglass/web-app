import React, { useState } from "react"
import * as S from "./header-mobile-subitem.styles.jsx"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { navigate } from "gatsby"
import HeaderMobileItem from "../header-mobile-item/header-mobile-item.component"
import Slide from "@material-ui/core/Slide"
import { ItemsWrapper } from "../header-mobile.styles"
import { removeSpecialChar } from "../../../../utils"

const HeaderMobileSubItem = ({ item, handleClose }) => {
  const { url, title, items } = item
  const [isActiveSubItem, setIsActiveSubItem] = useState(false)

  const handleItemClick = () => {
    if (url) {
      navigate(url)
      handleClose()
      return
    }
    setIsActiveSubItem(!isActiveSubItem)
  }

  return (
    <>
      <S.CustomLink onClick={handleItemClick}>
        <span>{removeSpecialChar(title)}</span>
        <KeyboardArrowDownIcon />
      </S.CustomLink>
      {items && items.length > 0 && (
        <Slide direction="left" in={isActiveSubItem} mountOnEnter unmountOnExit>
          <ItemsWrapper style={{ zIndex: "10" }}>
            <S.PrevTitle onClick={() => setIsActiveSubItem(false)}>
              <KeyboardArrowDownIcon />
              {title}
            </S.PrevTitle>
            {items.map(item => (
              <HeaderMobileItem handleClose={handleClose} item={item} />
            ))}
          </ItemsWrapper>
        </Slide>
      )}
    </>
  )
}
export default HeaderMobileSubItem
