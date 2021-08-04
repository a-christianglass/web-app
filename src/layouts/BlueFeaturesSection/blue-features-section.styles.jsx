import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { Grid } from "@material-ui/core"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  display: flex;
`

export const LeftImage = styled(CustomImage)`
  height: 100%;
  width: 100%;
`
export const ImageWrapper = styled(CustomBgImage)`
  height: 100%;
  width: 100%;
  margin-left: -1px;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10em;
  h2 {
    font-size: 2.25rem;
    max-width: 512px;
  }
`

export const CardsGrid = styled(Grid)`
  display: flex;
  margin-top: 2em;
`

export const FeatureCard = styled(Grid)`
  display: flex;
  margin-top: 4em;
  margin-bottom: 4em;
`
export const FeaturedTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 322px;
  h3 {
    font-weight: 700;
    font-size: 24px;
  }

  h4 {
    font-size: 16px;
  }
`

export const Icon = styled(CustomImage)`
  margin-right: 1em;
`
