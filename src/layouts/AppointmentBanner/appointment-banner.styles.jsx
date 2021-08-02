import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"

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

  padding: 0 10em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 1em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
    flex-direction: column;
    text-align: center;
  }

  h2 {
    font-weight: 700;
    max-width: 710px;
    font-size: 2rem;
    margin-bottom: 1em;
  }
`

export const Button = styled(CustomButton)`
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.palette.tertiary.main};
  text-transform: capitalize;
`
