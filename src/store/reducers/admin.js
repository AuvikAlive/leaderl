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
} from '../actions/actionTypes'

export const initialState = {
  authenticated: false,
  applications: [],
  applicationsError: '',
  invitations: [],
  invitationsError: ''
}

export const admin = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_SIGN_IN_SUCCESS:
      return { authenticated: true }

    case ADMIN_SIGN_IN_FAILURE:
      return { authenticated: false, authenticationError: action.payload }

    case ADMIN_SIGN_IN_ERROR:
      return { authenticated: false, authenticationError: action.payload }

    case ADMIN_GET_APPLICATIONS_SUCCESS:
      return { ...state, applications: action.payload }

    case ADMIN_GET_APPLICATIONS_ERROR:
      return { ...state, applicationsError: action.payload }

    case ADMIN_DELETE_APPLICATION_SUCCESS:
      const newApplicants = state.applications.filter(
        value => value.email.S !== action.payload
      )
      return { ...state, applications: newApplicants }

    case ADMIN_DELETE_APPLICATION_ERROR:
      return { ...state, applicationsError: action.payload }

    case ADMIN_SEND_INVITATION_SUCCESS:
      const newApplicantsAfterInvitation = state.applications.filter(
        value => value.email.S !== action.payload
      )
      return { ...state, applications: newApplicantsAfterInvitation }

    case ADMIN_SEND_INVITATION_ERROR:
      return { ...state, applicationsError: action.payload }

    case ADMIN_GET_INVITATIONS_SUCCESS:
      return { ...state, invitations: action.payload }

    case ADMIN_GET_INVITATIONS_ERROR:
      return { ...state, invitationsError: action.payload }

    case ADMIN_GENERATE_INVITATIONS_SUCCESS:
      return { ...state, invitations: action.payload }

    case ADMIN_GENERATE_INVITATIONS_ERROR:
      return { ...state, invitationsError: action.payload }

    case ADMIN_DELETE_INVITATION_SUCCESS:
      const newInvitations = state.invitations.filter(
        value => value.userId.S !== action.payload
      )
      return { ...state, invitations: newInvitations }

    case ADMIN_DELETE_INVITATION_ERROR:
      return { ...state, invitationsError: action.payload }

    default:
      return state
  }
}
