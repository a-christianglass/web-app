import styled from "styled-components"
import { AppBar } from "@material-ui/core"
import CustomLink from "../custom-link/custom-link.component"

export const CustomAppBar = styled(AppBar)``

export const TopNav = styled.div`
  padding: 0.5em;
  background-color: ${({ theme }) => theme.palette.text.primary};
`

export const TopItem = styled.a`
  margin-left: 1em;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  font-weight: 500;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 1em;
  }
`

export const InnerTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5em;
  }
`

export const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5em;
  }
`
