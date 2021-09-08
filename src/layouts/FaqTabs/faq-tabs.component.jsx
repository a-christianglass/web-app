import React, { useState } from "react"
import * as S from "./faq-tabs.styles"
import Container from "@material-ui/core/Container"
import { ChevronRight, ExpandLess } from "@material-ui/icons"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import parse from "html-react-parser"
import { Tabs } from "@material-ui/core"

const FaqTabs = ({ faqTitle, faqTabs }) => {
  //Hook for tabs
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  //Hook for Accordion
  const [expanded, setExpanded] = useState(false)
  const handleChangeAccordion = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  if (!faqTabs) return null

  return (
    <S.Wrapper>
      <Container>
        {faqTitle && <S.Title>{faqTitle}</S.Title>}

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          centered
        >
          {faqTabs.map(tab => (
            <S.FaqTab label={tab.tab.title} />
          ))}
        </Tabs>
        {faqTabs.map((faqObj, index) => (
          <S.CustomTabPanel hidden={value !== index}>
            {faqObj.tab.faqs.map((faq, index) => (
              <S.CustomAccordion
                expanded={expanded === `panel ${index}`}
                onChange={handleChangeAccordion(`panel ${index}`)}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === `panel ${index}` ? (
                      <ExpandLess />
                    ) : (
                      <ChevronRight />
                    )
                  }
                >
                  <S.SummaryText>{faq.faq.title}</S.SummaryText>
                </AccordionSummary>
                <AccordionDetails>
                  {faq.faq.content && (
                    <S.DetailsText>{parse(faq.faq.content)}</S.DetailsText>
                  )}
                </AccordionDetails>
              </S.CustomAccordion>
            ))}
          </S.CustomTabPanel>
        ))}
      </Container>
    </S.Wrapper>
  )
}

export default FaqTabs
