import React from "react"
import * as S from "./project-card.styles.jsx"
import CustomImage from "../custom-image/custom-image.component"
import Arrow from "../../assets/icons/arrow.svg"

const ProjectCard = ({ image, link }) => {
  return (
    <S.CardContainer>
      <S.Card>
        <S.CardImage img={image} />
        <S.LinkWrapper>
          <S.TitleWrapper>
            <span>{link.title}</span>
          </S.TitleWrapper>
          <S.ArrowWrapper>
            <Arrow />
          </S.ArrowWrapper>
        </S.LinkWrapper>
      </S.Card>
    </S.CardContainer>
  )
}
export default ProjectCard
