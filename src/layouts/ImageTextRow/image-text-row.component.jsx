import React from "react"
import * as S from "./image-text-row.styles"
import { Grid } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"

const ImageTextRow = ({ image, content, button, reverse, contained }) => {
  return (
    <S.Wrapper>
      <S.RowGrid
        container
        direction={reverse && "row-reverse"}
        contained={contained}
      >
        <Grid item xs={12} sm={6}>
          <CustomImage img={image} alt={"alt"} className={"LeftImage"} />
        </Grid>
        <S.CustomGrid item xs={12} sm={6}>
          <Container>
            {content && (
              <S.RightText>
                {parse(content)}
                {button && (
                  <S.Button href={button?.url}>{button?.title}</S.Button>
                )}
              </S.RightText>
            )}
          </Container>
        </S.CustomGrid>
      </S.RowGrid>
    </S.Wrapper>
  )
}

export default ImageTextRow
