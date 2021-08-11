import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Box, Grid, Typography } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 4em 2em;
  background-color: #ffffff;
`
export const TopGrid = styled(Grid)`
  margin-bottom: 1em;
`
export const LeftGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    color: #0d5c80;
    font-style: normal;
    font-weight: bold;
    line-height: 47px;
    margin-bottom: 1rem;
  }
`

export const RightGrid = styled(Grid)`
  display: flex;
  align-items: center;
`

export const ContentText = styled(Typography)`
  font-size: 1rem;
  color: rgba(29, 56, 69, 0.75);
  line-height: 26px;
  font-style: normal;
  font-weight: normal;
`

export const LeftTextWrapper = styled.div`
  max-width: 350px;
`

export const RightTextWrapper = styled.div`
  max-width: 517px;
`
export const BottomGrid = styled(Grid)`
  margin: auto;
`
/*Card*/
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: white;
  max-width: 400px;
  border: 0.5px solid rgba(188, 197, 204, 0.2);
  border-radius: 5px;
  margin-bottom: 2em;
`
export const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  filter: drop-shadow(0px 8px 12px rgba(8, 44, 73, 0.04));
`
export const ImageWrapper = styled.div`
  padding: 0;
  max-width: 382px;
  max-height: 505px;
`
export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  object-fit: contain !important;
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
