import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"
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

export const LeftGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageWrapper = styled(CustomImage)`
  width: 100%;
  max-width: 352px;
  margin-bottom: 2em;
`

export const RightGrid = styled(Grid)`
  display: flex;
  align-items: center;
`

export const TextWrapper = styled.div`
  max-width: 505px;
  h2 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    font-style: normal;
    font-weight: bold;
    line-height: 17px;
    color: rgba(13, 46, 77, 0.75);
    opacity: 0.76;
    margin-bottom: 1em;
  }

  h3 {
    margin-bottom: 1rem;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(24)};
      line-height: 29px;
    }
  }
`

export const ContentText = styled(Typography)`
  strong {
    font-weight: 700;
  }
`
