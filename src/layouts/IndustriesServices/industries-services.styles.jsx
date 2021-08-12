import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Grid, Typography } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`
export const Image = styled(CustomImage)`
  max-width: 507px;
  margin-bottom: 2em;
`
export const ServiceWrapper = styled.div`
  padding: 6em 10em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    color: #0d5c80;
    margin-bottom: 1em;
  }
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
`

export const ContentText = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 23px;
  color: rgba(29, 56, 69, 0.75);
  margin-bottom: 2em;
  strong {
    font-weight: bold;
    rgba(29, 56, 69, 0.75);

  }
  
  a{
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    line-height: 29px;
    font-size: 24px;
    color: #0D5C80;
  }
`
