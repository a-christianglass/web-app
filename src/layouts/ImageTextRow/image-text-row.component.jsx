import React from "react"
import * as S from "./image-text-row.styles"
import { Grid } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"

const ImageTextRow = ({ ...props }) => {
  const { image, content, button, reverse } = { ...props }
  return (
    <S.Wrapper>
      <Grid container direction={reverse && "row-reverse"}>
        <Grid item xs={12} sm={6}>
          <CustomImage
            img={image}
            alt={image.altText}
            className={"LeftImage"}
          />
        </Grid>
        <S.CustomGrid item xs={12} sm={6}>
          <Container>
            <S.RightText>
              {parse(content)}
              <S.Button href={button.url}>{button.title}</S.Button>
            </S.RightText>
          </Container>
        </S.CustomGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default ImageTextRow
