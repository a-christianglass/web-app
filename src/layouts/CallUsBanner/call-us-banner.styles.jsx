import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ morePadding }) =>
    morePadding
      ? `
    padding: 10em 0;
  `
      : `padding: 6em 0;
      `}
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  max-width: 467px;
  ${({ textAlign }) =>
    textAlign
      ? `
    h2 {
      text-align: left;
    }
  `
      : `h2 {
      text-align: center;
    }`}

  h2 {
    max-width: 467px;
    font-size: 2rem;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  a {
    text-decoration: none;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 4px;
    padding: 0 1.9em;
    box-shadow: 0 16px 32px rgba(6, 51, 72, 0.16);
    margin-bottom: 1.5em;
  }
  h3 {
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const NumberWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.main};
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  svg {
    max-width: 45px;
    margin-right: 1em;
  }
  span {
    font-weight: 700;
    font-style: normal;
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.text.primary};
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    }
  }
`

export const MobileBgImage = styled(CustomBgImage)`
  width: 100%;
  height: 388px;
`
export const MobileTextWrapper = styled.div`
  max-width: 238px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: auto;
  h2 {
    color: #1593cd;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
    line-height: 23px;
    text-align: center;
  }
`
export const MobileContentWrapper = styled.div`
  padding: 1em 1.5em 3em;

  a {
    text-decoration: none;
    border-radius: 4px;
    padding: 0 1.9em;
    box-shadow: 0 16px 32px rgba(6, 51, 72, 0.16);
    margin-bottom: 1.5em;
  }

  h3 {
    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    }

    text-align: center;
    color: #1593cd;
    font-weight: bold;
  }
`
