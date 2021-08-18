import React, { useState } from "react"
import * as S from "./windows-tabs.styles"
import Container from "@material-ui/core/Container"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"
import CustomImage from "../../components/custom-image/custom-image.component"

const WindowsTabs = ({ titleWindows, descriptionWindows, tabsWindows }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  if (!tabsWindows) return null
  return (
    <S.Wrapper>
      <Container>
        <S.TopGrid container>
          <Grid item xs={12} md={6}>
            <S.TitleWrapper>
              {titleWindows && <h2>{titleWindows}</h2>}
            </S.TitleWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            {descriptionWindows && (
              <S.RightText>{parse(descriptionWindows)}</S.RightText>
            )}
          </Grid>
        </S.TopGrid>
        <S.CustomTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
        >
          {tabsWindows.map(tab => (
            <S.CustomTab label={tab.tab.title} />
          ))}
        </S.CustomTabs>
        {tabsWindows.map((tab, index) => (
          <S.CustomTabPanel hidden={value !== index}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <S.ImageWrapper>
                  <CustomImage img={tab.tab.image} />
                </S.ImageWrapper>
              </Grid>
              <S.RightGrid item xs={12} md={6}>
                {tab.tab.subtitle && (
                  <S.TabSubtitle>{tab.tab.subtitle}</S.TabSubtitle>
                )}
                {tab.tab.content && <S.TabText>{tab.tab.content}</S.TabText>}
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
                                <p>{feature.feature.content}</p>
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

export default WindowsTabs
