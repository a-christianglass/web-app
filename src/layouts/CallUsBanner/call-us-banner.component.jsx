import React from "react"
import * as S from "./call-us-banner.styles"
import PhoneIcon from "../../assets/icons/phone.svg"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

const CallUsBanner = ({ ...props }) => {
  const { image, title, number, content } = { ...props }
  // No content == more padding in TextWrapper and text align: left on Content Wrapper
  const morePadding = content === undefined
  return (
    <S.Wrapper>
      <CustomBgImage img={image}>
        <S.TextWrapper morePadding={morePadding}>
          <S.ContentWrapper textAlign={morePadding}>
            <h2>{title && title}</h2>
            <a href="tel:+(561) 278-3385">
              <S.NumberWrapper>
                <PhoneIcon />
                <span>{number}</span>
              </S.NumberWrapper>
            </a>
            <h3>{content && content}</h3>
          </S.ContentWrapper>
        </S.TextWrapper>
      </CustomBgImage>
    </S.Wrapper>
  )
}

export default CallUsBanner
