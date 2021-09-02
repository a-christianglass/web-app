import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"

export const Wrapper = styled(SectionWrapper)`
  padding: 4em 2em;
  background-color: #f0f5f7;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em 0;
  }
`

export const CustomGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftWrapper = styled.div`
  max-width: 483px;
  h2 {
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    color: #0d5c80;
    margin-bottom: 1em;
  }
`

export const ContentText = styled(Typography)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 22px;
  color: rgba(29, 56, 69, 0.75);
`

export const RightWrapper = styled.div`
  max-width: 436px;
  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 23px;
    color: #0d5c80;
  }
  h5 {
    margin-top: 0;
    font-weight: normal;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    line-height: 21px;
    color: #0d5c80;
  }
`

export const QuoteText = styled(Typography)`
  font-weight: bold;
  font-size: 1rem;
  line-height: 23px;
  color: #0d5c80;
  margin-bottom: 1em;
`
