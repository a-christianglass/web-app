import React from "react"
import * as S from "./image-text-row.styles"
import { Grid } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"

const ImageTextRow = ({
  imageTextRow,
  content,
  button,
  rightImage,
  contained,
}) => {
  return (
    <S.Wrapper>
      <S.RowGrid
        container
        direction={rightImage && "row-reverse"}
        contained={contained}
      >
        <S.ImageGrid item xs={12} sm={6}>
            <S.Image img={imageTextRow} alt={"alt"} className={"LeftImage"} />
        </S.ImageGrid>
        <S.CustomGrid item xs={12} sm={6}>
          <Container>
            {content && (
              <S.RightText>
                {parse(content)}
                {button && button.title && (
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
