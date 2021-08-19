import styled from "styled-components"
import { Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import CustomImage from "../../custom-image/custom-image.component"

export const ProductsWrapper = styled(Container)`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primary.main};
  top: 62px;
  color: white;
  left: -279px;
  z-index: 6;
  min-width: 792px;
  width: auto;
  padding: 0;
  border-bottom: 5px solid#F89928;
  box-shadow: 0px 16px 32px rgba(0, 68, 123, 0.35);
  border-radius: 0px 0px 4px 4px;
  a {
    text-decoration: none;
    font-size: 1rem;
    display: block;
  }
`

export const SingleWrapper = styled(Container)`
  display: none;
  position: absolute;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.text.primary};
  top: 62px;
  color: black;
  left: 0;
  z-index: 5;
  padding: 0;
  width: auto;
  filter: drop-shadow(0px 4px 16px rgba(13, 92, 128, 0.24));

  a {
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    display: block;
    padding: 1em;
    :hover {
      span {
        border-bottom: 4px solid #0d5c80;
      }
    }
  }
  span {
    color: #0d5c80;
    border-bottom: 4px solid transparent;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5em;
`

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bold;
  padding: 0.5em 0.5em 0.7em;
`

export const ItemsGrid = styled(Grid)`
  border-top: 1px solid rgba(151, 151, 151, 0.1);
`

export const ItemsCol = styled(Grid)`
  padding: 4em;
`

export const Item = styled.div`
  padding: 0.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.active {
    span {
      border-bottom: 4px solid white;
    }
  }
`

export const NavImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 0;
  }
`
export const DescGrid = styled(Grid)`
  width: 100%;
  height: 100%;
`

export const ItemDescGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  p {
    padding: 0;
    margin: 0;
  }

  h4 {
    font-size: 16px;
    line-height: 146%;
    color: #0d5c80;
    font-weight: bold;
  }

  ul {
    padding-inline-start: 34px
  }

  li {
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #0d5c80;
  }
`

export const ListWrapper = styled.div`
  padding: 1em 2em;
`

export const ItemContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 1.3em;
`
