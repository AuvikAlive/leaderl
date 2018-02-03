import React, { Component } from 'react'
import {
  TextInput,
  Icon,
  Checkbox,
  DatePicker,
  DatePickerInput,
  Loading
} from 'carbon-components-react'
import { StyledButton } from '../../../../../components/styledButton/StyledButton'
import { withRouter } from 'react-router-dom'
import { provideFeedback } from '../provideFeedback'

class FinaliseNewUserWithoutRouter extends Component {
  state = {
    birthDay: '',
    title: '',
    organisation: '',
    country: '',
    city: '',
    agree: true,
    validity: '',
    loading: false
  }

  componentWillReceiveProps(nextProps) {
    const { cognitoCompletionError, cognitoRegistrationError } = nextProps

    cognitoCompletionError && provideFeedback(this, cognitoCompletionError)
    cognitoRegistrationError && provideFeedback(this, cognitoRegistrationError)

    if (cognitoCompletionError || cognitoRegistrationError) {
      this.setState({ loading: false })
    }
  }

  onSubmit = () => {
    const { birthDay, title, organisation, country, city, agree } = this.state
    const { cognitoUser, email, password, finalise } = this.props

    if (birthDay && title && organisation && country && city && agree) {
      this.setState({ loading: true })
      finalise({
        cognitoUser,
        email,
        password,
        birthDay,
        title,
        organisation,
        country,
        city
      })
    } else {
      provideFeedback(this)
    }
  }

  onBirthDayChange = () => {
    const birthDay = this.datePicker.inputField.value
    this.setState({ birthDay })
  }

  onTitleChange = event => {
    const title = event.target.value
    this.setState({ title })
  }

  onOrganisationChange = event => {
    const organisation = event.target.value
    this.setState({ organisation })
  }

  onCountryChange = event => {
    const country = event.target.value
    this.setState({ country })
  }

  onCityChange = event => {
    const city = event.target.value
    this.setState({ city })
  }

  onCheckBoxChange = agree => {
    this.setState({ agree })
  }

  render() {
    const { agree, validity, loading } = this.state

    return (
      <div className="content">
        <h4>Finalise Leaderal registration</h4>

        <DatePicker
          id="date-picker"
          datePickerType="single"
          dateFormat="Y-m-d"
          onChange={this.onBirthDayChange}
          ref={input => {
            this.datePicker = input
          }}
        >
          <DatePickerInput
            className="some-class"
            id="date-picker-input-id"
            labelText="Date of Birth"
            placeholder="yyyy-mm-dd"
            onClick={this.onBirthDayChange}
            onChange={this.onBirthDayChange}
          />
        </DatePicker>

        <TextInput
          id="title"
          labelText="Title"
          placeholder="Ex: CEO"
          onChange={this.onTitleChange}
        />

        <div>
          <TextInput
            id="organisation"
            labelText="Organisation Name"
            placeholder="Ex: Facebook, Inc."
            onChange={this.onOrganisationChange}
          />
        </div>

        <div className="inputs">
          <TextInput
            id="country"
            labelText="Country"
            placeholder="Country"
            onChange={this.onCountryChange}
          />
          <TextInput
            id="city"
            labelText="City"
            placeholder="City"
            onChange={this.onCityChange}
          />
        </div>

        <Checkbox
          id="agree"
          labelText={<div>Subscribe to newsletter and marketing content</div>}
          checked={agree}
          onChange={this.onCheckBoxChange}
        />

        <div className="first-sign-in-validity">{validity}</div>

        {loading && (
          <div className="loader">
            <Loading small withOverlay={false} />
          </div>
        )}

        {!loading && (
          <div className="button-container">
            <StyledButton onClick={this.onSubmit}>
              <span>Complete application</span>
              <Icon
                name="icon--arrow--right"
                description="This is a description of the icon and what it does…"
              />
            </StyledButton>
          </div>
        )}
      </div>
    )
  }
}

export const FinaliseNewUser = withRouter(FinaliseNewUserWithoutRouter)
