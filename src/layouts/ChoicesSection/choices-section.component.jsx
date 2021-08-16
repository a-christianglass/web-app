import React from "react"
import * as S from "./choices-section.styles"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"
import CustomImage from "../../components/custom-image/custom-image.component"

const ChoicesSection = ({ rightContentChoicesSection, leftContentChoicesSection }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <S.LeftGrid item xs={12} md={6}>
          <S.LeftWrapper>
            {leftContentChoicesSection.title && <h2>{leftContentChoicesSection.title}</h2>}
            {leftContentChoicesSection.content && (
              <S.LeftContentText>
                {parse(leftContentChoicesSection.content)}
              </S.LeftContentText>
            )}
          </S.LeftWrapper>
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={6}>
          <S.RightWrapper>
            <S.QuoteWrapper>
            <S.QuoteImage img="https://admin-a-christianglass.weareshellshock.com/wp-content/uploads/2021/08/quotes.png"/>
            </S.QuoteWrapper>
            {rightContentChoicesSection && (
              <S.RightContentText>{parse(rightContentChoicesSection)}</S.RightContentText>
            )}
          </S.RightWrapper>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default ChoicesSection
