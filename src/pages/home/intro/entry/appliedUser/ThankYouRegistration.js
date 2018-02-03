import React from 'react'
import { StyledButton } from '../../../../../components/styledButton/StyledButton'
import { StyledLink } from '../StyledLink'

export const ThankYouRegistration = () => (
  <div className="content">
    <h4>Thank You!</h4>

    <div className="pre-input">
      Thank you for completing registration to become a Leaderal.
    </div>

    <div className="button-container button-container-thank-you">
      <StyledButton onClick={this.onSubmit}>
        <span>Share with your network</span>
      </StyledButton>
    </div>

    <div className="post-input">
      You can now login to your account with your userId and password. If you
      have any questions please <StyledLink to="/">contact us</StyledLink>
    </div>
  </div>
)

export default ThankYouRegistration
