import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { push } from 'react-router-redux'
import {
  NEW_USER_COGNITO_REGISTRATION,
  NEW_USER_COGNITO_REGISTRATION_SUCCESS,
  NEW_USER_COGNITO_REGISTRATION_ERROR,
  NEW_USER_COGNITO_COMPLETE,
  NEW_USER_COGNITO_COMPLETE_SUCCESS,
  NEW_USER_COGNITO_COMPLETE_ERROR
} from '../../actionTypes'
import {
  getAuthenticationDetails,
  initiateCognitoUser
} from '../../../../services/Cognito'
import { removeUserFromInvitations } from '../removeUserFromInvitations'
import { cognitoAuthentication } from '../../cognito/cognito'

export const createNewUser = (
  userId,
  email,
  password,
  invitationCode
) => dispatch => {
  dispatch({ type: NEW_USER_COGNITO_REGISTRATION })

  fetch('/api/register/newUser', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, email })
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        if (
          responseObj.error ===
          'An account with the given email already exists.'
        ) {
          return dispatch(
            newUserCognitoRegistrationSuccess({
              email,
              invitationCode,
              password
            })
          )
        }
        dispatch(newUserCongitoRegistrationError(responseObj.error))
      } else {
        const { invitationCode } = responseObj
        dispatch(
          newUserCognitoRegistrationSuccess({
            email,
            invitationCode,
            password
          })
        )
      }
    })
}

export const newUserCognitoRegistrationSuccess = payload => dispatch => {
  dispatch({
    type: NEW_USER_COGNITO_REGISTRATION_SUCCESS,
    payload
  })
  dispatch(authenticateCongnitoNewUser(payload))
}

export const newUserCongitoRegistrationError = payload => ({
  type: NEW_USER_COGNITO_REGISTRATION_ERROR,
  payload
})

export const authenticateCongnitoNewUser = ({
  email,
  invitationCode,
  password
}) => dispatch => {
  const authenticationDetails = getAuthenticationDetails(email, invitationCode)
  const cognitoUser = initiateCognitoUser(email)

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: result => dispatch(push('/login')),
    onFailure: error =>
      dispatch(newUserCongitoRegistrationError(error.message)),
    newPasswordRequired: () => {
      dispatch(cognitoAuthentication(cognitoUser))
      dispatch(changeNewUserPassword(cognitoUser, email, password))
    }
  })
}

export const changeNewUserPassword = (
  cognitoUser,
  userId,
  password
) => dispatch => {
  cognitoUser.completeNewPasswordChallenge(password, null, {
    onSuccess: result => {
      removeUserFromInvitations(userId)
      dispatch(push('/newUser/finalise'))
    },
    onFailure: error => dispatch(newUserCongitoRegistrationError(error.message))
  })
}

export const finalise = ({
  cognitoUser,
  email,
  password,
  birthDay,
  title,
  organisation,
  country,
  city
}) => dispatch => {
  dispatch({ type: NEW_USER_COGNITO_COMPLETE })

  let attributeList = []

  const birthdate = {
    Name: 'birthdate',
    Value: birthDay
  }
  const birthdateAttribute = new CognitoUserAttribute(birthdate)
  attributeList.push(birthdateAttribute)

  const titleValue = {
    Name: 'custom:title',
    Value: title
  }
  const titleAttribute = new CognitoUserAttribute(titleValue)
  attributeList.push(titleAttribute)

  const organisationValue = {
    Name: 'custom:organisation',
    Value: organisation
  }
  const organisationAttribute = new CognitoUserAttribute(organisationValue)
  attributeList.push(organisationAttribute)

  const countryValue = {
    Name: 'custom:country',
    Value: country
  }
  const countryAttribute = new CognitoUserAttribute(countryValue)
  attributeList.push(countryAttribute)

  const cityValue = {
    Name: 'custom:city',
    Value: city
  }
  const cityAttribute = new CognitoUserAttribute(cityValue)
  attributeList.push(cityAttribute)

  cognitoUser.updateAttributes(attributeList, (error, result) => {
    if (error) {
      console.log(error)
      return dispatch(newUserCongitoCompletionError(error.message))
    }
    dispatch(
      newUserCognitoCompletetionSuccess({
        birthDay,
        title,
        organisation,
        country,
        city
      })
    )
  })
}

export const newUserCognitoCompletetionSuccess = payload => dispatch => {
  dispatch({
    type: NEW_USER_COGNITO_COMPLETE_SUCCESS,
    payload
  })
  dispatch(push('/newUser/thankYou'))
}

export const newUserCongitoCompletionError = payload => ({
  type: NEW_USER_COGNITO_COMPLETE_ERROR,
  payload
})
