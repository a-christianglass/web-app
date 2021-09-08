import React from "react"
import { Grid } from "@material-ui/core"
import * as S from "./features-row.styles"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"

const FeaturesRow = ({
  imageFeaturesRow,
  contentFeaturesRow,
  reverseFeatures,
}) => {
  return (
    <S.Wrapper>
      <Container>
        {contentFeaturesRow.title && (
          <S.Title>{parse(contentFeaturesRow.title)}</S.Title>
        )}
        <Grid container direction={reverseFeatures && "row-reverse"}>
          <S.LeftGrid item xs={12} md={6}>
            <S.Image img={imageFeaturesRow} />
          </S.LeftGrid>
          <S.RightGrid item xs={12} md={6}>
            <S.ContentWrapper>
              {contentFeaturesRow.subtitle && (
                <S.Subtitle>{parse(contentFeaturesRow.subtitle)}</S.Subtitle>
              )}
              {contentFeaturesRow.features &&
                contentFeaturesRow.features.map(({ feature }, index) => (
                  <S.FeatureWrapper key={`feature-${index}`}>
                    <S.ContentText>{parse(feature)}</S.ContentText>
                  </S.FeatureWrapper>
                ))}
            </S.ContentWrapper>
          </S.RightGrid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default FeaturesRow
