import React from 'react'
import { connect } from 'react-redux'
import {
  verifyEmail,
  updateEmail
} from '../../../../../store/actions/registration/newUser/email'
import { VerifyNewUserEmail as VerifyNewUserEmailPresentational } from './VerifyNewUserEmail'

const VerifyNewUserEmailContainer = props => (
  <VerifyNewUserEmailPresentational {...props} />
)

const mapStateToProps = state => {
  const { email, emailVerificationError, emailVerificationFailure } = state.user

  return { email, emailVerificationError, emailVerificationFailure }
}

const mapDispatchToProps = { verifyEmail, updateEmail }

export const VerifyNewUserEmail = connect(mapStateToProps, mapDispatchToProps)(
  VerifyNewUserEmailContainer
)

export default VerifyNewUserEmail
