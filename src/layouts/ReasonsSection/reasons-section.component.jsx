import React from "react"
import * as S from "./reasons-section.styles"
import parse from "html-react-parser"
import { Grid } from "@material-ui/core"

const ReasonsSection = ({ title, descriptionReasons, reasons }) => {
  return (
    <S.Wrapper>
      <S.TopGrid container>
        <S.LeftGrid item xs={12} md={6}>
          <S.LeftTextWrapper>{title && <h2>{title}</h2>}</S.LeftTextWrapper>
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={6}>
          <S.RightTextWrapper>
            {descriptionReasons && (
              <S.ContentText>{parse(descriptionReasons)}</S.ContentText>
            )}
          </S.RightTextWrapper>
        </S.RightGrid>
      </S.TopGrid>
      <Grid container>
        {reasons &&
          reasons.map(({ title, content }, index) => (
            <S.ReasonGrid
              item
              xs={12}
              md={6}
              key={`feature-${index}`}
              shouldCenter={index % 2 === 0}
            >
              <S.ReasonWrapper>
                {title && <S.ReasonTitle>{title}</S.ReasonTitle>}
                {content && <S.ReasonContent>{content}</S.ReasonContent>}
              </S.ReasonWrapper>
            </S.ReasonGrid>
          ))}
      </Grid>
    </S.Wrapper>
  )
}

export default ReasonsSection
