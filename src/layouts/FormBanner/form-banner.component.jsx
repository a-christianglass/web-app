import React, { useState } from "react"
import * as S from "./form-banner.styles"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"
import Radio from "@material-ui/core/Radio"
import CustomButton from "../../components/custom-button/custom-button.component"

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />)

export const FormBanner = ({ image }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      bgStep: file(relativePath: { eq: "step-bg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      bgForm: file(relativePath: { eq: "form-section.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  const [selectedValue, setSelectedValue] = React.useState("a")

  const handleChange = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <S.Wrapper>
      <CustomBgImage img={staticQuery.bgForm}>
        <Grid container>
          <Grid item xs={6} />
          <S.RightGrid item xs={6}>
            <CustomBgImage img={staticQuery.bgStep}>
              <S.FormWrapper>
                <h2>Tell us about your project</h2>
                <S.StepLine>
                  <S.StepProgressLine />
                </S.StepLine>
                <h3>I’m a...</h3>
                <Grid container>
                  <Grid item xs={6}>
                    <S.QuestionWrapper>
                      <S.CustomRadio
                        checked={selectedValue === "a"}
                        onChange={handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "A" }}
                      />
                      <span>Architect</span>
                    </S.QuestionWrapper>
                  </Grid>
                  <Grid item xs={6} justifyContent={"flex-end"}>
                    <S.CustomRadio
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                      value="b"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "B" }}
                    />
                    <span>Homeowner</span>
                  </Grid>
                  <Grid item xs={6}>
                    <S.CustomRadio
                      checked={selectedValue === "c"}
                      onChange={handleChange}
                      value="c"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "C" }}
                    />
                    <span>Homeowner</span>
                  </Grid>
                  <Grid item xs={6}>
                    <S.CustomRadio
                      checked={selectedValue === "d"}
                      onChange={handleChange}
                      value="d"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "D" }}
                    />
                    <span>Homeowner</span>
                  </Grid>
                  <Grid item xs={6}>
                    <S.CustomRadio
                      checked={selectedValue === "e"}
                      onChange={handleChange}
                      value="e"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "E" }}
                    />
                    <span>Homeowner</span>
                  </Grid>
                  <Grid item xs={6}>
                    <S.CustomRadio
                      checked={selectedValue === "f"}
                      onChange={handleChange}
                      value="f"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "F" }}
                    />
                    <span>Homeowner</span>
                  </Grid>
                </Grid>

                <S.StepWrapper>
                  <h4>Step 1 out of ?</h4>
                  <S.Button>Next</S.Button>
                </S.StepWrapper>
              </S.FormWrapper>
            </CustomBgImage>
          </S.RightGrid>
        </Grid>
      </CustomBgImage>
    </S.Wrapper>
  )
}

export default FormBanner
