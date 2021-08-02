import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Grid from "@material-ui/core/Grid"

export const Wrapper = styled(SectionWrapper)`
  background: white;
`
export const Title = styled.h2`
  letter-spacing: 0;
  line-height: 47px;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 2.2em;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.dark};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: 1em;
  }
`
