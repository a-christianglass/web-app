import React, { useState } from "react"
import * as S from "./form-section.styles"
import { InputAdornment, MenuItem, Select } from "@material-ui/core"
import PersonIcon from "../../assets/icons/person.svg"
import MailIcon from "../../assets/icons/mailForm.svg"
import PhoneIcon from "../../assets/icons/phoneForm.svg"
import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"
const FormSection = ({ content, callText, number }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      formBg: file(relativePath: { eq: "form-bg.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  const [products, setProducts] = React.useState("")

  const handleChange = event => {
    setProducts(event.target.value)
  }

  return (
    <>
      <S.Wrapper>
        <CustomBgImage img={staticQuery.formBg}>
          <S.ContentWrapper>
            <Grid container>
              <S.LeftGrid xs={12} md={6}>
                <S.LeftWrapper>
                  {content && <h2>{parse(content)}</h2>}
                  <S.NumberWrapper>
                    {callText && <span>{callText}</span>}
                    {number && <a href="/">{number}</a>}
                  </S.NumberWrapper>
                </S.LeftWrapper>
              </S.LeftGrid>
              <S.RightGrid xs={12} md={6}>
                <S.FormWrapper>
                  <FormControl>
                    <h2>Request a Quote</h2>
                    <S.Field
                      placeholder="Full Name"
                      id="full_name"
                      required
                      name="full_name"
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <S.Field
                      placeholder="Email"
                      id="email"
                      required
                      name="email"
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <S.Field
                      placeholder="Phone"
                      id="phone"
                      required
                      name="full_name"
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <S.CustomSelect
                      value={products}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      variant="outlined"
                    >
                      <S.CustomMenuItem value="" disabled>
                        Choose a Product
                      </S.CustomMenuItem>
                      <S.CustomMenuItem value="doors">Doors</S.CustomMenuItem>
                      <S.CustomMenuItem value="windows">
                        Windows
                      </S.CustomMenuItem>
                      <S.CustomMenuItem value="railway">
                        Railway
                      </S.CustomMenuItem>
                    </S.CustomSelect>
                    <S.TextBlock
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      placeholder="Tell us about your project..."
                      variant="outlined"
                    />
                    <S.Button name="submit" fullWidth type="submit">
                      schedule an appointment
                    </S.Button>
                  </FormControl>
                </S.FormWrapper>
              </S.RightGrid>
            </Grid>
          </S.ContentWrapper>
        </CustomBgImage>
      </S.Wrapper>
    </>
  )
}
export default FormSection
