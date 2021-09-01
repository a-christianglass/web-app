import React, { useState } from "react"
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
SwiperCore.use([Pagination, Navigation, Thumbs])

const GalleryDialog = ({ title, description, galleryImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <S.Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <S.ContentWrapper>
              {title && <h2>{title}</h2>}
              {description && <p>{description}</p>}
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                slidesPerView={4}
                watchSlidesProgress={true}
                className="thumbSwiper"
              >
                {galleryImages.map(({ galleryImage }, index) => (
                  <SwiperSlide>
                    <S.ImageWrapper>
                      <CustomImage img={galleryImage} />
                    </S.ImageWrapper>
                  </SwiperSlide>
                ))}
              </Swiper>
            </S.ContentWrapper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Swiper thumbs={{ swiper: thumbsSwiper }} loop={true}>
              {galleryImages.map(({ galleryImage }, index) => (
                <SwiperSlide>
                  <S.ImageWrapper>
                    <CustomImage img={galleryImage} />
                  </S.ImageWrapper>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default GalleryDialog
