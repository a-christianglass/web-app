import React from "react"
import * as S from "./industries-services.styles"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"

const IndustriesServices = ({
  title,
  image,
  description,
  haveAButton,
  button,
  reverse,
}) => {
  return (
    <S.Wrapper>
      <S.ServiceWrapper>
        {title && <h2>{title}</h2>}
        <Grid container direction={reverse && "row-reverse"}>
          <Grid item xs={12} md={6}>
            <S.Image img={image} />
          </Grid>
          <S.RightGrid item xs={12} md={6} shouldCenter={reverse}>
            <S.ContentWrapper>
              {description.title && <h2>{description.title}</h2>}
              {description.content && (
                <S.ContentText>{parse(description.content)}</S.ContentText>
              )}
              {haveAButton && (
                <S.Button href={button?.url}>{button?.title}</S.Button>
              )}
            </S.ContentWrapper>
          </S.RightGrid>
        </Grid>
      </S.ServiceWrapper>
    </S.Wrapper>
  )
}

export default IndustriesServices
