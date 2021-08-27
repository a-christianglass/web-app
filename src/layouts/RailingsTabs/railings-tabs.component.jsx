import React, { useState } from "react"
import * as S from "./railings-tabs.styles"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"
const RailingsTabs = ({ title, tabsRaillings }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  if (!tabsRaillings) return null

  return (
    <S.Wrapper>
      <Container>
        <S.TopGrid container>
          <Grid item xs={12} md={6}>
            <S.TitleWrapper>{title && <h1>{title}</h1>}</S.TitleWrapper>
          </Grid>
          <Grid item xs={12} md={6} />
        </S.TopGrid>
        <S.CustomTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
        >
          {tabsRaillings.map(tab => (
            <S.CustomTab label={tab.tab.title} />
          ))}
        </S.CustomTabs>
        {tabsRaillings.map((tab, index) => (
          <S.CustomTabPanel hidden={value !== index}>
            <S.TabContentWrapper>
              <S.TabTitle>{parse(tab.tab.subtitle)}</S.TabTitle>
              {tab.tab.description && (
                <S.RightText>{parse(tab.tab.description)}</S.RightText>
              )}
            </S.TabContentWrapper>
            <Grid container>
              {tab.tab.features.map((feature, index) => (
                <Grid item xs={12} md={6}>
                  <S.ContentWrapper>
                    {feature.feature.title && <h3>{feature.feature.title}</h3>}
                    {feature.feature.content && (
                      <S.FeatureText>
                        {parse(feature.feature.content)}
                      </S.FeatureText>
                    )}
                  </S.ContentWrapper>
                </Grid>
              ))}
            </Grid>
          </S.CustomTabPanel>
        ))}
      </Container>
    </S.Wrapper>
  )
}

export default RailingsTabs
