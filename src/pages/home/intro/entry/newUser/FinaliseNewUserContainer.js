import React from 'react'
import { connect } from 'react-redux'
import { finalise } from '../../../../../store/actions/registration/newUser/cognito'
import { FinaliseNewUser as FinaliseNewUserPresentational } from './FinaliseNewUser'

const FinaliseNewUserContainer = props => (
  <FinaliseNewUserPresentational {...props} />
)

const mapStateToProps = state => {
  const {
    cognitoCompletionError,
    cognitoRegistrationError,
    cognitoUser,
    email,
    password
  } = state.user

  return {
    cognitoCompletionError,
    cognitoRegistrationError,
    cognitoUser,
    email,
    password
  }
}

const mapDispatchToProps = { finalise }

export const FinaliseNewUser = connect(mapStateToProps, mapDispatchToProps)(
  FinaliseNewUserContainer
)

export default FinaliseNewUser
