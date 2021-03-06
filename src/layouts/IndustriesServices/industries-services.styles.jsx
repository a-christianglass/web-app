import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Grid, Typography } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  ${({ bgColor }) =>
    bgColor === "white"
      ? `
        background-color: #ffffff;

   `
      : `
          background-color:  #f0f5f7;

   `};
  ${({ morePadding }) =>
    morePadding &&
    `
        padding: 4em 0;
   `};
`
export const Image = styled(CustomImage)`
  padding: 2em 0;
`
export const ServiceWrapper = styled.div`
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    color: #0d5c80;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(24)};
      line-height: 29px;
    }
  }
`

export const LeftGrid = styled(Grid)`
  display: flex;
  align-items: center;
  ${({ shouldCenter }) =>
    shouldCenter &&
    `
   justify-content: center;
  `}
`

export const RightGrid = styled(Grid)`
  display: flex;
  align-items: center;
  ${({ shouldCenter }) =>
    !shouldCenter &&
    `
   justify-content: center;
  `}
`

export const Button = styled(CustomButton)`
  text-transform: capitalize;
`

export const ContentWrapper = styled.div`
  max-width: 427px;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 120.5%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(29, 56, 69, 0.75);
    opacity: 0.5;
    padding-bottom: 1em;
  }
`

export const ContentText = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 23px;
  color: rgba(29, 56, 69, 0.75);
  margin-bottom: 2em;
  
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  }

  strong {
    font-weight: bold;
    rgba(29, 56, 69, 0.75);

  }

  a {
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    line-height: 29px;
    font-size: 24px;
    color: #0D5C80;
  }
`
