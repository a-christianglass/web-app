import styled from "styled-components"
import { Box } from "@material-ui/core"
import CustomImage from "../custom-image/custom-image.component"
import Dialog from "@material-ui/core/Dialog"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 0.5px solid rgba(188, 197, 204, 0.2);
  border-radius: 5px;
  margin-bottom: 2em;
  cursor: pointer;
  height: 486px;
  :hover {
    box-shadow: 0px 41px 60px rgba(8, 44, 73, 0.25);
  }
`
export const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  filter: drop-shadow(0px 8px 12px rgba(8, 44, 73, 0.04));
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 0.5em 2em;
  background-color: white;
  span {
    color: #0d5c80;
    font-size: 1rem;
    font-style: normal;
    font-weight: bold;
  }
`

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  border-bottom-right-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primary.main};

  padding: 1em;

  svg {
    width: 32px;
    height: 32px;
    object-fit: contain !important;
  }
`

export const CardImage = styled(CustomImage)`
  height: 424px;
`

export const CustomDialog = styled(Dialog)`
  .MuiDialog-paper {
    padding: 2em 0;
    background-color: #181919;
  }
  .MuiDialogContent-root {
    ${({ theme }) => theme.breakpoints.up("sm")} {
      padding-right: 0;
    }
  }
`

export const IconWrapper = styled.div`
  padding: 0.5em 0;
  cursor: pointer;
  margin-left: 24px;
`
