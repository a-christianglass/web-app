import React, { useState } from "react"
import * as S from "./doors-tabs.styles"
import Container from "@material-ui/core/Container"
import { Grid, Tab, Tabs } from "@material-ui/core"
import parse from "html-react-parser"
import DoorTabSlider from "../../components/doors-tab-slider/door-tab-slider.component"

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
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="on"
          centered
        >
          {tabsDoors.map(tab => (
            <S.DoorTab label={parse(tab.tab.title)} />
          ))}
        </Tabs>
        {tabsDoors.map((tab, index) => {
          if (value === index) {
            return (
              <S.CustomTabPanel>
                <Grid container>
                  <S.SliderGrid item xs={12} md={6}>
                    <DoorTabSlider images={tab.tab.images} />
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
            )
          }
        })}
      </Container>
    </S.Wrapper>
  )
}

export default DoorsTabs
