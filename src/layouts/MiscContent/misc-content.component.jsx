import React from "react"
import * as S from "./misc-content.styles.jsx"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"

const MiscContent = ({ containerMaxWidth, content }) => {
  if (!content) return null
  return (
    <S.Wrapper maxWidth={containerMaxWidth ? containerMaxWidth : false}>
      <S.ContentWrapper>
        <S.TextWrapper>{parse(content)}</S.TextWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
export default MiscContent
