import {
  NEW_USER_REGISTRATION,
  NEW_USER_REGISTRATION_SUCCESS,
  NEW_USER_REGISTRATION_ERROR
} from '../../actionTypes'
import { push } from 'react-router-redux'

export const registerNewUser = ({
  userId,
  invitationCode,
  email,
  phoneNumber,
  firstName,
  lastName
}) => dispatch => {
  dispatch({ type: NEW_USER_REGISTRATION })
  fetch('/api/register', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, email, phoneNumber, firstName, lastName })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        console.log(responseObj.error)
        dispatch(newRegistrationError(responseObj.error))
      } else {
        dispatch(
          newRegistrationSuccess({
            userId,
            invitationCode,
            email,
            phoneNumber,
            firstName,
            lastName
          })
        )
        dispatch(push('/newUser/verifyEmail'))
      }
    })
    .catch(error => dispatch(newRegistrationError(error)))
}

export const newRegistrationSuccess = payload => dispatch => {
  dispatch({
    type: NEW_USER_REGISTRATION_SUCCESS,
    payload
  })
}

export const newRegistrationError = payload => ({
  type: NEW_USER_REGISTRATION_ERROR,
  payload
})
