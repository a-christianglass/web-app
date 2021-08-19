import React from "react"
import * as S from "./industries-services.styles"
import { Container, Grid } from "@material-ui/core"
import parse from "html-react-parser"

const IndustriesServices = ({
  color,
  title,
  imageIndustriesServices,
  description,
  button,
  reverse,
  morePadding,
}) => {
  return (
    <S.Wrapper bgColor={color} morePadding={morePadding}>
      <Container>
        <S.ServiceWrapper>
          {title && <h2>{title}</h2>}
          <S.LeftGrid container direction={reverse && "row-reverse"}>
            <Grid item xs={12} md={6}>
              <S.Image img={imageIndustriesServices} />
            </Grid>
            <S.RightGrid item xs={12} md={6} shouldCenter={reverse}>
              <S.ContentWrapper>
                {description.title && <h2>{description.title}</h2>}
                {description.content && (
                  <S.ContentText>{parse(description.content)}</S.ContentText>
                )}
                {button && button.title && (
                  <S.Button href={button?.url}>{button?.title}</S.Button>
                )}
              </S.ContentWrapper>
            </S.RightGrid>
          </S.LeftGrid>
        </S.ServiceWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default IndustriesServices
