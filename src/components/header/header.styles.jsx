import { AppBar, IconButton } from "@material-ui/core"
import styled from "styled-components"
import CustomLink from "../custom-link/custom-link.component"
import LogoSVG from "../../assets/icons/logo.svg"
import CustomButton from "../custom-button/custom-button.component"

export const CustomAppBar = styled(AppBar)``

export const MainNav = styled.div`
  background-color: transparent;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-height: 61px;
  }
`

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

export const InnerTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Logo = styled(LogoSVG)`
  width: 128px;
  height: auto;
  display: block;
`

export const InnerMainContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-right: -2em;
  ${({ theme }) => theme.breakpoints.up("lg")} {
    margin-left: -2em;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-right: unset;
  }
`

export const MainItem = styled(CustomLink)`
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 1.5em 2em;
  position: relative;
  font-weight: bold;
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  box-shadow: inset 0px -2px 0 0 transparent;

  &.logo {
    padding: 0;
  }

  &.contact {
    display: flex;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 1em;
    span {
      margin-left: 1em;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-color: ${({ theme }) => theme.palette.tertiary.main};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.active:not(.logo):not(.contact) {
    box-shadow: inset 0px -2px 0 0 ${({ theme }) => theme.palette.secondary.main};
  }

  &:hover:not(.logo):not(.contact) {
    .arrow {
      transform: rotate(225deg);
      top: 1px;
    }
    > div {
      display: block;
    }
    box-shadow: inset 0px -2px 0 0 ${({ theme }) => theme.palette.secondary.main};
  }
`

export const Arrow = styled.span`
  border: solid white;
  margin-left: 0.5em;
  border-width: 0 2px 2px 0;
  display: inline-block;
  position: relative;
  top: -2px;
  padding: 3px;
  transform: rotate(45deg);
  transition: all 0.3s ease;
`

export const MainNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.tertiary.main};
  text-transform: none;
  color: #1e150a;
  font-size: 1rem;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.02em;
  line-height: 120%;
  padding-top: 0.1em;
  padding-bottom: 0.1em;
`
