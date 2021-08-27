import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"

export const Wrapper = styled(SectionWrapper)`
  padding-top: 4em;
  padding-bottom: 0;
  background-color: white;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 2em;
  }
`
export const LeftGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    color: #0d5c80;
    font-style: normal;
    font-weight: bold;
    line-height: 47px;
    margin-bottom: 1rem;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    }
  }
`

export const RightGrid = styled(Grid)`
  display: flex;
  align-items: center;
`

export const ContentText = styled(Typography)`
  font-size: 1rem;
  color: rgba(29, 56, 69, 0.75);
  line-height: 26px;
  font-style: normal;
  font-weight: normal;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  }
`

export const LeftTextWrapper = styled.div`
  max-width: 350px;
`

export const RightTextWrapper = styled.div`
  max-width: 517px;
`
