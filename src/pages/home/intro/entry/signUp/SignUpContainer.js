import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../../../../store/actions/signUp/signUp'
import { SignUp as SignUpPresentational } from './SignUp'

const SignUpContainer = props => <SignUpPresentational {...props} />

const mapStateToProps = state => {
  const { signUpError, signUpFailure, registrationError } = state.user

  return { signUpError, signUpFailure, registrationError }
}

const mapDispatchToProps = { signUp }

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(
  SignUpContainer
)

export default SignUp
