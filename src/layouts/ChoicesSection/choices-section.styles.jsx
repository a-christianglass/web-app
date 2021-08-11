import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"

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
  max-width: 454px;
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
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: 29px;
  color: #0d5c80;
`
