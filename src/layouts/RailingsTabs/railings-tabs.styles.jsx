import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Tab, Tabs, Typography } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import CircleCheckIcon from "../../images/check-circle.svg"

export const Wrapper = styled(SectionWrapper)`
  padding: 2em 0 5em 0;
  background-color: #f0f5f7;
  .Mui-selected {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const TopGrid = styled(Grid)`
  padding: 3em 0;
`
export const CustomTabs = styled(Tabs)`
  mix-blend-mode: normal;
  margin-bottom: 2em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: 1em;
  }

  .MuiTabs-scrollButtons {
    display: none;
  }

  .MuiTabs-indicator {
    height: 4px;
  }

  .MuiTabs-scroller {
    .MuiTabs-flexContainer {
      padding: 0.75em 0;

      button {
        padding-bottom: 1.5em;
        font-size: 14px;
        border-bottom: 7px solid #f0f5f7;
      }
    }

    .MuiTabs-indicator {
      bottom: 11px;
    }
  }
  .MuiTabs-scroller .MuiTabs-flexContainer button {
    border-bottom: 7px solid #eaf1f6;
  }
  .MuiTabs-indicator {
    background-color: #0d5c80;
    height: 7px !important;
  }
`
export const TabTitle = styled.h2`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  line-height: 47px;
  color: #0d5c80;
`

export const CustomTab = styled(Tab)`
  color: #0d5c80;
  opacity: 1;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 600;
  min-width: 296px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-width: 220px;
    font-size: 0.875rem;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    min-width: 160px;
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

export const TitleWrapper = styled.div`
  max-width: 331px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    letter-spacing: 0.02em;
    color: #0d5c80;
  }
`

export const RightText = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 160%;
  color: rgba(29, 56, 69, 0.75);
`

export const ContentWrapper = styled.div`
  max-width: 420px;
  padding: 2em 0;
  h3 {
    margin-left: 30px;
    padding-top: 5px;
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    position: relative;
    font-weight: bold;
    margin-bottom: 1em;
    color: #0d5c80;
    &:before {
      content: "";
      position: absolute;
      left: -30px;
      top: 4px;
      width: 24px;
      height: 24px;
      background: url(${CircleCheckIcon}) no-repeat center center;
      background-size: cover;
  }
`

export const FeatureText = styled(Typography)`
  margin-left: 30px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 26px;
  color: rgba(29, 56, 69, 0.75);
`

export const TabContentWrapper = styled.div`
  max-width: 750px;
`
