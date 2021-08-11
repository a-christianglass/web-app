import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 4em 0;
`

export const LeftGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 445px;
  h2 {
    color: #0d5c80;
    font-size: 36px;
    font-style: normal;
    font-weight: bold;
    margin: 0.5em 0;
  }
`
export const Content = styled(Typography)`
  font-size: 1rem;
  font-style: normal;
  font-weight: normal;
  color: rgba(29, 56, 69, 0.75);
`

export const Logo = styled(CustomImage)`
  max-width: 146px;
  width: 100%;
`

export const VideoGrid = styled(Grid)`
  cursor: pointer;
`

export const VideoImage = styled(CustomBgImage)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  svg {
    width: 64px;
    height: 64px;
    object-fit: contain !important;
  }
`
