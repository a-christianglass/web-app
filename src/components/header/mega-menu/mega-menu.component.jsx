import React from "react"
import * as S from "./mega-menu.styles.jsx"

const MegaMenu = ({ title, items }) => {
  return (
    <S.Wrapper>
      <S.ItemsGrid container>
        <S.ItemsCol item xs={12} sm={12}>
          <S.TitleWrapper>
            <S.Title>{title}</S.Title>
          </S.TitleWrapper>
        </S.ItemsCol>
      </S.ItemsGrid>
    </S.Wrapper>
  )
}
export default MegaMenu
