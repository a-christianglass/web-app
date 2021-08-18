import React from "react"
import * as S from "./mega-menu.styles.jsx"
import headerItems from "../header.json"
import { Grid } from "@material-ui/core"

const MegaMenu = ({ sectionTitle, items }) => {
  console.log(items)

  return (
    <>
      {items.map(({ url, title, subtitle, subItems }, index) => (
        <>
          {subItems ? (
            <S.ProductsWrapper>
              <S.ItemsGrid container>
                <S.ItemsCol item xs={12} sm={12}>
                  <S.TitleWrapper>
                    {sectionTitle && <S.Title>{sectionTitle}</S.Title>}
                  </S.TitleWrapper>
                </S.ItemsCol>
              </S.ItemsGrid>
            </S.ProductsWrapper>
          ) : (
            <S.SingleWrapper>
              {items.map(({ url, title }, index) => (
                <Grid xs={12}>
                  {title && (
                    <a href={url}>
                      <span>{title}</span>
                    </a>
                  )}
                </Grid>
              ))}
            </S.SingleWrapper>
          )}
        </>
      ))}
    </>
  )
}
export default MegaMenu
