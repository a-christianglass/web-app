import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Container } from "@material-ui/core"

export const Wrapper = styled(SectionWrapper)`
  ${({ bgColor }) =>
    (bgColor === "whiteGray" &&
      `
    background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #ffffff 50%,
    #f0f5f7 50%,
    #f0f5f7 100%
  );
    `) ||
    (bgColor === "gray" &&
      `
    background: #f0f5f7;
    `) ||
    (bgColor === "white" &&
      `
    background: #ffffff;
    `) ||
    (bgColor === "grayWhite" &&
      `
    background: linear-gradient(
    to bottom,
    #f0f5f7 0%,
    #f0f5f7 50%,
    #ffffff 50%,
    #ffffff 100%
  );
    `)}
  ${({ haveTopPadding }) =>
    haveTopPadding
      ? `padding-top: 5.25em;
    `
      : `  padding-top: 0;
`}
  padding-bottom: 0;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4em 1em;

  h2 {
    font-weight: 700;
    max-width: 710px;
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    h2 {
      font-size: ${({ theme }) => theme.typography.pxToRem(24)};
      margin-bottom: 1em;
    }
  }
`

export const Button = styled(CustomButton)`
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.palette.tertiary.main};
  text-transform: capitalize;
  font-size: 1rem;
`
