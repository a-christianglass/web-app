import React from "react"

import * as S from "./custom-button.styles"

const CustomButton = props => {
  const { fullWidth, className, children } = props
  return (
    <>
      {/*{href ?*/}
      {/*  <S.CustomButtonLink*/}
      {/*    className={`custom-button ${className}`}*/}
      {/*    style={style}*/}
      {/*    color={color}*/}
      {/*    to={href}*/}
      {/*    target={target}*/}
      {/*    // bg="#2A334E"*/}
      {/*    // swipe*/}
      {/*    // direction="right"*/}
      {/*  >*/}
      {/*    {children}*/}
      {/*  </S.CustomButtonLink>*/}
      {/*  :*/}
      <S.CustomButton
        className={`custom-button ${className}`}
        disableElevation
        fullWidth={fullWidth ? true : null}
        variant="contained"
        {...props}
      >
        {children}
      </S.CustomButton>
      {/*}*/}
    </>
  )
}

export default CustomButton
