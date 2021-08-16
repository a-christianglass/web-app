import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Grid from "@material-ui/core/Grid"


export const Wrapper =  styled(SectionWrapper)`
  background-color: white;
`

export const TagText = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 120.5%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(29, 56, 69, 0.75);
  padding-bottom: 1em;
`
export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 24.4239px;
  line-height: 120.5%;
  letter-spacing: 0.01em;
  padding-top: 1em;
  padding-bottom: 1em;
`

export const GridCard = styled(Grid)`
  min-height: 506px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;

  .MuiTypography-root {
    padding-bottom: 1em;
  }
`

export const CardLink = styled(Grid)`
  font-weight: bold;
  font-size: 16px;
  line-height: 146%;
  letter-spacing: 0.02em;
`

export const ContentWrapper = styled.div`
  min-height: 506px;
  border-radius: 4px;
  padding: 5em 2em;
`
