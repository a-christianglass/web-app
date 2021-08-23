import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton"
export const ItemsWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  padding: 6em 1.5em 1.5em;
  height: 100vh;
  z-index: 6;
  width: 100%;
  position: fixed;
  top: 31px;
  left: 0;
  right: 0;
  bottom: 0;

  .search {
    margin-bottom: 1em;
  }
`

export const MenuIcon = styled(IconButton)`
  z-index: 1;
`
