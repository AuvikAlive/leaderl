import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Tile, TextInput, Button } from 'carbon-components-react'
import { StyledSignIn } from './StyledSignIn'

class SignInWithoutRouter extends Component {
  state = {
    email: '',
    password: '',
    validity: ''
  }

  componentWillReceiveProps(nextProps) {
    nextProps.authenticationError &&
      this.provideFeedback(nextProps.authenticationError)
  }

  onSubmit = () => {
    const { email, password } = this.state

    if (email && password) {
      this.props.signIn(email, password)
    } else {
      this.provideFeedback()
    }
  }

  provideFeedback = message => {
    this.setState({
      validity: message || 'Please fill up all the requited fields properly'
    })
    setTimeout(() => this.setState({ validity: '' }), 3000)
  }

  onEmailChange = event => {
    const email = event.target.value
    this.setState({ email })
  }

  onPasswordChange = event => {
    const password = event.target.value
    this.setState({ password })
  }

  render() {
    return (
      <StyledSignIn>
        <Tile>
          <h4>Sign In to Admin Dashboard</h4>
          <TextInput
            type="email"
            id="email"
            name="email"
            labelText="Email"
            placeholder="john@company.com"
            onChange={this.onEmailChange}
          />

          <TextInput
            type="password"
            id="password"
            name="password"
            labelText="Password"
            placeholder="Password"
            onChange={this.onPasswordChange}
            onPaste={this.onPasswordChange}
          />

          <div className="validity-text">{this.state.validity}</div>

          <div className="button-container">
            <Button onClick={this.onSubmit}>
              <span>Sign In</span>
            </Button>
          </div>
        </Tile>
      </StyledSignIn>
    )
  }
}

export const SignIn = withRouter(SignInWithoutRouter)
