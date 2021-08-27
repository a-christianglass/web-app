import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, MenuItem, Select, TextField } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`
export const ContentWrapper = styled.div`
  padding-top: 4em;
  padding-bottom: 4em;
`
export const LeftGrid = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const LeftWrapper = styled.div`
  max-width: 561px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-right: 2em;
  }
  
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    color: #fafafa;
  }
`

export const NumberWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 23px;
    color: #ffffff;
    margin-right: 0.5em;
  }
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 29px;
    color: #ffffff;
  }
`

export const RightGrid = styled(Grid)`

  ${({ theme }) => theme.breakpoints.down("sm")} {
    text-align: center;
    margin: auto;
  }
  

`