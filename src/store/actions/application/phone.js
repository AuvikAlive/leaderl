import {
  APPLICATION_PHONE_NUMBER_VERIFICATION,
  APPLICATION_PHONE_NUMBER_VERIFICATION_SUCCESS,
  APPLICATION_PHONE_NUMBER_VERIFICATION_FAILURE,
  APPLICATION_PHONE_NUMBER_VERIFICATION_ERROR
} from '../actionTypes'
import { push } from 'react-router-redux'

export const verifyPhoneNumber = (email, code) => dispatch => {
  dispatch({ type: APPLICATION_PHONE_NUMBER_VERIFICATION })

  fetch('/api/apply/verifyPhone', {
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
        dispatch(phoneNumberVerificationError(responseObj.error))
      } else if (!responseObj.authenticated) {
        dispatch(
          phoneNumberVerificationFailure('Sorry, the code did not match')
        )
      } else {
        dispatch(phoneNumberVerificationSuccess())
      }
    })
    .catch(error =>
      dispatch(
        phoneNumberVerificationError('Something went wrong, please try again!')
      )
    )
}

export const updatePhoneNumber = (phoneNumber, email) => dispatch =>
  fetch('/api/apply/updatePhone', {
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

export const phoneNumberVerificationSuccess = () => dispatch => {
  dispatch({
    type: APPLICATION_PHONE_NUMBER_VERIFICATION_SUCCESS
  })
  dispatch(push('/apply/finalise'))
}

export const phoneNumberVerificationFailure = payload => ({
  type: APPLICATION_PHONE_NUMBER_VERIFICATION_FAILURE,
  payload
})

export const phoneNumberVerificationError = payload => ({
  type: APPLICATION_PHONE_NUMBER_VERIFICATION_ERROR,
  payload
})

export const resendPhonePin = (phoneNumber, email) => dispatch => {
  fetch('/api/apply/resendPhonePin', {
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
      }
    })
    .catch(error => console.log(error))
}
