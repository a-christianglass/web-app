import React, { useState } from "react"
import * as S from "./contact-form.styles"
import { FormControl, InputAdornment, Typography } from "@material-ui/core"
import PersonIcon from "../../assets/icons/person.svg"
import MailIcon from "../../assets/icons/mailForm.svg"
import PhoneIcon from "../../assets/icons/phoneForm.svg"
import { useForm, Controller } from "react-hook-form"
import { contactFormApi } from "../../apis/apis"
import { navigate } from "gatsby-link"

const ContactForm = () => {
  const [products, setProducts] = useState("")
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const onSubmit = async data => {
    setIsLoading(true)
    const form = new FormData()
    form.append("yourName", data.yourName)
    form.append("yourEmail", data.yourEmail)
    form.append("yourPhone", data.yourPhone)
    form.append("product", data.product)
    form.append("yourMessage", data.yourMessage)

    contactFormApi
      .post("/971/feedback", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(response => {
        setIsLoading(false)
        if (response.data) {
          setSuccessMessage(response.data.message)
        }
      })
  }

  const handleChange = event => {
    setProducts(event.target.value)
  }

  return (
    <S.FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && (
          <S.FormSpinner>
            <S.CustomSpinner />
          </S.FormSpinner>
        )}
        {!successMessage ? (
          <>
            <h2>Request a Quote</h2>
            <S.Field
              placeholder="Full Name"
              id="yourName"
              required
              inputRef={register}
              name="yourName"
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
              id="yourEmail"
              required
              inputRef={register}
              name="yourEmail"
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
              id="yourPhone"
              required
              inputRef={register}
              name="yourPhone"
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
            <FormControl fullWidth variant="outlined">
              <Controller
                as={
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
                    <S.CustomMenuItem value="windows">Windows</S.CustomMenuItem>
                    <S.CustomMenuItem value="railings">
                      Railings
                    </S.CustomMenuItem>
                    <S.CustomMenuItem value="showers">Showers</S.CustomMenuItem>
                  </S.CustomSelect>
                }
                name="product"
                control={control}
              />
            </FormControl>
            <S.TextBlock
              id="yourMessage"
              multiline
              rows={4}
              name="yourMessage"
              inputRef={register}
              placeholder="Tell us about your project..."
              variant="outlined"
            />
            <S.Button name="submit" fullWidth type="submit">
              Schedule an Appointment
            </S.Button>
          </>
        ) : (
          <>{navigate("/quote/thanks")}</>
        )}
      </form>
    </S.FormWrapper>
  )
}
export default ContactForm
