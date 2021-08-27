import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@material-ui/core"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`
export const BgImageWrapper = styled(CustomBgImage)``
export const WorksWrapper = styled.div`
  padding: 2em 0;
`

export const TopGrid = styled(Grid)`
  padding-bottom: 4em;
`

export const LeftGrid = styled(Grid)``

export const LeftWrapper = styled.div`
  max-width: 346px;
  h2 {
    font-style: normal;
    color: #0d5c80;
    font-weight: bold;
    line-height: 47px;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(24)};
      line-height: 29px;
      margin-bottom: 0.5em;
    }
  }
`

export const RightWrapper = styled.div`
  max-width: 571px; ;
`

export const DescriptionText = styled(Typography)`
  font-size: 1rem;
  font-weight: 500;
  line-height: 26px;
  color: rgba(29, 56, 69, 0.75);
`

export const WorkGrid = styled(Grid)`
  display: flex;
  align-items: center;
`

export const WorkWrapper = styled.div`
  max-width: 571px;
  margin-bottom: 3em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-left: unset;
  }
`

export const WorkDescription = styled(Typography)`
  font-size: 1rem;
  font-weight: 500;
  line-height: 26px;
  color: rgba(29, 56, 69, 0.75);
`

export const Logo = styled(CustomImage)`
  max-width: 64px;
  max-height: 64px;
  margin-bottom: 2em;
`
