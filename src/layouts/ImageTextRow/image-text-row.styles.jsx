import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid } from "@material-ui/core"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component";

export const RowGrid = styled(Grid)`
  ${({ contained }) =>
    contained &&
    `
    padding: 5em 8em;
    `}

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
  }
`
export const ImageGrid=styled(Grid)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-height: 178px;
  }
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  object-fit: cover!important;
`

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
  order: 2;
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
