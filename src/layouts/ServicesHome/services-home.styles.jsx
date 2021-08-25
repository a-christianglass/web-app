import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Grid from "@material-ui/core/Grid"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { Container } from "@material-ui/core"

export const Wrapper = styled(SectionWrapper)`
  background-color: white;
`

export const CustomContainer = styled(Container)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`

export const TagText = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 120.5%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(29, 56, 69, 0.75);
  padding-bottom: 1em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  }
`
export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 24.4239px;
  line-height: 120.5%;
  letter-spacing: 0.01em;
  padding-top: 1em;
  padding-bottom: 1em;
`

export const LeftContentWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
`

export const GridCard = styled(Grid)`
  min-height: 506px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-radius: 4px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    border-radius: unset;
    padding: 0 !important;
  }
  .MuiTypography-root {
    padding-bottom: 1em;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    }
  }

  h3 {
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-height: unset;
    h3 {
      font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    }
  }
`

export const CardLink = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 146%;
  letter-spacing: 0.02em;

  .lightLink {
    color: white;
  }

  .darkLink {
    color: rgb(13, 92, 128);
  }

  .arrow {
    transition: all 0.3s ease;
    top: 7px;
    position: relative;
    margin-left: .3em;
  }

  :hover {
    .arrow {
      transform: translateX(7px);
    }


`

export const ContentWrapper = styled(CustomBgImage)`
  min-height: 506px;
  border-radius: 4px;
  padding: 5em 2em;
`
