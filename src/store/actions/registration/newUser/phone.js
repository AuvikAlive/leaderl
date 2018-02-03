import {
  REGISTRATION_PHONE_NUMBER_VERIFICATION,
  REGISTRATION_PHONE_NUMBER_VERIFICATION_SUCCESS,
  REGISTRATION_PHONE_NUMBER_VERIFICATION_FAILURE,
  REGISTRATION_PHONE_NUMBER_VERIFICATION_ERROR
} from '../../actionTypes'
import { push } from 'react-router-redux'

export const verifyPhoneNumber = ({ userId, code, email }) => dispatch => {
  dispatch({ type: REGISTRATION_PHONE_NUMBER_VERIFICATION })

  fetch('/api/register/verifyPhone', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, code, email })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        dispatch(phoneNumberVerificationError(responseObj.error))
      } else if (!responseObj.authenticated) {
        dispatch(
          phoneNumberVerificationFailure('Sorry, the code did not match')
        )
      } else {
        dispatch(phoneNumberVerificationSuccess(userId, email))
      }
    })
    .catch(error =>
      dispatch(
        phoneNumberVerificationError('Something went wrong, please try again!')
      )
    )
}

export const updatePhoneNumber = (phoneNumber, email) => dispatch =>
  fetch('/api/register/updatePhone', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phoneNumber, email })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        dispatch(phoneNumberVerificationError(responseObj.error))
      }
    })
    .catch(error =>
      dispatch(
        phoneNumberVerificationError('Something went wrong, please try again!')
      )
    )

export const phoneNumberVerificationSuccess = (userId, email) => dispatch => {
  dispatch({
    type: REGISTRATION_PHONE_NUMBER_VERIFICATION_SUCCESS
  })
  dispatch(push('/newUser/password'))
}

export const phoneNumberVerificationFailure = payload => ({
  type: REGISTRATION_PHONE_NUMBER_VERIFICATION_FAILURE,
  payload
})

export const phoneNumberVerificationError = payload => ({
  type: REGISTRATION_PHONE_NUMBER_VERIFICATION_ERROR,
  payload
})

export const resendPhonePin = (phoneNumber, email) => dispatch =>
  fetch('/api/register/resendPhonePin', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phoneNumber, email })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        console.log(responseObj.error)
      } else {
        console.log(responseObj)
      }
    })
    .catch(error => console.log(error))
