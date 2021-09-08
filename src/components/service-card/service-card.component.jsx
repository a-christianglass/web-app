import React from "react"
import * as S from "./service-card.styles"
import { graphql, navigate, useStaticQuery } from "gatsby"
import WhiteBuildingIcon from "../../assets/icons/buildingWhite.svg"
import BlueBuildingIcon from "../../assets/icons/buildingBlue.svg"
import WhiteHomeIcon from "../../assets/icons/homeWhite.svg"
import BlueHomeIcon from "../../assets/icons/homeBlue.svg"
import { ArrowForward } from "@material-ui/icons"
import CustomLink from "../custom-link/custom-link.component"

const ServiceCard = ({ title, content, link, isResidentialCard }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      blueCard: file(relativePath: { eq: "serviceCardBlue.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      whiteCard: file(relativePath: { eq: "serviceCardWhite.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.WhiteWrapper
        className="whiteWrapper"
        tag="div"
        img={staticQuery.whiteCard}
      >
        <S.InnerWrapper>
          {isResidentialCard ? <BlueHomeIcon /> : <BlueBuildingIcon />}
          {title && <S.Title>{title}</S.Title>}
          {content && <S.ShortDesc>{content}</S.ShortDesc>}
          {link.url && (
            <S.CardLink>
              <CustomLink className="darkLink" url={link.url}>
                {link.title}
              </CustomLink>
              <ArrowForward style={{ color: "#0D5C80" }} className="arrow" />
            </S.CardLink>
          )}
        </S.InnerWrapper>
      </S.WhiteWrapper>

      <S.BlueWrapper
        className="blueWrapper"
        tag="div"
        img={staticQuery.blueCard}
      >
        <S.InnerWrapper>
          {isResidentialCard ? <WhiteHomeIcon /> : <WhiteBuildingIcon />}
          {title && <S.Title>{title}</S.Title>}
          {content && <S.ShortDesc>{content}</S.ShortDesc>}
          {link.url && (
            <S.CardLink>
              <CustomLink className="lightLink" url={link.url}>
                {link.title}
              </CustomLink>
              <ArrowForward style={{ color: "#ffffff" }} className="arrow" />
            </S.CardLink>
          )}
        </S.InnerWrapper>
      </S.BlueWrapper>
    </S.Wrapper>
  )
}
export default ServiceCard
