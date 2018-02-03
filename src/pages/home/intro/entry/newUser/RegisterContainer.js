import React from 'react'
import { connect } from 'react-redux'
import { registerNewUser } from '../../../../../store/actions/registration/newUser/registration'
import { Register as RegisterPresentational } from './Register'

const RegisterContainer = props => <RegisterPresentational {...props} />

const mapStateToProps = state => {
  const { userId, invitationCode, registrationError } = state.user

  return { userId, invitationCode, registrationError }
}

const mapDispatchToProps = { registerNewUser }

export const Register = connect(mapStateToProps, mapDispatchToProps)(
  RegisterContainer
)

export default Register
