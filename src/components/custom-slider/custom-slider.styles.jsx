import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  .swiper-pagination {
    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
    @media (min-width: 1340px) {
      display: none;
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
    left: -0.5em;
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
