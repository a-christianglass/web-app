import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Box, Grid } from "@material-ui/core"

export const Wrapper = styled(SectionWrapper)`
  padding: 4em 0;
`
export const Title = styled.h2`
  padding: 2em 0 2em 2em;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  line-height: 47px;
  color: #0d5c80;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    padding: 0 0 1em;
  }
`
export const BottomGrid = styled(Grid)`
  margin: auto;
`
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
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5em 2em;
  span {
    color: #0d5c80;
    font-size: 1rem;
    font-style: normal;
    font-weight: bold;
  }
`
