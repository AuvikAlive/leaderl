import React from 'react'
import { connect } from 'react-redux'
import {
  verifyPhoneNumber,
  updatePhoneNumber,
  resendPhonePin
} from '../../../../../store/actions/application/phone'
import { VerifyPhoneNumber as VerifyPhoneNumberPresentational } from './VerifyPhoneNumber'

const VerifyPhoneNumberContainer = props => (
  <VerifyPhoneNumberPresentational {...props} />
)

const mapStateToProps = state => {
  const {
    phoneNumber,
    email,
    phoneNumberVerificationError,
    phoneNumberVerificationFailure
  } = state.user

  return {
    phoneNumber,
    email,
    phoneNumberVerificationError,
    phoneNumberVerificationFailure
  }
}

const mapDispatchToProps = {
  verifyPhoneNumber,
  updatePhoneNumber,
  resendPhonePin
}

export const VerifyPhoneNumber = connect(mapStateToProps, mapDispatchToProps)(
  VerifyPhoneNumberContainer
)

export default verifyPhoneNumber
