import React from 'react'
import { StyledButton } from '../../../../../components/styledButton/StyledButton'
import { StyledLink } from '../StyledLink'

export const ThankYouApplication = () => (
  <div className="content">
    <h4>Thank You!</h4>

    <div className="pre-input">
      Thank you for your application to become a new Leaderal.
    </div>

    <div className="button-container button-container-thank-you">
      <StyledButton onClick={this.onSubmit}>
        <span>Share with your network</span>
      </StyledButton>
    </div>

    <div className="pre-input">
      We'll evaluate your application and if we believe you are a good fit for
      becoming a member of our organisation, we'll send you your confirmation.
      The evaluation process can take up to 14 days.
    </div>

    <div className="post-input">
      You can check the status of your application anytime by loging in with
      your email and selected password. <StyledLink to="/">Log in</StyledLink>
    </div>

    <div className="post-input">
      If you have any questions please{' '}
      <StyledLink to="/">contact us</StyledLink>
    </div>
  </div>
)

export default ThankYouApplication
