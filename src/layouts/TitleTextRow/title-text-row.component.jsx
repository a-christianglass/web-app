import React from "react"
import * as S from "./title-text-row.styles"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"

const TitleTextRow = ({ title, content }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <S.LeftGrid item xs={12} md={6}>
          <S.LeftTextWrapper>{title && <h2>{title}</h2>}</S.LeftTextWrapper>
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={6}>
          <S.RightTextWrapper>
            {content && <S.ContentText>{parse(content)}</S.ContentText>}
          </S.RightTextWrapper>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default TitleTextRow
