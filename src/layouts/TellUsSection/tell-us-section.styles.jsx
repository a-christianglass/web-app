import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import {
  FormControl,
  FormControlLabel,
  Radio,
  TextField,
} from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .MuiFormControlLabel-label {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 26px;
    color: rgba(29, 56, 69, 0.75);
  }
`

export const FormContainer = styled(FormControl)`
  width: 100%;
`

export const FieldWrapper = styled.div`
  ${({ havePadding }) =>
    havePadding &&
    `
    padding-right: 0.5em;
  `}
  span {
    font-style: normal;
    font-weight: normal;
    line-height: 21px;
    color: rgba(29, 56, 69, 0.75) !important;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  }
`
export const FormWrapper = styled.div`
  display: flex;
  max-width: 796px;
  width: 100%;
  padding: 2em 4em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #0d5c80;
  }
`

export const Field = styled(TextField)`
  width: 100%;
  input {
    width: 364px;
    color: #879fb3;
  }
  margin-bottom: 1em;
`

export const TextBlockWrapper = styled.div`
  span {
    font-style: normal;
    font-weight: normal;
    line-height: 21px;
    color: rgba(29, 56, 69, 0.75) !important;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  }
`
export const TextBlock = styled(TextField)`
  width: 100%;
  textarea {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 26px;
    color: #0d5c80;
  }
  margin-bottom: 1em;
`
export const RadioWrapper = styled.div`
  width: 50%;
`

export const ProfessionWrapper = styled.div`
  padding: 2em 0;
  span {
    font-style: normal;
    font-weight: bold;
    line-height: 23px;
    color: rgba(29, 56, 69, 0.75) !important;
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  }
`

export const QuestionLabel = styled.span`
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  color: rgba(29, 56, 69, 0.75) !important;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
`

export const ProjectTypeWrapper = styled.div`
  padding: 3em 0;
`
export const Button = styled(CustomButton)`
  text-transform: none;
  background-color: #f89928;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 17px;
  color: #1e150a;
  padding: 1em 0;
`
