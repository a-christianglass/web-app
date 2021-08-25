import React from "react"
import * as S from "./products-home.styles"
import { Container, Grid, Typography } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"

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
              {leftContentProducts.button &&
                leftContentProducts.button.title && (
                  <CustomButton>
                    {leftContentProducts.button.title}
                  </CustomButton>
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
                  <CustomButton>
                    {rightContentProducts.button.title}
                  </CustomButton>
                )}
            </S.TextWrapper>
          </Container>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default ProductsHome
