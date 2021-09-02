import React from "react"
import * as S from "./choices-quote.styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import parse from "html-react-parser"
import QuoteIcon from "../../assets/icons/quote-mark.svg"

const ChoicesQuote = ({
  choicesTitle,
  choicesContent,
  choicesQuote,
  quoteAuthor,
  quoteLocation,
}) => {
  return (
    <S.Wrapper>
      <Container>
        <Grid container>
          <S.CustomGrid item xs={12} md={6}>
            <S.LeftWrapper>
              {choicesTitle && <h2>{choicesTitle}</h2>}
              {choicesContent && (
                <S.ContentText>{parse(choicesContent)}</S.ContentText>
              )}
            </S.LeftWrapper>
          </S.CustomGrid>
          <S.CustomGrid item xs={12} md={6}>
            <S.RightWrapper>
              <QuoteIcon />
              {choicesQuote && <S.QuoteText>{parse(choicesQuote)}</S.QuoteText>}
              {quoteAuthor && <h4>{quoteAuthor}</h4>}
              {quoteLocation && <h5>{quoteLocation}</h5>}
            </S.RightWrapper>
          </S.CustomGrid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default ChoicesQuote
