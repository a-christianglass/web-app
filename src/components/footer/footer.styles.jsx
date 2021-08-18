import styled from "styled-components"
import SectionWrapper from "../section-wrapper/section-wrapper.component"
import { Grid } from "@material-ui/core"
import Rectangle from "../../assets/icons/Rectangle.svg"
import CustomBgImage from "../custom-bg-image/custom-bg-image.component"
import CustomButton from "../custom-button/custom-button.component"
import CustomLink from "../custom-link/custom-link.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  background: radial-gradient(
    56.04% 163.52% at 66.32% 139.24%,
    #4fbff3 0%,
    #1593cd 100%
  );
`
export const FooterWrapper = styled.div`
  padding: 6em 10em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4em;
  img {
    max-width: 228px;
  }
`
export const BottomGrid = styled(Grid)`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 2em 0;
`

export const LeftGrid = styled(Grid)``

export const RightGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 29px;
    color: white;
    text-decoration: none;
    margin-bottom: 1em;
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 29px;
    color: white;
    margin: 1em 0;
  }
`

export const ColumnGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 23px;
    color: white;
  }

  a {
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    line-height: 21px;
    color: white;
    padding: 0.3em 0;
  }
`

export const LocationWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1em;
  svg {
    margin-right: 0.5em;
  }
  p {
    margin: 0;
    font-style: normal;
    font-size: 1rem;
    font-weight: 500;
    color: white;
  }
`
export const MailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: first baseline;
  svg {
    margin-right: 0.5em;
  }

  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    color: white;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  a {
    padding-left: 0.5em;
  }
  svg {
    width: 24px;
    height: 24px;
    object-fit: contain !important;
  }
`
export const LastGrid = styled(Grid)`
  padding: 2em 0;
`

export const BBBGrid = styled(Grid)`
  img {
    max-width: 150px;
  }
`

export const FaqGrid = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 160%;
    color: white;
  }
`
export const Line = styled(Rectangle)`
  margin: 0 1em;
`

export const BannerWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    #f0f5f7 0%,
    #f0f5f7 70%,
    transparent 70%,
    transparent 100%
  );
`
export const BgImageWrapper = styled.div``

export const BgImage = styled(CustomBgImage)`
  max-width: 100%;
  display: flex;
  align-items: center;
`

export const ContentGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  padding: 6em 4em;
  max-width: 500px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(29, 56, 69, 0.75);
    opacity: 0.5;
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(36)};
    line-height: 47px;
    color: #0d5c80;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: rgba(29, 56, 69, 0.75);
  }
`

export const Button = styled(CustomButton)`
  text-transform: none;
  background-color: ${({ theme }) => theme.palette.tertiary.main};
`

export const LinkItem = styled(CustomLink)`
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 29px;
  color: white;
  text-decoration: none;
`
