import React, { useState } from "react"
import * as S from "./doors-tabs.styles"
import Container from "@material-ui/core/Container"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core"
import CustomImage from "../../components/custom-image/custom-image.component"

// install Swiper modules
SwiperCore.use([Pagination])

const DoorsTabs = ({ titleDoors, descriptionDoors, tabsDoors }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  if (!tabsDoors) return null
  return (
    <S.Wrapper>
      <Container>
        <S.TopGrid container>
          <Grid item xs={12} md={6}>
            <S.TitleWrapper>
              {titleDoors && <h2>{titleDoors}</h2>}
            </S.TitleWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            {descriptionDoors && (
              <S.RightText>{parse(descriptionDoors)}</S.RightText>
            )}
          </Grid>
        </S.TopGrid>
        <S.CustomTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
        >
          {tabsDoors.map(tab => (
            <S.CustomTab label={parse(tab.tab.title)} />
          ))}
        </S.CustomTabs>
        {tabsDoors.map((tab, index) => (
          <S.CustomTabPanel hidden={value !== index}>
            <Grid container>
              {/*Slider Grid*/}
              <S.SliderGrid item xs={12} md={6}>
                <Swiper pagination={true} slidesPerView="1" loop={true}>
                  {tab.tab.images.map(({ image }, index) => (
                    <SwiperSlide key={`windows-slide-${index}`}>
                      {image && <CustomImage img={image} />}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </S.SliderGrid>
              <S.RightGrid item xs={12} md={6}>
                {tab.tab.subtitle && (
                  <S.TabSubtitle>{tab.tab.subtitle}</S.TabSubtitle>
                )}
                {tab.tab.content && (
                  <S.TabText>{parse(tab.tab.content)}</S.TabText>
                )}
                {tab.tab.features && (
                  <Grid container>
                    {tab.tab.features.map((feature, index) => {
                      if (
                        feature &&
                        feature.feature.title &&
                        feature.feature.content
                      ) {
                        return (
                          <Grid item xs={12}>
                            <S.FeatureWrapper>
                              {feature.feature.title && (
                                <h4>{feature.feature.title}</h4>
                              )}
                              {feature.feature.content && (
                                <p>{parse(feature.feature.content)}</p>
                              )}
                            </S.FeatureWrapper>
                          </Grid>
                        )
                      } else {
                        return (
                          <Grid item xs={12}>
                            <S.FeatureWrapper>
                              {feature.feature.title && (
                                <h4>{feature.feature.title}</h4>
                              )}
                            </S.FeatureWrapper>
                          </Grid>
                        )
                      }
                    })}
                  </Grid>
                )}
              </S.RightGrid>
            </Grid>
          </S.CustomTabPanel>
        ))}
      </Container>
    </S.Wrapper>
  )
}

export default DoorsTabs
