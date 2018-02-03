import React, { Component } from 'react'
import { TextInput, Icon, Loading } from 'carbon-components-react'
import { StyledButton } from '../../../../../components/styledButton/StyledButton'
import { withRouter } from 'react-router-dom'
import { provideFeedback } from '../provideFeedback'

class PasswordWithoutRouter extends Component {
  state = {
    password: '',
    reEnteredPassword: '',
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
    const { password, reEnteredPassword } = this.state
    const { registerAppliedUser, userId, invitationCode } = this.props

    if (password && reEnteredPassword) {
      if (password !== reEnteredPassword) {
        provideFeedback(
          this,
          'Passwords do not match, please ensure your password!'
        )
      } else {
        this.setState({ loading: true })
        registerAppliedUser(userId, invitationCode, password)
      }
    } else {
      provideFeedback(this)
    }
  }

  onPasswordChange = event => {
    const password = event.target.value
    this.setState({ password })
  }

  onPasswordReEnter = event => {
    const reEnteredPassword = event.target.value
    this.setState({ reEnteredPassword })
  }

  render() {
    const { validity, loading } = this.state

    return (
      <div className="content">
        <h4>Confirm your Leaderal password</h4>
        <TextInput
          type="password"
          id="password"
          name="password"
          labelText="Password"
          placeholder="Password"
          onChange={this.onPasswordChange}
          onPaste={this.onPasswordChange}
        />
        <TextInput
          type="password"
          id="re-enter-password"
          name="reEnterPassword"
          labelText="Re-enter Password"
          placeholder="Password"
          onChange={this.onPasswordReEnter}
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
              <span>Confirm password</span>
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

export const Password = withRouter(PasswordWithoutRouter)
