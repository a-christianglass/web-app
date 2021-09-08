import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"
import CircleCheckIcon from "../../images/check-circle.svg"

export const Wrapper = styled(SectionWrapper)`
  padding: 4em 16px;
  background-color: #f0f5f7;
`
export const TopGrid = styled(Grid)`
  padding-bottom: 4em;
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
  }
`

export const RightGrid = styled(Grid)`
  display: flex;
  align-items: center;
`

export const ContentText = styled(Typography)`
  margin-left: auto;
  max-width: 560px;
  font-weight: 500;
  line-height: 26px;
  font-style: normal;
  color: rgba(29, 56, 69, 0.75);
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    text-align: left;
  }
`
export const TopTextWrapper = styled.div`
  padding-bottom: 6em;
`

export const LeftTextWrapper = styled.div`
  max-width: 400px;
  h2 {
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    color: #0d5c80;
    font-style: normal;
    font-weight: bold;
    line-height: 47px;
    padding-bottom: 1.5em;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(24)};
      line-height: 29px;
    }
  }
`

export const ReasonGrid = styled(Grid)`
  display: flex;
  align-items: center;
`

export const ReasonWrapper = styled.div`
  max-width: 360px;
  padding-bottom: 2em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-left: unset;
  }
`
export const ReasonTitle = styled(Typography)`
  margin-left: 30px;
  padding-top: 2px;
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  position: relative;
  font-weight: bold;
  margin-bottom: 1em;
  color: #0d5c80;

  &:before {
    content: "";
    position: absolute;
    left: -30px;
    top: 4px;
    width: 24px;
    height: 24px;
    background: url(${CircleCheckIcon}) no-repeat center center;
    background-size: cover;
  }
`
export const ReasonContent = styled(Typography)`
  margin-left: 30px;
  font-weight: 500;
  line-height: 26px;
  font-style: normal;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  color: rgba(29, 56, 69, 0.75);
`
