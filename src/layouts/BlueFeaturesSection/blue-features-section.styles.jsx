import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Grid, Typography } from "@material-ui/core"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const Image = styled(CustomImage)`
  width: 100%;
`

export const BgImage = styled(CustomBgImage)`
  width: 100%;
  height: 100%;
  padding: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Card = styled(Grid)`
  margin-bottom: 2em;
`

export const CardContent = styled.div`
  max-width: 400px;
`

export const RightWrapper = styled.div`
  h2 {
    margin-bottom: 2em;
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  }
`

export const RightGrid = styled(Grid)`
  margin-left: -1px;
`
export const ContentWrapper = styled.div`
  max-width: 400px;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-style: normal;
    font-weight: bold;
    color: white;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  }
`

export const Icon = styled(CustomImage)`
  width: 44px;
  height: 44px;
  margin-right: 20px;
  object-fit: contain !important;
`

export const ContentText = styled(Typography)`
  margin-left: 64px;
  color: white;
  font-size: 1rem;
  line-height: 26px;
  font-weight: 500;
`
