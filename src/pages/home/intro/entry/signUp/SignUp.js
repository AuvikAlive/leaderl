import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
  TextInput,
  Checkbox,
  Icon,
  TooltipSimple,
  Loading
} from 'carbon-components-react'
import { StyledButton } from '../../../../../components/styledButton/StyledButton'
import { StyledLink } from '../StyledLink'
import { StyledInvitationInput } from './StyledInvitationInput'
import { provideFeedback } from '../provideFeedback'

class SignUpWithoutRouter extends Component {
  state = {
    userId: '',
    invitationCode: '',
    agree: true,
    validity: '',
    loading: false
  }

  componentWillReceiveProps(nextProps) {
    const { signUpError, signUpFailure, registrationError } = nextProps

    signUpError && provideFeedback(this, signUpError)
    signUpFailure && provideFeedback(this, signUpFailure)
    registrationError && provideFeedback(this, registrationError)

    if (signUpError || signUpFailure || registrationError) {
      this.setState({ loading: false })
    }
  }

  onSubmit = () => {
    const { userId, invitationCode, agree } = this.state

    if (userId && invitationCode && agree) {
      this.setState({ loading: true })
      this.props.signUp(userId, invitationCode)
    } else {
      provideFeedback(this)
    }
  }

  onUserIdChange = event => {
    const userId = event.target.value
    this.setState({ userId })
  }

  onInvitationCodeChange = event => {
    const invitationCode = event.target.value
    this.setState({ invitationCode })
  }

  onCheckBoxChange = agree => {
    this.setState({ agree })
  }

  render() {
    const { loading, agree } = this.state

    return (
      <div className="content">
        <h4>Apply to become a Leaderal</h4>
        <TextInput
          id="userId"
          name="userId"
          labelText="User ID"
          placeholder="john@company.com"
          onChange={this.onUserIdChange}
        />

        <StyledInvitationInput>
          <StyledLink to="/apply">Request invite</StyledLink>
          <TooltipSimple
            text="Don't have one? Request invite."
            className="some-class"
          />
          <TextInput
            id="code"
            name="code"
            labelText="Invitation code"
            placeholder="DKFJL120LFLJ343"
            onChange={this.onInvitationCodeChange}
            onPaste={this.onInvitationCodeChange}
          />
        </StyledInvitationInput>

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

        <div className="first-sign-in-validity">{this.state.validity}</div>

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

export const SignUp = withRouter(SignUpWithoutRouter)
