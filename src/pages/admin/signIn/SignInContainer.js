import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/admin/admin'
import { SignIn as SignInPresentational } from './SignIn'

const SignInContainer = props => <SignInPresentational {...props} />

const mapStateToProps = state => {
  const { authenticationError } = state.admin

  return { authenticationError }
}

const mapDispatchToProps = { signIn }

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(
  SignInContainer
)
