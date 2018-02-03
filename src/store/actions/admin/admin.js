import {
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_IN_FAILURE,
  ADMIN_SIGN_IN_ERROR,
  ADMIN_GET_APPLICATIONS_SUCCESS,
  ADMIN_GET_APPLICATIONS_ERROR,
  ADMIN_DELETE_APPLICATION_SUCCESS,
  ADMIN_DELETE_APPLICATION_ERROR,
  ADMIN_SEND_INVITATION_SUCCESS,
  ADMIN_SEND_INVITATION_ERROR,
  ADMIN_GET_INVITATIONS_SUCCESS,
  ADMIN_GET_INVITATIONS_ERROR,
  ADMIN_GENERATE_INVITATIONS_SUCCESS,
  ADMIN_GENERATE_INVITATIONS_ERROR,
  ADMIN_DELETE_INVITATION_SUCCESS,
  ADMIN_DELETE_INVITATION_ERROR
} from '../actionTypes'
import { push } from 'react-router-redux'

export const signIn = (email, password) => dispatch => {
  const url = '/api/admin/signin'

  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        return dispatch(signInError('Something went wrong, please try again!'))
      } else if (responseObj.authenticated) {
        return dispatch(signInSuccess())
      } else {
        return dispatch(signInFailure('Sorry, wrong credentials!'))
      }
    })
    .catch(error =>
      dispatch(signInError('Something went wrong, please try again!'))
    )
}

export const signInError = payload => ({
  type: ADMIN_SIGN_IN_ERROR,
  payload
})

export const signInSuccess = () => dispatch => {
  return [
    dispatch({
      type: ADMIN_SIGN_IN_SUCCESS
    }),
    dispatch(push('/admin/dashboard'))
  ]
}

export const signInFailure = payload => ({
  type: ADMIN_SIGN_IN_FAILURE,
  payload
})

export const getApplications = () => dispatch => {
  fetch('/api/admin/applications/')
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        console.log(responseObj.error)
        return dispatch(getApplicationsError(responseObj.error.message))
      } else {
        return dispatch(getApplicationsSuccess(responseObj))
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export const getApplicationsSuccess = payload => ({
  type: ADMIN_GET_APPLICATIONS_SUCCESS,
  payload
})

export const getApplicationsError = payload => ({
  type: ADMIN_GET_APPLICATIONS_ERROR,
  payload
})

export const deleteApplication = email => dispatch => {
  const url = `/api/admin/applications/${email}`

  fetch(url, {
    method: 'delete'
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        console.log(responseObj.error)
        return dispatch(deleteApplicationError(responseObj.error.message))
      } else {
        return dispatch(deleteApplicationSuccess(email))
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export const deleteApplicationSuccess = payload => ({
  type: ADMIN_DELETE_APPLICATION_SUCCESS,
  payload
})

export const deleteApplicationError = payload => ({
  type: ADMIN_DELETE_APPLICATION_ERROR,
  payload
})

export const sendInvitation = value => dispatch => {
  const email = value.email.S
  const phoneNumber = value.phoneNumber.S
  const firstName = value.firstName.S
  const lastName = value.lastName.S

  const url = `/api/admin/invite`

  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, phoneNumber, firstName, lastName })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        console.log(responseObj.error)
        return dispatch(sendInvitationError(responseObj.error.message))
      } else {
        return dispatch(sendInvitationSuccess(email))
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export const sendInvitationSuccess = payload => ({
  type: ADMIN_SEND_INVITATION_SUCCESS,
  payload
})

export const sendInvitationError = payload => ({
  type: ADMIN_SEND_INVITATION_ERROR,
  payload
})

export const getInvitations = () => dispatch => {
  const url = `/api/admin/invitations/`

  fetch(url)
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        console.log(responseObj.error)
        return dispatch(getInvitationsError(responseObj.error.message))
      } else {
        return dispatch(getInvitationsSuccess(responseObj))
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export const getInvitationsSuccess = payload => ({
  type: ADMIN_GET_INVITATIONS_SUCCESS,
  payload
})

export const getInvitationsError = payload => ({
  type: ADMIN_GET_INVITATIONS_ERROR,
  payload
})

export const generateInvitations = inviteCount => dispatch => {
  const url = `/api/admin/bulkInvite`

  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inviteCount })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        console.log(responseObj.error)
        return dispatch(generateInvitationsError(responseObj.error.message))
      } else {
        return dispatch(generateInvitationsSuccess())
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export const generateInvitationsSuccess = () => dispatch => {
  return [
    dispatch({
      type: ADMIN_GENERATE_INVITATIONS_SUCCESS
    }),
    dispatch(getInvitations())
  ]
}

export const generateInvitationsError = payload => ({
  type: ADMIN_GENERATE_INVITATIONS_ERROR,
  payload
})

export const deleteInvitation = (userId, bulk) => dispatch => {
  const url = `/api/admin/invitations/${userId}`

  fetch(url, {
    method: 'delete',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, bulk })
  })
    .then(response => response.json())
    .then(responseObj => {
      console.log(responseObj)
      if (responseObj.error) {
        console.log(responseObj.error)
        return dispatch(deleteInvitationError(responseObj.error.message))
      } else {
        return dispatch(deleteInvitationSuccess(userId))
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export const deleteInvitationSuccess = payload => ({
  type: ADMIN_DELETE_INVITATION_SUCCESS,
  payload
})

export const deleteInvitationError = payload => ({
  type: ADMIN_DELETE_INVITATION_ERROR,
  payload
})
