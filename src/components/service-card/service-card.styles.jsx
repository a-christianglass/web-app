import styled, { css } from "styled-components"
import { Typography } from "@material-ui/core"
import CustomBgImage from "../custom-bg-image/custom-bg-image.component"

export const effect = css`
  .whiteWrapper {
    opacity: 0;
    visibility: hidden;
  }
  .blueWrapper {
    opacity: 1;
    visibility: visible;
    box-shadow: 0px 41px 60px rgba(8, 44, 73, 0.25);
  }
`
export const Wrapper = styled.div`
  position: relative;
  cursor: normal;
  display: block;
  padding-top: 2em;
  min-height: 550px;
  max-height: 600px;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover {
    ${effect};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`
export const WhiteWrapper = styled(CustomBgImage)`
  color: rgb(13, 92, 128);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  transition: all 0.3s ease;
  opacity: 1;
  visibility: visible;
  width: 100%;
`
export const BlueWrapper = styled(CustomBgImage)`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
  }
`
export const InnerWrapper = styled.div`
  width: 100%;
  padding: 2em;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  font-weight: 600;
  color: inherit;
  margin-top: 0.5em;
`

export const Description = styled(Typography)`
  margin: 2em 0;
  color: inherit;
`

export const ShortDesc = styled(Typography)`
  color: inherit;
  margin-top: 1em;
  margin-bottom: 2em;
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
    margin-left: 0.3em;
  }

  :hover {
    .arrow {
      transform: translateX(7px);
    }
  }
`
