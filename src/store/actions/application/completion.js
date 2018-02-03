import {
  APPLICATION_COMPLETE,
  APPLICATION_COMPLETE_SUCCESS,
  APPLICATION_COMPLETE_ERROR
} from '../actionTypes'
import { push } from 'react-router-redux'

export const finalise = ({
  email,
  birthDay,
  title,
  organisation,
  country,
  city
}) => dispatch => {
  dispatch({
    type: APPLICATION_COMPLETE
  })
  fetch('/api/apply/finalise', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      birthDay,
      title,
      organisation,
      country,
      city
    })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        dispatch(applicationCompleteError(responseObj.error))
      } else {
        dispatch(
          applicationCompleteSuccess({
            birthDay,
            title,
            organisation,
            country,
            city
          })
        )
      }
    })
    .catch(error =>
      dispatch(
        applicationCompleteError('Something went wrong, please try again!')
      )
    )
}

export const applicationCompleteSuccess = payload => dispatch => {
  dispatch({
    type: APPLICATION_COMPLETE_SUCCESS,
    payload
  })
  dispatch(push('/apply/thankYou'))
}

export const applicationCompleteError = payload => ({
  type: APPLICATION_COMPLETE_ERROR,
  payload
})
