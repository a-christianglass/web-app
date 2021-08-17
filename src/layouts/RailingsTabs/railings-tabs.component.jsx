import React, { useState } from "react"
import * as S from "./railings-tabs.styles"
import { Grid } from "@material-ui/core"
import parse from "html-react-parser"
import Container from "@material-ui/core/Container"
const RailingsTabs = ({ title, description, tabs }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  if (!tabs) return null

  return (
    <S.Wrapper>
      <Container>
        <S.TopGrid container>
          <Grid item xs={12} md={6}>
            <S.TitleWrapper>{title && <h1>{title}</h1>}</S.TitleWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            {description && <S.RightText>{parse(description)}</S.RightText>}
          </Grid>
        </S.TopGrid>
        <S.CustomTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
        >
          {tabs.map(tab => (
            <S.CustomTab label={tab.tab.title} />
          ))}
        </S.CustomTabs>
        {tabs.map((tab, index) => (
          <S.CustomTabPanel hidden={value !== index}>
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
