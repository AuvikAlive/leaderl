import React from 'react'
import { connect } from 'react-redux'
import {
  verifyEmail,
  updateEmail
} from '../../../../../store/actions/application/email'
import { VerifyEmail as VerifyEmailPresentational } from './VerifyEmail'

const VerifyEmailContainer = props => <VerifyEmailPresentational {...props} />

const mapStateToProps = state => {
  const { email, emailVerificationError, emailVerificationFailure } = state.user

  return { email, emailVerificationError, emailVerificationFailure }
}

const mapDispatchToProps = { verifyEmail, updateEmail }

export const VerifyEmail = connect(mapStateToProps, mapDispatchToProps)(
  VerifyEmailContainer
)

export default VerifyEmail
