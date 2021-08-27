import React, { useState } from "react"
import * as S from "./contact-form.styles"
import { FormControl, InputAdornment } from "@material-ui/core"
import PersonIcon from "../../assets/icons/person.svg"
import MailIcon from "../../assets/icons/mailForm.svg"
import PhoneIcon from "../../assets/icons/phoneForm.svg"

const ContactForm = () => {
  const [products, setProducts] = useState("")

  const handleChange = event => {
    setProducts(event.target.value)
  }

  return (
    <S.FormWrapper>
      {/*<FormControl>*/}
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
        <S.CustomMenuItem value="windows">Windows</S.CustomMenuItem>
        <S.CustomMenuItem value="railway">Railway</S.CustomMenuItem>
      </S.CustomSelect>
      <S.TextBlock
        id="outlined-multiline-static"
        multiline
        rows={4}
        placeholder="Tell us about your project..."
        variant="outlined"
      />
      <S.Button name="submit" fullWidth type="submit">
        Schedule an Appointment
      </S.Button>
      {/*</FormControl>*/}
    </S.FormWrapper>
  )
}
export default ContactForm
