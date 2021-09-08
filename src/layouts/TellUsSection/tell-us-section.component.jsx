import React, { useState } from "react"
import * as S from "./tell-us-section.styles"
import {
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
import PhoneIcon from "../../assets/icons/phoneForm.svg"
import MailIcon from "../../assets/icons/mailForm.svg"
import PersonIcon from "../../assets/icons/person.svg"
import LocationIcon from "../../assets/icons/locationForm.svg"
import { contactFormApi } from "../../apis/apis"
import Container from "@material-ui/core/Container"

const TellUsSection = ({}) => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const [profession, setProfession] = useState("")
  const [projectType, setProjectType] = useState("")
  const [glass, setGlass] = useState("")
  const [windows, setWindows] = useState("")
  const [doors, setDoors] = useState("")
  const [timing, setTiming] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const onSubmit = async data => {
    console.log("data", data)
    setIsLoading(true)
    const form = new FormData()
    form.append("yourName", data.yourName)
    form.append("profession", data.profession)
    form.append("yourEmail", data.yourEmail)
    form.append("yourPhone", data.yourPhone)
    form.append("address", data.address)
    form.append("city", data.city)
    form.append("state", data.state)
    form.append("zipcode", data.zipcode)
    form.append("projectType", data.projectType)
    form.append("numberGlass", data.numberGlass)
    form.append("numberWindows", data.numberWindows)
    form.append("numberDoors", data.numberDoors)
    form.append("projectTiming", data.projectTiming)
    form.append("description", data.description)

    contactFormApi
      .post("/1005/feedback", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(response => {
        setIsLoading(false)
        if (response.data) {
          setSuccessMessage(response.data.message)
        }
      })
  }

  return (
    <S.Wrapper>
      <Container>
        <S.FormWrapper>
          <h2>Tell us about your project</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isLoading && (
              <S.FormSpinner>
                <S.CustomSpinner />
              </S.FormSpinner>
            )}
            {!successMessage ? (
              <>
                <S.FormContainer>
                  <Grid container>
                    <Grid xs={12}>
                      <S.FieldWrapper>
                        <span>Name</span>
                        <S.Field
                          placeholder="First Name, Last Name"
                          id="yourName"
                          inputRef={register}
                          required
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
                      </S.FieldWrapper>
                    </Grid>
                    <Grid xs={12}>
                      <S.ProfessionWrapper>
                        <span>I am a/an...</span>
                        <Grid container>
                          <FormControl fullWidth variant="outlined">
                            <Controller
                              as={
                                <RadioGroup
                                  row
                                  value={profession}
                                  inputRef={register}
                                  name="profession"
                                  onChange={e => setProfession(e.target.value)}
                                >
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="architect"
                                      name="architect"
                                      control={<Radio />}
                                      label="Architect"
                                    />
                                  </S.RadioWrapper>
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="homeowner"
                                      name="homeowner"
                                      control={<Radio />}
                                      label="Homeowner"
                                    />
                                  </S.RadioWrapper>
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="interior_designer"
                                      name="interior_designer"
                                      control={<Radio />}
                                      label="Interior Designer"
                                    />
                                  </S.RadioWrapper>
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="contractor"
                                      name="contractor"
                                      control={<Radio />}
                                      label="Contractor"
                                    />
                                  </S.RadioWrapper>
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="building_association"
                                      name="building_association"
                                      control={<Radio />}
                                      label="Building Association"
                                    />
                                  </S.RadioWrapper>

                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="repeat_customer"
                                      name="repeat_customer"
                                      control={<Radio />}
                                      label="Repeat Customer"
                                    />
                                  </S.RadioWrapper>
                                </RadioGroup>
                              }
                              name="profession"
                              control={control}
                            />
                          </FormControl>
                        </Grid>
                      </S.ProfessionWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.FieldWrapper havePadding>
                        <span>Email</span>
                        <S.Field
                          placeholder="Email"
                          id="yourEmail"
                          required
                          name="yourEmail"
                          inputRef={register}
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
                      </S.FieldWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.FieldWrapper>
                        <span>Phone</span>
                        <S.Field
                          placeholder="Phone"
                          id="yourPhone"
                          required
                          name="yourPhone"
                          inputRef={register}
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
                      </S.FieldWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.FieldWrapper havePadding>
                        <span>Project Address</span>
                        <S.Field
                          placeholder="Where's the project located?"
                          id="address"
                          inputRef={register}
                          required
                          name="address"
                          fullWidth
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocationIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </S.FieldWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.FieldWrapper>
                        <span>City</span>
                        <S.Field
                          placeholder="City"
                          id="city"
                          required
                          name="city"
                          inputRef={register}
                          fullWidth
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocationIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </S.FieldWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.FieldWrapper havePadding>
                        <span>State</span>
                        <S.Field
                          placeholder="State"
                          id="state"
                          required
                          inputRef={register}
                          name="state"
                          fullWidth
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocationIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </S.FieldWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.FieldWrapper>
                        <span>Zipcode</span>
                        <S.Field
                          placeholder="zipcode"
                          id="zipcode"
                          inputRef={register}
                          required
                          name="zipcode"
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
                      </S.FieldWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.ProjectTypeWrapper>
                        <S.QuestionLabel>
                          Project Type (optional)
                        </S.QuestionLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            as={
                              <RadioGroup
                                value={projectType}
                                onChange={e => setProjectType(e.target.value)}
                              >
                                <FormControlLabel
                                  value="new_construction"
                                  control={<Radio />}
                                  label="New Construction"
                                />
                                <FormControlLabel
                                  value="remodel"
                                  control={<Radio />}
                                  label="Remodel"
                                />
                                <FormControlLabel
                                  value="replacement"
                                  control={<Radio />}
                                  label="Replacement"
                                />
                              </RadioGroup>
                            }
                            name="projectType"
                            control={control}
                          />
                        </FormControl>
                      </S.ProjectTypeWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.ProjectTypeWrapper>
                        <S.QuestionLabel>
                          Number of Glass Doors planned (opcional)
                        </S.QuestionLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            as={
                              <RadioGroup
                                value={glass}
                                onChange={e => setGlass(e.target.value)}
                              >
                                <FormControlLabel
                                  value="1_4_glass"
                                  control={<Radio />}
                                  label="1-4"
                                />
                                <FormControlLabel
                                  value="5_10_glass"
                                  control={<Radio />}
                                  label="5-10"
                                />
                                <FormControlLabel
                                  value="more_glass"
                                  control={<Radio />}
                                  label="More than 10"
                                />
                              </RadioGroup>
                            }
                            name="numberGlass"
                            control={control}
                          />
                        </FormControl>
                      </S.ProjectTypeWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.ProjectTypeWrapper>
                        <S.QuestionLabel>
                          Number of Windows planned (opcional)
                        </S.QuestionLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            as={
                              <RadioGroup
                                value={windows}
                                onChange={e => setWindows(e.target.value)}
                              >
                                <FormControlLabel
                                  value="1_4_windows"
                                  control={<Radio />}
                                  label="1-4"
                                />
                                <FormControlLabel
                                  value="5_10_windows"
                                  control={<Radio />}
                                  label="5-10"
                                />
                                <FormControlLabel
                                  value="more_windows"
                                  control={<Radio />}
                                  label="More than 10"
                                />
                              </RadioGroup>
                            }
                            name="numberWindows"
                            control={control}
                          />
                        </FormControl>
                      </S.ProjectTypeWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <S.ProjectTypeWrapper>
                        <S.QuestionLabel>
                          Number of Doors planned (opcional)
                        </S.QuestionLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            as={
                              <RadioGroup
                                value={doors}
                                onChange={e => setDoors(e.target.value)}
                              >
                                <FormControlLabel
                                  value="1_4_doors"
                                  control={<Radio />}
                                  label="1-4"
                                />
                                <FormControlLabel
                                  value="5_10_doors"
                                  control={<Radio />}
                                  label="5-10"
                                />
                                <FormControlLabel
                                  value="more_doors"
                                  control={<Radio />}
                                  label="More than 10"
                                />
                              </RadioGroup>
                            }
                            name="numberDoors"
                            control={control}
                          />
                        </FormControl>
                      </S.ProjectTypeWrapper>
                    </Grid>
                    <Grid xs={12}>
                      <S.ProfessionWrapper>
                        <S.QuestionLabel>
                          Project Timing (optional)
                        </S.QuestionLabel>
                        <Grid container>
                          <FormControl fullWidth variant="outlined">
                            <Controller
                              as={
                                <RadioGroup
                                  row
                                  value={timing}
                                  onChange={e => setTiming(e.target.value)}
                                >
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="immediately"
                                      control={<Radio />}
                                      label="Immediately"
                                    />
                                  </S.RadioWrapper>
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="within_3_months"
                                      control={<Radio />}
                                      label="Within 3 months"
                                    />
                                  </S.RadioWrapper>
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="3_6_months"
                                      control={<Radio />}
                                      label="3 to 6 Months"
                                    />
                                  </S.RadioWrapper>
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="6_12_months"
                                      control={<Radio />}
                                      label="6 to 12 Months"
                                    />
                                  </S.RadioWrapper>
                                  <S.RadioWrapper>
                                    <FormControlLabel
                                      value="future_project"
                                      control={<Radio />}
                                      label="Future Project"
                                    />
                                  </S.RadioWrapper>
                                </RadioGroup>
                              }
                              name="projectTiming"
                              control={control}
                            />
                          </FormControl>
                        </Grid>
                      </S.ProfessionWrapper>
                    </Grid>

                    <Grid xs={12}>
                      <S.TextBlockWrapper>
                        <span>Project Description</span>
                        <S.TextBlock
                          id="description"
                          name="description"
                          inputRef={register}
                          multiline
                          rows={4}
                          placeholder="Tell us about your project..."
                          variant="outlined"
                        />
                      </S.TextBlockWrapper>
                    </Grid>
                    <Grid xs={12}>
                      <S.Button name="submit" type="submit" fullWidth>
                        Schedule an Appointment
                      </S.Button>
                    </Grid>
                  </Grid>
                </S.FormContainer>
              </>
            ) : (
              <S.SuccessMessage>
                <Typography>{successMessage}</Typography>
              </S.SuccessMessage>
            )}
          </form>
        </S.FormWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default TellUsSection
