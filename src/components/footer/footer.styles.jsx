import styled from "styled-components"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"

export const Wrapper = styled.footer`
  color: white;
  padding: 4em 0 0;
  background: radial-gradient(
    56.04% 163.52% at 66.32% 139.24%,
    #4fbff3 0%,
    #1593cd 100%
  );

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .MuiContainer-root {
      padding-right: 2.5em;
      padding-left: 2.5em;
    }
  }
`
export const LeftContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  img {
    margin-left: 4em;
    margin-top: 2em;
    max-width: 150px;
  }
`

export const LogoWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-top: 8em;
  margin-bottom: 2em;
  img {
    max-width: 200px;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    padding: 0;
  }
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.light};
    padding: 0.5em 0;
    font-size: 14px;
    line-height: 21px;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 0.5em;
  }
`
export const ProductsWrapper = styled.div`
  display: flex;
  padding: 0 2em;
  margin-bottom: 1em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
  margin-bottom: 1em;
  span {
    padding: 0 1em;
    font-weight: bold;
  }
  a {
    color: ${({ theme }) => theme.palette.text.light};
    text-decoration: none;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
  }
`

export const LocationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
  p {
    padding-left: 0.5em;
    margin: 0;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
  }
`
export const MailWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
  a {
    padding-left: 0.5em;
    color: ${({ theme }) => theme.palette.text.light};
    text-decoration: none;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
  }
`

export const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    font-size: 24px;
    text-align: right;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
    h3 {
      text-align: center;
    }
  }
`

export const IconRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
  }
`

export const Logo = styled.div`
  text-align: center;
  a {
    display: inline-flex;

    svg {
      max-width: 21px;
      width: 100%;
      margin-left: 1em;
    }
  }
`

export const FaqWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1em 0;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.light};
    padding: 0 1em;
    :last-child {
      padding-right: 0;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
  }
`

export const SeparatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
`
