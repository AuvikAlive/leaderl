import {
  REGISTRATION_EMAIL_VERIFICATION,
  REGISTRATION_EMAIL_VERIFICATION_SUCCESS,
  REGISTRATION_EMAIL_VERIFICATION_FAILURE,
  REGISTRATION_EMAIL_VERIFICATION_ERROR
} from '../../actionTypes'
import { push } from 'react-router-redux'

export const verifyEmail = (userId, code) => dispatch => {
  dispatch({ type: REGISTRATION_EMAIL_VERIFICATION })

  fetch('/api/register/verifyEmail', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, code })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        dispatch(emailVerificationError(responseObj.error))
      } else if (!responseObj.authenticated) {
        dispatch(emailVerificationFailure('Sorry, the code did not match'))
      } else {
        dispatch(emailVerificationSuccess())
      }
    })
    .catch(error =>
      dispatch(
        emailVerificationError('Something went wrong, please try again!')
      )
    )
}

export const updateEmail = (oldEmail, newEmail) => dispatch =>
  fetch('/api/register/updateEmail', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ oldEmail, newEmail })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        dispatch(emailVerificationError(responseObj.error))
      }
    })
    .catch(error =>
      dispatch(
        emailVerificationError('Something went wrong, please try again!')
      )
    )

export const emailVerificationSuccess = () => dispatch => {
  dispatch({
    type: REGISTRATION_EMAIL_VERIFICATION_SUCCESS
  })
  dispatch(push('/newUser/verifyPhoneNumber'))
}

export const emailVerificationFailure = payload => ({
  type: REGISTRATION_EMAIL_VERIFICATION_FAILURE,
  payload
})

export const emailVerificationError = payload => ({
  type: REGISTRATION_EMAIL_VERIFICATION_ERROR,
  payload
})
