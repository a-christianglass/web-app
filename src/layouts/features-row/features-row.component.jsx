import React from "react"
import { Grid } from "@material-ui/core"
import * as S from "./features-row.styles"
import parse from "html-react-parser"

const FeaturesRow = ({ imageFeaturesRow, contentFeaturesRow, reverse }) => {
  return (
    <S.Wrapper>
      <Grid container direction={reverse && "row-reverse"}>
        <S.LeftGrid item xs={12} md={6}>
          <S.Image img={imageFeaturesRow} />
        </S.LeftGrid>
        <S.RightGrid item xs={12} md={6}>
          <S.ContentWrapper>
            {contentFeaturesRow.title && <h2>{parse(contentFeaturesRow.title)}</h2>}
            {contentFeaturesRow.features &&
            contentFeaturesRow.features.map(({ feature }, index) => (
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
