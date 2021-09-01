import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Grid from "@material-ui/core/Grid"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { Container, Typography } from "@material-ui/core"

export const Wrapper = styled(SectionWrapper)`
  background-color: white;
`

export const CustomContainer = styled(Container)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`

export const LeftGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftContentWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
`
export const TagText = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  line-height: 120.5%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(29, 56, 69, 0.75);
  padding-bottom: 1em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  }
`
export const LeftContentText = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
`
