import {
  COGNITO_AUTHENTICATION,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_FAILURE,
  APPLICATION,
  APPLICATION_SUCCESS,
  APPLICATION_ERROR,
  APPLICATION_EMAIL_VERIFICATION,
  APPLICATION_EMAIL_VERIFICATION_SUCCESS,
  APPLICATION_EMAIL_VERIFICATION_ERROR,
  APPLICATION_EMAIL_VERIFICATION_FAILURE,
  APPLICATION_PHONE_NUMBER_VERIFICATION,
  APPLICATION_PHONE_NUMBER_VERIFICATION_SUCCESS,
  APPLICATION_PHONE_NUMBER_VERIFICATION_FAILURE,
  APPLICATION_PHONE_NUMBER_VERIFICATION_ERROR,
  APPLICATION_COMPLETE,
  APPLICATION_COMPLETE_SUCCESS,
  APPLICATION_COMPLETE_ERROR,
  APPLIED_USER_REGISTRATION,
  APPLIED_USER_REGISTRATION_SUCCESS,
  APPLIED_USER_REGISTRATION_ERROR,
  NEW_USER_REGISTRATION,
  NEW_USER_REGISTRATION_SUCCESS,
  NEW_USER_REGISTRATION_ERROR,
  NEW_USER_COGNITO_REGISTRATION,
  NEW_USER_COGNITO_REGISTRATION_SUCCESS,
  NEW_USER_COGNITO_REGISTRATION_ERROR,
  REGISTRATION_EMAIL_VERIFICATION,
  REGISTRATION_EMAIL_VERIFICATION_SUCCESS,
  REGISTRATION_EMAIL_VERIFICATION_FAILURE,
  REGISTRATION_EMAIL_VERIFICATION_ERROR,
  REGISTRATION_PHONE_NUMBER_VERIFICATION,
  REGISTRATION_PHONE_NUMBER_VERIFICATION_SUCCESS,
  REGISTRATION_PHONE_NUMBER_VERIFICATION_FAILURE,
  REGISTRATION_PHONE_NUMBER_VERIFICATION_ERROR,
  NEW_USER_COGNITO_COMPLETE,
  NEW_USER_COGNITO_COMPLETE_SUCCESS,
  NEW_USER_COGNITO_COMPLETE_ERROR
} from '../actions/actionTypes'

