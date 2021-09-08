import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Tab, Tabs, Typography } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Accordion from "@material-ui/core/Accordion"

export const Wrapper = styled(SectionWrapper)`
  background-color: white;
  .Mui-selected {
    color: #0d5c80;
  }
  .MuiTabs-indicator {
    background-color: #0d5c80;
    height: 7px !important;
  }
`

export const CustomTabPanel = styled.div`
  color: white;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const LeftGrid = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const LeftWrapper = styled.div`
  max-width: 425px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    color: #0d5c80;
    margin-bottom: 0.5em;
  }
`

export const TabContent = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 30px;
  color: rgba(29, 56, 69, 0.75);
  letter-spacing: 0.005em;
  margin-bottom: 1em;
`

export const Button = styled(CustomButton)`
  text-transform: none;
  font-size: 16px;
  padding: 0.5em 3em;
`

export const RightImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
`

export const CustomAccordion = styled(Accordion)`
  box-shadow: none;
  background-color: transparent;
  padding: 1.5em 0;

  &:before {
    display: none;
  }
  border-bottom: 1px solid rgb(151, 151, 151, 0.5);
  ${({ theme }) => theme.breakpoints.down("xs")} {
    .MuiButtonBase-root {
      padding-left: 0;
    }

    .MuiAccordionDetails-root {
      padding-left: 0;
    }
  }
`

export const SummaryText = styled(Typography)`
  font-weight: 600;
  line-height: 25px;
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  color: #0d5c80;
`

export const DetailsText = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  font-weight: 500;
  color: rgba(29, 56, 69, 0.75);
  max-width: 695px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  line-height: 60px;
  text-align: center;
  letter-spacing: -1px;
  margin-bottom: 1em;
  color: #0d5c80;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 29px;
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    text-align: left;
  }
`

export const FaqTab = styled(Tab)`
  color: rgba(13, 46, 77, 0.75);
  opacity: 0.75;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 600;
  padding-bottom: 1.5em;
  border-bottom: 6.5px solid #eaf1f6;
`
