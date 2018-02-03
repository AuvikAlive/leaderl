import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_ERROR
} from '../actionTypes'
import { push } from 'react-router-redux'

export const signUp = (userId, invitationCode) => dispatch => {
  dispatch({
    type: SIGN_UP
  })

  fetch('/api/signup/invitation', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, invitationCode })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        dispatch(signUpError(responseObj.error))
      } else if (responseObj.authenticated) {
        dispatch(signUpSuccess(responseObj.userData))
      } else {
        dispatch(signUpFailure())
      }
    })
    .catch(error =>
      dispatch(signUpError('Something went wrong, please try again!'))
    )
}

export const signUpError = payload => ({
  type: SIGN_UP_ERROR,
  payload
})

export const signUpSuccess = payload => dispatch => {
  dispatch({
    type: SIGN_UP_SUCCESS,
    payload
  })
  if (payload.bulk) {
    dispatch(push('/newUser/register'))
  } else {
    dispatch(push('/appliedUser/password'))
  }
}

export const signUpFailure = () => ({
  type: SIGN_UP_FAILURE
})
