import styled from "styled-components"
import Container from "@material-ui/core/Container"

export const Wrapper = styled(Container)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
  padding: 4em 10em;
  margin-left: unset;
  background-color: #ffffff;
`

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
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
  li {
    font-size: 1rem;
    line-height: 160%;
    color: rgba(29, 56, 69, 0.75);
  }
  ul {
    padding-inline-start: 25px;
  }
  p {
    font-size: 1rem;
    line-height: 160%;
    color: rgba(29, 56, 69, 0.75);
  }
`
