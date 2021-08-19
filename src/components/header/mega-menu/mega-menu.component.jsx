import React, { useEffect, useState } from "react"
import * as S from "./mega-menu.styles.jsx"
import { Grid } from "@material-ui/core"
import { navigate } from "gatsby-link"
import parse from "html-react-parser"
import { removeSpecialChar } from "../../../utils"

const MegaMenu = ({ sectionTitle, items }) => {
  const [selectedItem, setSelectedItem] = useState(items ? items[0] : null)

  const handleSelect = requestedItem => {
    setSelectedItem(requestedItem)
  }

  useEffect(() => {
    setSelectedItem(items ? items[0] : null)
  }, [items])

  return (
    <>
      {items.map(({ url, title, subtitle, description }, index) => (
        <>
          {description ? (
            <S.ProductsWrapper>
              <Grid container>
                <Grid item md={3}>
                  <S.ListWrapper>
                    {sectionTitle && <S.Title>{sectionTitle}</S.Title>}{" "}
                    {items.map(item => (
                      <S.Item
                        className={
                          selectedItem && selectedItem.title === item.title
                            ? "active"
                            : ""
                        }
                        onMouseEnter={() => handleSelect(item)}
                        onClick={() => navigate(item.url)}
                      >
                        <span>{item.title ? parse(item.title) : ""}</span>
                      </S.Item>
                    ))}
                  </S.ListWrapper>
                </Grid>
                <Grid item md={9}>
                  <S.DescGrid container>
                    <S.ItemDescGrid md={4}>
                      <S.ItemContent>
                        {selectedItem.description && (
                          <p>{parse(selectedItem.description)}</p>
                        )}
                      </S.ItemContent>
                    </S.ItemDescGrid>
                    <Grid md={8}>
                      <S.NavImage img={selectedItem.image} />
                    </Grid>
                  </S.DescGrid>
                </Grid>
              </Grid>
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
