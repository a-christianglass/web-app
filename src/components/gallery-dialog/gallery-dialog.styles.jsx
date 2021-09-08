import styled from "styled-components"
import CustomImage from "../custom-image/custom-image.component"
import { Grid } from "@material-ui/core"

export const Wrapper = styled.div`
  background-color: #181919;
  //height: calc(100vh - 64px);
`
export const ContentWrapper = styled.div`
  padding-right: 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-right: 0;
  }
`

export const TextWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-bottom: 0.5em;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    //width: 1150px;
    margin-bottom: 1em;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #ffffff;
    margin-bottom: 1em;
  }
`

export const GalleryImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
  img {
    object-fit: cover !important;
  }
`
export const CustomArrow = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 3em;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  padding: 0;
  &.left {
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
`

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PreviewImage = styled(CustomImage)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  &.active {
    opacity: 1;
  }
`

export const ImageGrid = styled(Grid)`
  max-height: 530px;
  width: 1150px;
`
