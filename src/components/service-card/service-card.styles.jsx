import styled, { css } from "styled-components"
import { Typography } from "@material-ui/core"
import CustomBgImage from "../custom-bg-image/custom-bg-image.component"

export const effect = css`
  .residentialWrapper {
    opacity: 0;
    visibility: hidden;
  }
  .commercialWrapper {
    opacity: 1;
    visibility: visible;
  }
`
export const Wrapper = styled.div`
  position: relative;
  cursor: normal;
  display: block;
  height: 410px;
  padding-top: 2em;

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
export const ResidentialWrapper = styled(CustomBgImage)`
  color: rgb(13, 92, 128);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  transition: all 0.3s ease;
  opacity: 1;
  visibility: visible;
  width: 100%;
`
export const CommercialWrapper = styled(CustomBgImage)`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 5em;
  } ;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.pxToRem(48)};
  font-weight: 600;
  color: inherit;
`

export const Description = styled(Typography)`
  margin: 2em 0;
  color: inherit;
`

export const ShortDesc = styled(Typography)`
  color: inherit;
  margin-top: 2em;
`
