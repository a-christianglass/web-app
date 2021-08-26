import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 4em 0;
  background-color: white;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em 0;
  }
`
export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  line-height: 47px;
  color: #0d5c80;
  text-align: center;
  margin-bottom: 1em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(28)};
  }
`

export const CustomLogo = styled(CustomImage)`
  width: 160px;
  height: 90px;
  object-fit: contain;
  filter: grayscale(75%);
  opacity: 0.75;
  margin: auto;
  :hover {
    filter: unset;
    opacity: 1;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    filter: unset;
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
  }
`
