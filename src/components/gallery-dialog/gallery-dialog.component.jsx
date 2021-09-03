import React, { useRef, useState } from "react"
import * as S from "./gallery-dialog.styles"
import Grid from "@material-ui/core/Grid"
import CustomImage from "../custom-image/custom-image.component"
import Arrow from "../../assets/icons/white-arrow.svg"
import parse from "html-react-parser"
import { Typography } from "@material-ui/core"

const GalleryDialog = ({ title, description, galleryImages }) => {
  const [count, setCount] = useState(1)

  const [selectedImage, setSelectedImage] = useState(0)

  const changeSelectedImage = index => {
    setSelectedImage(index)
    setCount(index + 1)
  }

  const addCount = () => {
    count >= galleryImages.length ? setCount(1) : setCount(count + 1)
    setSelectedImage(count - 1)
  }
  const restCount = () => {
    count <= 1 ? setCount(galleryImages.length) : setCount(count - 1)
    setSelectedImage(count - 1)
  }

  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md={4}>
          <S.ContentWrapper>
            <S.TextWrapper>
              {title && <h2>{title}</h2>}
              {description && <Typography>{parse(description)}</Typography>}
              <div style={{ height: "100%" }}>
                <Grid container>
                  {galleryImages.map(({ galleryImage }, index) => (
                    <Grid
                      item
                      xs={3}
                      md={3}
                      key={`featured-gallery-${index}`}
                      onClick={() => changeSelectedImage(index)}
                    >
                      <S.PreviewImage
                        arPaddingPercentage={100}
                        className={selectedImage === index ? "active" : ""}
                        img={galleryImage}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </S.TextWrapper>

            <S.NavigationWrapper>
              <S.CustomArrow className="left" onClick={restCount}>
                <Arrow />
              </S.CustomArrow>
              <span>
                {count}/{galleryImages.length}
              </span>
              <S.CustomArrow onClick={addCount}>
                <Arrow />
              </S.CustomArrow>
            </S.NavigationWrapper>
          </S.ContentWrapper>
        </Grid>
        <S.ImageGrid item xs={12} md={8}>
          <S.GalleryImage img={galleryImages[selectedImage].galleryImage} />
        </S.ImageGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default GalleryDialog
