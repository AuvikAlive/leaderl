import React, { Component } from 'react'
import { TextInput, Icon, Loading } from 'carbon-components-react'
import { withRouter } from 'react-router-dom'
import { StyledButton } from '../../../../../components/styledButton/StyledButton'
import { StyledLink } from '../StyledLink'
import { provideFeedback } from '../provideFeedback'

class VerifyNewUserPhoneNumberWithoutRouter extends Component {
  state = {
    code: '',
    newPhoneNumber: '',
    addPhoneNumber: false,
    validity: '',
    loading: false
  }

  componentWillReceiveProps(nextProps) {
    const {
      phoneNumberVerificationError,
      phoneNumberVerificationFailure
    } = nextProps

    phoneNumberVerificationError &&
      provideFeedback(this, phoneNumberVerificationError)
    phoneNumberVerificationFailure &&
      provideFeedback(this, phoneNumberVerificationFailure)

    if (phoneNumberVerificationError || phoneNumberVerificationFailure) {
      this.setState({ loading: false })
    }
  }

  onSubmit = () => {
    const { code } = this.state
    const { userId, email, verifyPhoneNumber } = this.props

    if (code) {
      this.setState({ loading: true })
      verifyPhoneNumber({ userId, code, email })
    } else {
      provideFeedback(
        this,
        'Please insert the code sent to your mobile number!'
      )
    }
  }

  onPhoneNumberChange = event => {
    const newPhoneNumber = event.target.value
    this.setState({ newPhoneNumber })
  }

  reEnterPhoneNumber = event => {
    event.preventDefault()
    this.setState({ addPhoneNumber: true })
  }

  updatePhoneNumber = event => {
    this.setState({ addPhoneNumber: false })
    const { email, updatePhoneNumber } = this.props

    updatePhoneNumber(this.state.newPhoneNumber, email)
  }

  onCodeChange = event => {
    const code = event.target.value
    this.setState({ code })
  }

  resendCode = event => {
    event.preventDefault()
    const { phoneNumber, email } = this.props
    this.props.resendPhonePin(phoneNumber, email)
  }

  render() {
    const { addPhoneNumber, validity, loading } = this.state

    return (
      <div className="content">
        <h4>Confirm your mobile number</h4>

        {addPhoneNumber && (
          <TextInput
            id="phone-number"
            name="PhoneNumber"
            labelText="Mobile Number"
            placeholder="Ex: +4407465267327"
            onChange={this.onPhoneNumberChange}
          />
        )}

        {addPhoneNumber && (
          <div className="button-container">
            <StyledButton onClick={this.updatePhoneNumber}>
              <span>Send me confirmation code</span>
            </StyledButton>
          </div>
        )}

        {!addPhoneNumber && (
          <div className="pre-input">
            We've sent your 6-digits confirmation code to your mobile number.
            The code will expire shortly, so enter it as soon as possible.
          </div>
        )}

        <TextInput
          id="code"
          labelText="Confirmation code"
          placeholder="6 digits confirmation code"
          onChange={this.onCodeChange}
          onPaste={this.onCodeChange}
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
              <span>Confirm mobile number</span>
              <Icon
                name="icon--arrow--right"
                description="This is a description of the icon and what it does…"
              />
            </StyledButton>
          </div>
        )}

        <div className="post-input">
          Keep this window open while checking for the confirmation code. You
          haven't received the SMS yet?{' '}
          <StyledLink to="/" onClick={this.resendCode}>
            Resend code
          </StyledLink>
        </div>

        <div className="post-input">
          Wrong mobile number? Please{' '}
          <StyledLink to="/" onClick={this.reEnterPhoneNumber}>
            re-enter your number
          </StyledLink>
        </div>
      </div>
    )
  }
}

export const VerifyNewUserPhoneNumber = withRouter(
  VerifyNewUserPhoneNumberWithoutRouter
)
