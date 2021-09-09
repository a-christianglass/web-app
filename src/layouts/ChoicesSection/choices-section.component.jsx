import React from "react"
import * as S from "./choices-section.styles"
import { Container, Grid } from "@material-ui/core"
import parse from "html-react-parser"
import CustomImage from "../../components/custom-image/custom-image.component"

const ChoicesSection = ({
  rightContentChoicesSection,
  leftContentChoicesSection,
}) => {
  return (
    <S.Wrapper>
      <Container>
        <S.LeftWrapper>
          {leftContentChoicesSection.title && (
            <h2>{leftContentChoicesSection.title}</h2>
          )}

          {leftContentChoicesSection.content && (
            <S.ContentWrapper>
              <S.LeftContentText>
                {parse(leftContentChoicesSection.content)}
              </S.LeftContentText>
            </S.ContentWrapper>
          )}
          <S.QuoteWrapper>
            <S.QuoteImage img="https://admin.a-christianglass.com/wp-content/uploads/2021/08/quotes.png" />
          </S.QuoteWrapper>
          {rightContentChoicesSection && (
            <S.QuoteTextWrapper>
              <S.RightContentText>
                {parse(rightContentChoicesSection)}
              </S.RightContentText>
            </S.QuoteTextWrapper>
          )}
          {leftContentChoicesSection.secondContent && (
            <S.ContentWrapper>
              <S.LeftContentText>
                {parse(leftContentChoicesSection.secondContent)}
              </S.LeftContentText>
            </S.ContentWrapper>
          )}
        </S.LeftWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default ChoicesSection
