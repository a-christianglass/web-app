import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"
import Radio from "@material-ui/core/Radio"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
export const Wrapper = styled(CustomBgImage)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
   display: none;
  }
  min-height: 615px;
  padding: 0;
`
export const RightGrid = styled(Grid)`
  padding: 9em 0;
`
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 8em;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    color: white;
    margin-bottom: 1rem;
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: white;
    margin-bottom: 1rem;
  }
`
export const StepLine = styled.div`
  height: 10px;
  width: 100%;
  background-color: beige;
  margin-bottom: 1em;
`

export const StepProgressLine = styled.div`
  height: 100%;
  width: 15%;
  background-color: white;
  border-bottom-right-radius: 24px;
  border-top-right-radius: 24px;
`

export const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const CustomRadio = styled(Radio)`
  color: white;
  font-size: 18px;
`

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  h4 {
    padding-right: 2em;
    font-size: 14px;
    line-height: 21px;
    font-style: normal;
    font-weight: normal;
  }
`

export const Button = styled(CustomButton)`
  background-color: white;
  justify-content: center;
  align-items: center;
  color: #0d5c80;
  text-transform: capitalize;
`
