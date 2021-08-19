import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Grid from "@material-ui/core/Grid"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: white;
`

export const TagText = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 120.5%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(29, 56, 69, 0.75);
  padding-bottom: 1em;
`
export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 24.4239px;
  line-height: 120.5%;
  letter-spacing: 0.01em;
  padding-top: 1em;
  padding-bottom: 1em;
`

export const GridCard = styled(Grid)`
  min-height: 506px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;

  .MuiTypography-root {
    padding-bottom: 1em;
  }
`

export const CardLink = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 146%;
  letter-spacing: 0.02em;

  .lightLink {
    color: white;
  }

  .darkLink {
    color: rgb(13, 92, 128);
  }

  .arrow {
    transition: all 0.3s ease;
    top: 7px;
    position: relative;
    margin-left: .3em;
  }

  :hover {
    .arrow {
      transform: translateX(7px);
    }


`

export const ContentWrapper = styled(CustomBgImage)`
  min-height: 506px;
  border-radius: 4px;
  padding: 5em 2em;
`
