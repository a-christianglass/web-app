import React, { useEffect, useState } from "react"
import * as S from "./header-mobile-item.styles.jsx"
import { navigate } from "gatsby"
import { Link } from "@material-ui/core"
import Collapse from "@material-ui/core/Collapse"
import HeaderMobileSubItem from "../header-mobile-subitem/header-mobile-subitem.component"

const HeaderMobileItem = ({ item, handleClose }) => {
  const { sectionTitle, items } = item
  const [url, setUrl] = useState("")
  useEffect(() => {
    if (item && item.url) {
      setUrl(item.url)
    }
  }, [])

  const [isActiveSubItem, setIsActiveSubItem] = useState(false)

  const handleItemClick = () => {
    if (url && !items) {
      navigate(url)
      handleClose()
      return
    }
    setIsActiveSubItem(!isActiveSubItem)
  }

  return (
    <S.Wrapper>
      <Link className="mainItem" onClick={handleItemClick}>
        {sectionTitle}
        {items ? (
          <S.CollapsableArrow className={isActiveSubItem ? "active" : ""} />
        ) : (
          <S.LinkArrow />
        )}
      </Link>

      {items && items.length && (
        <Collapse in={isActiveSubItem}>
          {[...items].map(item => (
            <HeaderMobileSubItem handleClose={handleClose} item={item} />
          ))}
        </Collapse>
      )}
    </S.Wrapper>
  )
}
export default HeaderMobileItem
