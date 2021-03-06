import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"
import CircleCheckIcon from "../../images/check-circle.svg"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 2em 0;
  background-color: white;
`
export const LeftGrid = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
`

export const Image = styled(CustomImage)`
  width: 100%;
  max-width: 526px;
  max-height: 707px;
`

export const RightGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 477px;
  h2 {
    font-size: 36px;
    color: #0d5c80;
    font-weight: bold;
    margin-bottom: 1em;
  }
`
export const FeatureWrapper = styled.div`
  display: flex;
  margin-bottom: 1em;
  svg {
    margin-right: 1em;
  }
`
export const ContentText = styled(Typography)`
  margin-left: 50px;
  padding-top: 2px;
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  position: relative;
  margin-bottom: 1em;
  color: rgba(29, 56, 69, 0.75);
  &:before {
    content: "";
    position: absolute;
    left: -50px;
    top: 4px;
    width: 32px;
    height: 32px;
    background: url(${CircleCheckIcon}) no-repeat center center;
    background-size: cover;
  }
`
