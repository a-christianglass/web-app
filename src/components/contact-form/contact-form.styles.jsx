import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, MenuItem, Select, TextField } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const FormWrapper = styled.div`
  //margin: auto;
  max-width: 394px;
  background: #fafafa;
  //box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 2em 1em;
  text-align: center;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 24px;
    color: #0d5c80;
    margin-bottom: 1em;
  }
`
export const Field = styled(TextField)`
  input {
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0.005em;
    color: #879fb3;
    background-color: #f5f8fa;
  }

  .MuiInputBase-root {
    border-radius: 4px;
    max-height: 42px;
  }

  margin-bottom: 1em;

  .MuiTextField-root {
    border: 1px solid #879fb3;
  }
`

export const CustomSelect = styled(Select)`
  margin-bottom: 1em;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 26px;
  color: #0d5c80;
  display: block;
  border-radius: 4px;
  max-height: 42px;

  .MuiSelect-outlined.MuiSelect-outlined {
    // padding-right: 32px;
    position: relative;
    top: -9px;
  }
`

export const CustomMenuItem = styled(MenuItem)`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 26px;
  color: #0d5c80;
`

export const TextBlock = styled(TextField)`
  width: 100%;

  .MuiInputBase-root {
    background-color: #f5f8fa;
    border-radius: 4px;
  }

  textarea {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    color: #0d5c80;
    background-color: #f5f8fa;
    line-height: 160%;
    letter-spacing: 0.005em;
  }

  margin-bottom: 1em;
`
export const Button = styled(CustomButton)`
  text-transform: capitalize;
  background-color: #f89928;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 17px;
  color: #1e150a;
  padding: 1em 0;
`
