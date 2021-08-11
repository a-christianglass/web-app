import React from "react"
import { Grid } from "@material-ui/core"
import * as S from "./features-row.styles"
import parse from "html-react-parser"

const FeaturesRow = ({ image, content, reverse }) => {
  return (
    <S.Wrapper>
      <Grid container direction={reverse && "row-reverse"}>
        <S.LeftGrid item xs={12} md={6}>
          <S.Image img={image} />
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={6}>
          <S.ContentWrapper>
            {content.title && <h2>{parse(content.title)}</h2>}
            {content.features &&
              content.features.map(({ feature }, index) => (
                <S.FeatureWrapper key={`feature-${index}`}>
                  <S.ContentText>{parse(feature)}</S.ContentText>
                </S.FeatureWrapper>
              ))}
          </S.ContentWrapper>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default FeaturesRow
