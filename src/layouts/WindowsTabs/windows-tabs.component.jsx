import React, { useState } from "react"
import * as S from "./windows-tabs.styles"
import Container from "@material-ui/core/Container"
import { Grid, Tabs } from "@material-ui/core"
import parse from "html-react-parser"
import CustomImage from "../../components/custom-image/custom-image.component"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import theme from "../../theme"

const WindowsTabs = ({ titleWindows, descriptionWindows, tabsWindows }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const isSm = useMediaQuery(theme.breakpoints.down("sm"))

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
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant={isSm ? "scrollable" : "fullWidth"}
          scrollButtons="on"
          centered
        >
          {tabsWindows.map(tab => (
            <S.DoorTab label={parse(tab.tab.title)} />
          ))}
        </Tabs>
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
