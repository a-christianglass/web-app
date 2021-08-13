import React from "react"
import * as S from "./misc-content.styles.jsx"
import parse from "html-react-parser"

const MiscContent = ({ containerMaxWidth, content }) => {
  if (!content) return null
  return (
    <S.Wrapper maxWidth={containerMaxWidth ? containerMaxWidth : false}>
      <S.TextWrapper>{parse(content)}</S.TextWrapper>
    </S.Wrapper>
  )
}
export default MiscContent
