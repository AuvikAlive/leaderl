import { Config, CognitoIdentityServiceProvider } from 'aws-sdk'
import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails
} from 'amazon-cognito-identity-js'
import { cognito } from '../config/cognito'

Config.region = cognito.REGION

export const cognitoidentityserviceprovider = new CognitoIdentityServiceProvider(
  {
    region: cognito.REGION
  }
)

export const userPool = new CognitoUserPool({
  UserPoolId: cognito.USER_POOL_ID,
  ClientId: cognito.APP_CLIENT_ID
})

let cognitoUser

export const getAuthenticationDetails = (Username, Password) => {
  const authenticationDetails = new AuthenticationDetails({
    Username,
    Password
  })

  return authenticationDetails
}

export const initiateCognitoUser = Username => {
  cognitoUser = new CognitoUser({
    Username,
    Pool: userPool
  })

  return cognitoUser
}

export const getCongnitoUser = () => cognitoUser