export const initialState = {
  authenticated: false
}

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case COGNITO_AUTHENTICATION:
      return {
        ...state,
        cognitoUser: action.payload
      }

    case SIGN_UP:
      return {
        ...state,
        signUpFailure: '',
        signUpError: ''
      }
    case SIGN_UP_SUCCESS:
      const userData = {}
      for (const property in action.payload) {
        userData[property] = action.payload[property].S
      }
      return {
        ...userData,
        authenticated: true,
        signUpError: '',
        signUpFailure: ''
      }
    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpFailure: '',
        signUpError: 'Something went wrong, please try again!'
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpError: '',
        signUpFailure:
          'This UserId & Invitation Code does not exist, please request for invitation if you do no have one'
      }

    case APPLICATION:
      return {
        ...state,
        applicationError: ''
      }
    case APPLICATION_SUCCESS:
      return { ...state, ...action.payload, applicationError: '' }
    case APPLICATION_ERROR:
      return { ...state, applicationError: action.payload }

    case APPLICATION_EMAIL_VERIFICATION:
      return {
        ...state,
        emailVerificationError: '',
        emailVerificationFailure: ''
      }
    case APPLICATION_EMAIL_VERIFICATION_SUCCESS:
      return {
        ...state,
        emailVerified: true,
        emailVerificationError: '',
        emailVerificationFailure: ''
      }
    case APPLICATION_EMAIL_VERIFICATION_FAILURE:
      return {
        ...state,
        emailVerificationFailure: action.payload,
        emailVerificationError: ''
      }
    case APPLICATION_EMAIL_VERIFICATION_ERROR:
      return {
        ...state,
        emailVerificationError: action.payload,
        emailVerificationFailure: ''
      }

    case APPLICATION_PHONE_NUMBER_VERIFICATION:
      return {
        ...state,
        phoneNumberVerificationError: '',
        phoneNumberVerificationFailure: ''
      }
    case APPLICATION_PHONE_NUMBER_VERIFICATION_SUCCESS:
      return {
        ...state,
        phoneNumberVerified: true,
        phoneNumberVerificationError: '',
        phoneNumberVerificationFailure: ''
      }
    case APPLICATION_PHONE_NUMBER_VERIFICATION_FAILURE:
      return {
        ...state,
        phoneNumberVerificationFailure: action.payload,
        phoneNumberVerificationError: ''
      }
    case APPLICATION_PHONE_NUMBER_VERIFICATION_ERROR:
      return {
        ...state,
        phoneNumberVerificationError: action.payload,
        phoneNumberVerificationFailure: ''
      }

    case APPLICATION_COMPLETE:
      return {
        ...state,
        applicationCompleteError: ''
      }
    case APPLICATION_COMPLETE_SUCCESS:
      return { ...state, ...action.payload, applicationCompleteError: '' }
    case APPLICATION_COMPLETE_ERROR:
      return { ...state, applicationCompleteError: action.payload }

    case APPLIED_USER_REGISTRATION:
      return { ...state, registrationError: '' }
    case APPLIED_USER_REGISTRATION_SUCCESS:
      return { ...state, ...action.payload, registrationError: '' }
    case APPLIED_USER_REGISTRATION_ERROR:
      return { ...state, registrationError: action.payload }

    case NEW_USER_REGISTRATION:
      return { ...state, registrationError: '' }
    case NEW_USER_REGISTRATION_SUCCESS:
      return { ...state, ...action.payload, registrationError: '' }
    case NEW_USER_REGISTRATION_ERROR:
      return { ...state, registrationError: action.payload }

    case REGISTRATION_EMAIL_VERIFICATION:
      return {
        ...state,
        emailVerificationError: '',
        emailVerificationFailure: ''
      }
    case REGISTRATION_EMAIL_VERIFICATION_SUCCESS:
      return {
        ...state,
        emailVerified: true,
        emailVerificationError: '',
        emailVerificationFailure: ''
      }
    case REGISTRATION_EMAIL_VERIFICATION_FAILURE:
      return {
        ...state,
        emailVerificationFailure: action.payload,
        emailVerificationError: ''
      }
    case REGISTRATION_EMAIL_VERIFICATION_ERROR:
      return {
        ...state,
        emailVerificationError: action.payload,
        emailVerificationFailure: ''
      }

    case REGISTRATION_PHONE_NUMBER_VERIFICATION:
      return {
        ...state,
        phoneNumberVerificationError: '',
        phoneNumberVerificationFailure: ''
      }
    case REGISTRATION_PHONE_NUMBER_VERIFICATION_SUCCESS:
      return {
        ...state,
        phoneNumberVerified: true,
        phoneNumberVerificationError: '',
        phoneNumberVerificationFailure: ''
      }
    case REGISTRATION_PHONE_NUMBER_VERIFICATION_FAILURE:
      return {
        ...state,
        phoneNumberVerificationFailure: action.payload,
        phoneNumberVerificationError: ''
      }
    case REGISTRATION_PHONE_NUMBER_VERIFICATION_ERROR:
      return {
        ...state,
        phoneNumberVerificationError: action.payload,
        phoneNumberVerificationFailure: ''
      }

    case NEW_USER_COGNITO_REGISTRATION:
      return { ...state, cognitoRegistrationError: '' }
    case NEW_USER_COGNITO_REGISTRATION_SUCCESS:
      return { ...state, ...action.payload, cognitoRegistrationError: '' }
    case NEW_USER_COGNITO_REGISTRATION_ERROR:
      return { ...state, cognitoRegistrationError: action.payload }

    case NEW_USER_COGNITO_COMPLETE:
      return { ...state, cognitoCompletionError: '' }
    case NEW_USER_COGNITO_COMPLETE_SUCCESS:
      return { ...state, ...action.payload, cognitoCompletionError: '' }
    case NEW_USER_COGNITO_COMPLETE_ERROR:
      return { ...state, cognitoCompletionError: action.payload }

    default:
      return state
  }
}
