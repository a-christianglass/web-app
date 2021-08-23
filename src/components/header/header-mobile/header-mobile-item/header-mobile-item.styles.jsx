import styled, { css } from "styled-components"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"

const ArrowCss = css`
  width: 25px;
  height: auto;
  color: white;
  transition: all 0.3s ease;
`

export const Wrapper = styled.div`
  .mainItem {
    font-weight: bold;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.9em;
    padding-bottom: 0.9em;

    &:hover {
      text-decoration: none;
    }
  }

  a {
    color: white;
  }

  .MuiSvgIcon-root {
    color: white;
  }
`

export const LinkArrow = styled(KeyboardArrowDownIcon)`
  ${ArrowCss};
  transform: rotate(-90deg);
`

export const CollapsableArrow = styled(KeyboardArrowDownIcon)`
   ${ArrowCss}
    
    &.active {
      transform: rotate(-180deg);
    }
  }
  a {
    color: white;
  }
`
