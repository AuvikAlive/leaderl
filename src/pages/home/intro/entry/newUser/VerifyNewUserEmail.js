import React, { Component } from 'react'
import { TextInput, Icon, Loading } from 'carbon-components-react'
import { withRouter } from 'react-router-dom'
import { StyledButton } from '../../../../../components/styledButton/StyledButton'
import { StyledLink } from '../StyledLink'
import { provideFeedback } from '../provideFeedback'

class VerifyNewUserEmailWithoutRouter extends Component {
  state = {
    code: '',
    newEmail: '',
    addEmail: false,
    validity: '',
    loading: false
  }

  componentWillReceiveProps(nextProps) {
    const { emailVerificationError, emailVerificationFailure } = nextProps

    emailVerificationError && provideFeedback(this, emailVerificationError)
    emailVerificationFailure && provideFeedback(this, emailVerificationFailure)

    if (emailVerificationError || emailVerificationFailure) {
      this.setState({ loading: false })
    }
  }

  onSubmit = () => {
    const { code } = this.state
    const { email, verifyEmail } = this.props

    if (code) {
      this.setState({ loading: true })
      verifyEmail(email, code)
    } else {
      provideFeedback(
        this,
        'Please insert the code sent to your email address!'
      )
    }
  }

  onEmailChange = event => {
    const newEmail = event.target.value
    this.setState({ newEmail })
  }

  onCodeChange = event => {
    const code = event.target.value
    this.setState({ code })
  }

  resendCode = event => {
    event.preventDefault()
  }

  reEnterEmail = event => {
    event.preventDefault()
    this.setState({ addEmail: true })
  }

  updateEmail = event => {
    this.setState({ addEmail: false })
    this.props.updateEmail(this.props.email, this.state.newEmail)
  }

  render() {
    const { addEmail, validity, loading } = this.state

    return (
      <div className="content">
        <h4>Confirm your e-mail address</h4>

        {addEmail && (
          <TextInput
            type="email"
            id="email"
            name="email"
            labelText="Email"
            placeholder="john@company.com"
            onChange={this.onEmailChange}
          />
        )}

        {addEmail && (
          <div className="button-container">
            <StyledButton onClick={this.updateEmail}>
              <span>Send me confirmation code</span>
            </StyledButton>
          </div>
        )}

        {!addEmail && (
          <div className="pre-input">
            We've sent your 6-digits confirmation code to the provided e-mail
            address. Your confirmation code will expire shortly, so enter it as
            soon as possible.
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
              <span>Confirm e-mail address</span>
              <Icon
                name="icon--arrow--right"
                description="This is a description of the icon and what it does…"
              />
            </StyledButton>
          </div>
        )}

        <div className="post-input">
          Keep this window open while checking for the confirmation code. You
          haven't received the email yet?{' '}
          <StyledLink to="/" onClick={this.resendCode}>
            Resend code
          </StyledLink>
        </div>

        <div className="post-input">
          Wrong email address? Please{' '}
          <StyledLink to="/" onClick={this.reEnterEmail}>
            re-enter your email
          </StyledLink>
        </div>
      </div>
    )
  }
}

export const VerifyNewUserEmail = withRouter(VerifyNewUserEmailWithoutRouter)
