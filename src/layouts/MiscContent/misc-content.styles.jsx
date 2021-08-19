import styled from "styled-components"
import Container from "@material-ui/core/Container"

export const Wrapper = styled(Container)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
  margin-left: unset;
  padding: 6em 10em;
`
export const ContentWrapper = styled.div``

export const TextWrapper = styled.div`
  max-width: 745px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    color: #0d5c80;
  }
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    color: #0d5c80;
  }

  a {
    font-weight: 700;
    text-decoration: none;
    color: #0d5c80;
  }
`
