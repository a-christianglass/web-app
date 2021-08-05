import styled from "styled-components"
import { Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

export const Wrapper = styled(Container)`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primary.main};
  top: 62px;
  color: white;
  left: 0;
  padding: 0;
  min-width: 500px;
  width: auto;

  a {
    text-decoration: none;
    font-size: 1rem;
    display: block;
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
