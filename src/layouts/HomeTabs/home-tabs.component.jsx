import React, { useState } from "react"
import * as S from "./home-tabs.styles"
import Container from "@material-ui/core/Container"
import { Grid } from "@material-ui/core"

const HomeTabs = ({ tabs }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  if (!tabs) return null

  return (
    <S.Wrapper>
      <Container>
        <S.CustomTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
        >
          {tabs.map(tab => (
            <S.CustomTab label={tab.tab.title} />
          ))}
        </S.CustomTabs>
        {tabs.map((tab, index) => (
          <S.CustomTabPanel hidden={value !== index}>
            <Grid container>
              <S.LeftGrid item xs={12} md={6} justifyContent="center">
                <S.LeftWrapper>
                  {tab.tab.subtitle && <h2>{tab.tab.subtitle}</h2>}
                  {tab.tab.content && (
                    <S.TabContent>{tab.tab.content}</S.TabContent>
                  )}
                  {tab.tab.button && tab.tab.button.title && (
                    <S.Button href={tab.tab.button.url}>
                      {tab.tab.button.title}
                    </S.Button>
                  )}
                </S.LeftWrapper>
              </S.LeftGrid>
              <Grid item xs={12} md={6}>
                <S.RightImage img={tab.tab.image} />
              </Grid>
            </Grid>
          </S.CustomTabPanel>
        ))}
      </Container>
    </S.Wrapper>
  )
}

export default HomeTabs
