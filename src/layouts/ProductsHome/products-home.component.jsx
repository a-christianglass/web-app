import React from "react"
import * as S from "./products-home.styles"
import { Container, Grid, Typography } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomLink from "../../components/custom-link/custom-link.component"

const ProductsHome = ({ leftContentProducts, rightContentProducts }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md={6}>
          <S.ProductImage img={leftContentProducts.image} />
          <Container>
            <S.TextWrapper>
              <h3>{leftContentProducts.title}</h3>
              <Typography>{leftContentProducts.content}</Typography>
              {leftContentProducts.button && leftContentProducts.button.title && (
                <CustomLink url={leftContentProducts.button.url}>
                  <CustomButton>
                    {leftContentProducts.button.title}
                  </CustomButton>
                </CustomLink>
              )}
            </S.TextWrapper>
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <S.ProductImage img={rightContentProducts.image} />
          <Container>
            <S.TextWrapper>
              <h3>{rightContentProducts.title}</h3>
              <Typography>{rightContentProducts.content}</Typography>
              {rightContentProducts.button &&
                rightContentProducts.button.title && (
                  <CustomLink url={rightContentProducts.button.url}>
                    <CustomButton>
                      {rightContentProducts.button.title}
                    </CustomButton>
                  </CustomLink>
                )}
            </S.TextWrapper>
          </Container>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default ProductsHome
