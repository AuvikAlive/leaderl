import {
  APPLICATION,
  APPLICATION_SUCCESS,
  APPLICATION_ERROR
} from '../actionTypes'
import { push } from 'react-router-redux'

export const apply = ({
  firstName,
  lastName,
  email,
  phoneNumber
}) => dispatch => {
  dispatch({
    type: APPLICATION
  })

  fetch('/api/apply', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName, lastName, email, phoneNumber })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        console.log(responseObj.error)
        dispatch(applicationError(responseObj.error))
      } else {
        dispatch(
          applicationSuccess({ firstName, lastName, email, phoneNumber })
        )
      }
    })
    .catch(error =>
      dispatch(
        dispatch(applicationError('Something went wrong, please try again!'))
      )
    )
}

export const applicationError = payload => ({
  type: APPLICATION_ERROR,
  payload
})

export const applicationSuccess = payload => dispatch => {
  dispatch({
    type: APPLICATION_SUCCESS,
    payload
  })
  dispatch(push('/apply/verifyEmail'))
}
