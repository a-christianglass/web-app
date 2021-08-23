import styled from "styled-components"
import Link from "@material-ui/core/Link"

export const CustomLink = styled(Link)`
  display: block;
  margin-left: 2em;
  padding-top: 0.9em;
  padding-bottom: 0.9em;
  text-decoration: none !important;
  position: relative;
  color: white;
  cursor: pointer;

  > span {
    margin-right: 4em;
    display: block;
  }

  .MuiSvgIcon-root {
    width: 25px;
    height: auto;
    position: absolute;
    right: 0;
    transform: rotate(-90deg);
    bottom: 10px;
  }
`

export const PrevTitle = styled(Link)`
  text-align: center;
  position: relative;
  display: block;
  margin-bottom: 2em;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 30px;
    height: auto;
    position: absolute;
    top: -5px;
    bottom: 0;
    left: -0.5em;
    color: ${({ theme }) => theme.palette.primary.main};
    transform: rotate(90deg);
  }

  a {
    color: white;
  }
`
