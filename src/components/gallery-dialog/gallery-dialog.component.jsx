import React, { useState } from "react"
import * as S from "./gallery-dialog.styles"
import Grid from "@material-ui/core/Grid"
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
    let aux = count
    aux = aux < galleryImages.length ? aux + 1 : 1
    setCount(aux)
    setSelectedImage(aux - 1)
  }
  const restCount = () => {
    let aux = count
    aux = aux > 1 ? aux - 1 : galleryImages.length
    setCount(aux)
    setSelectedImage(aux - 1)
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
            {galleryImages.length > 1 && (
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
            )}
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
