import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  ${({ theme }) => theme.sectionPadding};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;

  p {
    margin-bottom: 2em;
  }

  .swiper-slide {
    max-height: 386px;
    max-width: 386px;
  }

  .gatsby-image-wrapper img {
    object-fit: contain !important;
  }
}

${({ theme }) => theme.breakpoints.down("sm")} {
  .swiper-container {
    overflow: unset;
  }

  .swiper-slide {
    max-height: 300px;
    max-width: 300px;
  }
}
`

export const CustomArrow = styled.div`
  position: absolute;
  top: calc(50% - 16px);
  width: 62px;
  height: 62px;
  background-color: transparent;
  z-index: 2;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  padding: 0;
  &.left {
    left: 3.5em;
  }
  &.right {
    ${({ onlyRight }) =>
      !onlyRight
        ? `
    right: 3.5em;
  `
        : `right: -0.5em;
      `}
  }
  @media (max-width: 1340px) {
    display: none;
  }
`
