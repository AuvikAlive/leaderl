import {
  APPLIED_USER_REGISTRATION,
  APPLIED_USER_REGISTRATION_SUCCESS,
  APPLIED_USER_REGISTRATION_ERROR
} from '../../actionTypes'
import {
  getAuthenticationDetails,
  initiateCognitoUser
} from '../../../../services/Cognito'
import { push } from 'react-router-redux'
import { removeUserFromInvitations } from '../removeUserFromInvitations'
import { cognitoAuthentication } from '../../cognito/cognito'

export const registerAppliedUser = (
  userId,
  invitationCode,
  password
) => dispatch => {
  dispatch({ type: APPLIED_USER_REGISTRATION })
  const authenticationDetails = getAuthenticationDetails(userId, invitationCode)
  const cognitoUser = initiateCognitoUser(userId)

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: () => dispatch(push('/login')),

    onFailure: error => dispatch(appliedUserRegistrationError(error.message)),

    newPasswordRequired: () => {
      dispatch(cognitoAuthentication(cognitoUser))
      dispatch(changePassword(cognitoUser, userId, password))
    }
  })
}

export const appliedUserRegistrationSuccess = payload => dispatch => {
  dispatch({
    type: APPLIED_USER_REGISTRATION_SUCCESS,
    payload
  })
  dispatch(push('/appliedUser/thankYou'))
}

export const appliedUserRegistrationError = payload => ({
  type: APPLIED_USER_REGISTRATION_ERROR,
  payload
})

export const changePassword = (cognitoUser, userId, password) => dispatch => {
  cognitoUser.completeNewPasswordChallenge(password, null, {
    onSuccess: result => {
      removeUserFromInvitations(userId)
      dispatch(appliedUserRegistrationSuccess(result))
    },
    onFailure: error => dispatch(appliedUserRegistrationError(error.message))
  })
}
