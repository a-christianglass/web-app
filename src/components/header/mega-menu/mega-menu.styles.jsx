import styled from "styled-components"
import { Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

export const ProductsWrapper = styled(Container)`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primary.main};
  top: 62px;
  color: white;
  left: 0;
  z-index: 6;
  padding: 0;
  min-width: 500px;
  width: auto;

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
  min-width: 220px;
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
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5em;
`

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bold;
`

export const ItemsGrid = styled(Grid)`
  border-top: 1px solid rgba(151, 151, 151, 0.1);
`

export const ItemsCol = styled(Grid)`
  padding: 4em;
`
