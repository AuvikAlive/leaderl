import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { TextInput, Checkbox, Icon, Loading } from 'carbon-components-react'
import { StyledButton } from '../../../../../components/styledButton/StyledButton'
import { StyledLink } from '../StyledLink'
import { provideFeedback } from '../provideFeedback'

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const phoneRegex = /[+L-NPS[-\]p{}]/

class RegisterWithoutRouter extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    agree: true,
    validity: '',
    emailInvalid: false,
    phoneInvalid: false,
    emailBlurred: false,
    phoneBlurred: false,
    loading: false
  }

  componentWillReceiveProps(nextProps) {
    const { registrationError } = nextProps

    if (registrationError) {
      provideFeedback(this, registrationError)
      this.setState({ loading: false })
    }
  }

  onSubmit = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      emailInvalid,
      phoneInvalid,
      agree
    } = this.state
    const { userId, invitationCode, registerNewUser } = this.props
    if (
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      !emailInvalid &&
      !phoneInvalid &&
      agree
    ) {
      this.setState({ loading: true })
      registerNewUser({
        userId,
        invitationCode,
        email,
        phoneNumber,
        firstName,
        lastName
      })
    } else {
      provideFeedback(this)
    }
  }

  onFirstNameChange = event => {
    const firstName = event.target.value
    this.setState({ firstName })
  }

  onLastNameChange = event => {
    const lastName = event.target.value
    this.setState({ lastName })
  }

  onEmailChange = event => {
    const email = event.target.value
    const { emailBlurred } = this.state
    let emailInvalid = false
    if (emailBlurred) {
      emailInvalid = !emailRegex.test(email)
    }
    this.setState({ email, emailInvalid })
  }

  onEmailBlur = () => {
    const { emailBlurred, email } = this.state
    if (!emailBlurred) {
      const emailInvalid = !emailRegex.test(email)
      this.setState({ emailBlurred: true, emailInvalid })
    }
  }

  onPhoneChange = event => {
    const phoneNumber = `${event.target.value}`
    const { phoneBlurred } = this.state
    let phoneInvalid = false
    if (phoneBlurred) {
      phoneInvalid = !phoneRegex.test(phoneNumber)
    }
    this.setState({ phoneNumber, phoneInvalid })
  }

  onPhoneBlur = () => {
    const { phoneBlurred, phoneNumber } = this.state
    if (!phoneBlurred) {
      const phoneInvalid = !phoneRegex.test(phoneNumber)
      this.setState({ phoneBlurred: true, phoneInvalid })
    }
  }

  onCheckBoxChange = agree => {
    this.setState({ agree })
  }

  render() {
    const { emailInvalid, phoneInvalid, agree, validity, loading } = this.state

    return (
      <div className="content">
        <h4>Register to become a Leaderal</h4>
        <div className="inputs">
          <TextInput
            id="first_name"
            labelText="First name"
            placeholder="John"
            onChange={this.onFirstNameChange}
          />
          <TextInput
            id="last_name"
            labelText="Last name"
            placeholder="Doe"
            onChange={this.onLastNameChange}
          />
        </div>

        <TextInput
          type="email"
          id="email"
          name="email"
          labelText="Email"
          placeholder="john@company.com"
          invalid={emailInvalid}
          invalidText=" Please enter a valid email address"
          onChange={this.onEmailChange}
          onBlur={this.onEmailBlur}
        />

        <TextInput
          type="tel"
          id="mobile"
          name="mobile"
          labelText="Mobile number"
          placeholder="Ex: +4407465267327"
          invalid={phoneInvalid}
          invalidText=" Please enter a valid phone number Ex: +4407465267327"
          onChange={this.onPhoneChange}
          onBlur={this.onPhoneBlur}
        />

        <div>
          <Checkbox
            id="agree"
            labelText={
              <div>
                I agree with the{' '}
                <StyledLink to="/">terms and conditions</StyledLink>
              </div>
            }
            checked={agree}
            onChange={this.onCheckBoxChange}
          />
        </div>

        <div className="first-sign-in-validity">{validity}</div>

        {loading && (
          <div className="loader">
            <Loading small withOverlay={false} />
          </div>
        )}

        {!loading && (
          <div className="button-container">
            <StyledButton onClick={this.onSubmit}>
              <span>Become a Leaderal</span>
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

export const Register = withRouter(RegisterWithoutRouter)
