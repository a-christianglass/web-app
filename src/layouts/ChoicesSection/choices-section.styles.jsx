import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 4em 2em;
  background-color: #f0f5f7;
`

export const LeftGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: center;

  h2 {
    color: #0d5c80;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    font-style: normal;
    font-weight: bold;
    margin-bottom: 1em;
  }
`

export const LeftContentText = styled(Typography)`
  font-size: 1rem;
  color: rgba(29, 56, 69, 0.75);
  font-style: normal;
  font-weight: normal;
`

export const RightGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightWrapper = styled.div`
  max-width: 437px;
`

export const RightContentText = styled(Typography)`
  p {
    text-align: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
    line-height: 29px;
    color: #0d5c80;
  }
`

export const QuoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;
`

export const QuoteImage = styled(CustomImage)`
  max-width: 62px;
  height: auto;
  text-align: center;
`

export const ContentWrapper = styled.div`
  max-width: 724px;
  margin: auto;
`
export const QuoteTextWrapper = styled.div`
  max-width: 585px;
  margin: auto;
  padding-bottom: 1em;
`
