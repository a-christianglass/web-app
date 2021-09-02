import React from "react"
import * as S from "./reasons-section.styles"
import parse from "html-react-parser"
import { Container, Grid } from "@material-ui/core"

const ReasonsSection = ({ title, descriptionReasons, reasons }) => {
  return (
    <S.Wrapper>
      <Container>
        <S.TopTextWrapper>
          <Grid container>
            <Grid item xs={12} md={6}>
              <S.LeftTextWrapper>{title && <h2>{title}</h2>}</S.LeftTextWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
              {descriptionReasons && (
                <S.ContentText>{parse(descriptionReasons)}</S.ContentText>
              )}
            </Grid>
          </Grid>
        </S.TopTextWrapper>
        <Grid container alignItems="flex-start">
          {reasons &&
            reasons.map(({ title, content }, index) => (
              <S.ReasonGrid item xs={12} md={4} key={`feature-${index}`}>
                <S.ReasonWrapper>
                  {title && <S.ReasonTitle>{title}</S.ReasonTitle>}
                  {content && <S.ReasonContent>{content}</S.ReasonContent>}
                </S.ReasonWrapper>
              </S.ReasonGrid>
            ))}
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default ReasonsSection
