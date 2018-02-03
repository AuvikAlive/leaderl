import React from 'react'
import { connect } from 'react-redux'
import {
  verifyPhoneNumber,
  updatePhoneNumber,
  resendPhonePin
} from '../../../../../store/actions/registration/newUser/phone'
import { VerifyNewUserPhoneNumber as VerifyNewUserPhoneNumberPresentational } from './VerifyNewUserPhoneNumber'

const VerifyNewUserPhoneNumberContainer = props => (
  <VerifyNewUserPhoneNumberPresentational {...props} />
)

const mapStateToProps = state => {
  const {
    userId,
    phoneNumber,
    email,
    phoneNumberVerificationError,
    phoneNumberVerificationFailure
  } = state.user

  return {
    userId,
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

export const VerifyNewUserPhoneNumber = connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyNewUserPhoneNumberContainer)

export default VerifyNewUserPhoneNumber
