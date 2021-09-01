import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Box, Grid, Typography } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  ${({ bgColor }) =>
    bgColor === "white"
      ? `
        background-color: #ffffff;

   `
      : `
          background-color:  #f0f5f7;

   `};
`
export const TopGrid = styled(Grid)`
  margin-bottom: 1em;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 3em;
  } ;
`
export const LeftGrid = styled(Grid)`
  display: flex;
  //justify-content: center;
  //align-items: center;
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
  font-size: 1rem;
  color: rgba(29, 56, 69, 0.75);
  line-height: 26px;
  font-style: normal;
  font-weight: normal;
`

export const LeftTextWrapper = styled.div`
  max-width: 350px;
`

export const RightTextWrapper = styled.div`
  max-width: 517px;
`
export const BottomGrid = styled(Grid)`
  margin: auto;
`

export const ImageWrapper = styled.div`
  padding: 0;
  max-width: 382px;
  max-height: 505px;
`
export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  object-fit: contain !important;
`
