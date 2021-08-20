import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, MenuItem, Select, TextField } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  .MuiTextField-root {
    border: 1px solid red;
  }
`
export const ContentWrapper = styled.div`
  padding: 4em;
`
export const LeftGrid = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const LeftWrapper = styled.div`
  max-width: 561px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    color: #fafafa;
  }
`

export const NumberWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 23px;
    color: #ffffff;
    margin-right: 0.5em;
  }
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 29px;
    color: #ffffff;
  }
`

export const RightGrid = styled(Grid)``

export const FormWrapper = styled.div`
  margin: auto;
  max-width: 400px;
  background: #fafafa;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 2em 0.5em;
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
  max-width: 364px;
  input {
    width: 364px;
    color: #879fb3;
  }
  margin-bottom: 1em;
`

export const CustomSelect = styled(Select)`
  margin-bottom: 1em;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 26px;
  color: #0d5c80;
`

export const CustomMenuItem = styled(MenuItem)`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 26px;
  color: #0d5c80;
`

export const TextBlock = styled(TextField)`
  textarea {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 26px;
    color: #0d5c80;
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
  color: #0d5c80;
  padding: 1em 0;
`
