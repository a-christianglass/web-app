import React, { useRef, useState } from "react"
import * as S from "./gallery-dialog.styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import CloseIcon from "@material-ui/icons/Close"
import "swiper/swiper.min.css"
import "swiper/swiper-bundle.css"
import "swiper/swiper-bundle.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import CustomImage from "../custom-image/custom-image.component"
import Arrow from "../../assets/icons/white-arrow.svg"
SwiperCore.use([Pagination, Navigation, Thumbs])

const GalleryDialog = ({ title, description, galleryImages }) => {
  const [count, setCount] = useState(1)
  const [active, setActive] = useState(false)

  const addCount = () => {
    count >= galleryImages.length ? setCount(1) : setCount(count + 1)
  }
  const restCount = () => {
    count <= 1 ? setCount(galleryImages.length) : setCount(count - 1)
  }

  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0].galleryImage
  )

  const changeSelectedImage = index => {
    setSelectedImage(galleryImages[index].galleryImage)
    setCount(index)
  }

  const setImage = imageCount => {
    setSelectedImage(galleryImages[imageCount].galleryImage)
    setCount(imageCount)
  }

  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md={4}>
          <S.ContentWrapper>
            <S.TextWrapper>
              {title && <h2>{title}</h2>}
              {description && <p>{description}</p>}
              <Grid container>
                {galleryImages.map(({ galleryImage }, index) => (
                  <Grid
                    item
                    xs={3}
                    md={3}
                    key={`featured-gallery-${index}`}
                    onClick={() => changeSelectedImage(index)}
                  >
                    <S.PreviewImage img={galleryImage} />
                  </Grid>
                ))}
              </Grid>
            </S.TextWrapper>
            <S.NavigationWrapper>
              <S.CustomArrow className="left" onClick={() => setImage(count)}>
                <Arrow />
              </S.CustomArrow>
              <span>
                {count}/{galleryImages.length}
              </span>
              <S.CustomArrow onClick={() => setImage(count)}>
                <Arrow />
              </S.CustomArrow>
            </S.NavigationWrapper>
          </S.ContentWrapper>
        </Grid>
        <Grid item xs={12} md={8}>
          <S.ImageWrapper>
            <CustomImage img={selectedImage} />
          </S.ImageWrapper>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default GalleryDialog
