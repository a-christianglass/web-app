import React, { useState } from "react"
import * as S from "./doors-tabs.styles"
import Container from "@material-ui/core/Container"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"

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
              <Grid item xs={12} md={6}></Grid>
              <S.RightGrid item xs={12} md={6}>
                {tab.tab.subtitle && (
                  <S.TabSubtitle>{tab.tab.subtitle}</S.TabSubtitle>
                )}
                {tab.tab.content && <S.TabText>{tab.tab.content}</S.TabText>}
                {tab.tab.features && (
                  <Grid container>
                    {tab.tab.features.map((feature, index) => (
                      <Grid item xs={12}>
                        <S.FeatureWrapper>
                          <h4>{feature.feature.title}</h4>
                          <p>{parse(feature.feature.content)}</p>
                        </S.FeatureWrapper>
                      </Grid>
                    ))}
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
