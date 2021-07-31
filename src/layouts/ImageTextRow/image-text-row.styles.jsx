import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid } from "@material-ui/core"
import theme from "../../theme"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  background-color: white;

  .left-image {
    height: 100%;
  }
`

export const CustomGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const RightText = styled.div`
  max-width: 380px;
  margin: auto;
  p {
    color: ${({ theme }) => theme.palette.text.content};
    font-size: 1rem;
    letter-spacing: 0;
    line-height: 25px;
    margin: 0;
  }
  h2 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.palette.text.secondary};
    letter-spacing: 0;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 3em 0;
    h2 {
      font-size: 2rem;
      line-height: 40px;
    }
  }
`
export const Button = styled(CustomButton)`
  margin-top: 2em;
  text-transform: capitalize;
  padding: 0.5em 4em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: 1em;
  }
`
