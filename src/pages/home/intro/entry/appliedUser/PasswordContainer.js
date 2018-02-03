import React from 'react'
import { connect } from 'react-redux'
import { registerAppliedUser } from '../../../../../store/actions/registration/appliedUser/appliedUser'
import { Password as PasswordPresentational } from './Password'

const PasswordContainer = props => <PasswordPresentational {...props} />

const mapStateToProps = state => {
  const { userId, invitationCode, registrationError } = state.user

  return { userId, invitationCode, registrationError }
}

const mapDispatchToProps = { registerAppliedUser }

export const Password = connect(mapStateToProps, mapDispatchToProps)(
  PasswordContainer
)

export default PasswordContainer
