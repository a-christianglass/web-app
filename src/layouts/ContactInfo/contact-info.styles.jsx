import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid } from "@material-ui/core"

export const Wrapper = styled(SectionWrapper)`
  padding: 4em 10em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    text-align: center;
    font-size: 54px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #0d5c80;
    padding-bottom: 1em;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    }
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 29px;
    color: #0d5c80;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    }
  }

  svg {
    width: 32px;
    height: 32px;
    object-fit: contain;
    margin-right: 0.5em;
  }
`

export const LocationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  svg {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 35px;
    color: #0d5c80;
    margin-right: 0.5em;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    }
  }
`

export const ItemGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(13, 92, 128, 0.32);
  margin-bottom: 1em;

  :last-child {
    border-right: none;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    border: none;
  }
`

export const MapGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: 2em;
  }
`
export const Map = styled.iframe`
  height: 476px;
  border: 0;
  padding: 0 4em 0 6.5em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`
