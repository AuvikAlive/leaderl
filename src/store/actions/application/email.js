import {
  APPLICATION_EMAIL_VERIFICATION,
  APPLICATION_EMAIL_VERIFICATION_SUCCESS,
  APPLICATION_EMAIL_VERIFICATION_FAILURE,
  APPLICATION_EMAIL_VERIFICATION_ERROR
} from '../actionTypes'
import { push } from 'react-router-redux'

export const verifyEmail = (email, code) => dispatch => {
  dispatch({ type: APPLICATION_EMAIL_VERIFICATION })

  fetch('/api/apply/verifyEmail', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, code })
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
  fetch('/api/apply/updateEmail', {
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
    type: APPLICATION_EMAIL_VERIFICATION_SUCCESS
  })
  dispatch(push('/apply/verifyPhoneNumber'))
}

export const emailVerificationFailure = payload => ({
  type: APPLICATION_EMAIL_VERIFICATION_FAILURE,
  payload
})

export const emailVerificationError = payload => ({
  type: APPLICATION_EMAIL_VERIFICATION_ERROR,
  payload
})
