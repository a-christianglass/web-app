import React from "react"
import * as S from "./choices-section.styles"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"

const ChoicesSection = ({ rightContent, leftContent }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <S.LeftGrid item xs={12} md={6}>
          <S.LeftWrapper>
            {leftContent.title && <h2>{leftContent.title}</h2>}
            {leftContent.content && (
              <S.LeftContentText>
                {parse(leftContent.content)}
              </S.LeftContentText>
            )}
          </S.LeftWrapper>
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={6}>
          <S.RightWrapper>
            {rightContent && (
              <S.RightContentText>{rightContent}</S.RightContentText>
            )}
          </S.RightWrapper>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default ChoicesSection
