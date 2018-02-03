import { COGNITO_AUTHENTICATION } from '../actionTypes'

export const cognitoAuthentication = payload => ({
  type: COGNITO_AUTHENTICATION,
  payload
})
