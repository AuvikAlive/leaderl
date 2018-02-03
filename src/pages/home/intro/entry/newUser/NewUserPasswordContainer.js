import React from 'react'
import { connect } from 'react-redux'
import { createNewUser } from '../../../../../store/actions/registration/newUser/cognito'
import { NewUserPassword as PasswordPresentational } from './NewUserPassword'

const PasswordContainer = props => <PasswordPresentational {...props} />

const mapStateToProps = state => {
  const { userId, email, invitationCode, cognitoRegistrationError } = state.user

  return { userId, email, invitationCode, cognitoRegistrationError }
}

const mapDispatchToProps = { createNewUser }

export const NewUserPassword = connect(mapStateToProps, mapDispatchToProps)(
  PasswordContainer
)

export default PasswordContainer
