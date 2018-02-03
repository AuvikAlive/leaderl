import React from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { StyledAdmin } from './StyledAdmin'
import { SignIn } from './signIn/SignInContainer'
import { Dashboard } from './dashboard/Dashboard'
import { Applications } from './dashboard/applications/ApplicationsContainer'
import { Invitations } from './dashboard/invitations/InvitationsContainer'

const AuthenticatedRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/admin',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const AdminWithoutRouter = props => (
  <StyledAdmin>
    <Route exact path="/admin" component={SignIn} />
    <AuthenticatedRoute
      exact
      path="/admin/dashboard"
      component={Dashboard}
      authenticated={props.authenticated}
    />
    <AuthenticatedRoute
      exact
      path="/admin/dashboard/applications"
      component={Applications}
      authenticated={props.authenticated}
    />

    <AuthenticatedRoute
      exact
      path="/admin/dashboard/invitations"
      component={Invitations}
      authenticated={props.authenticated}
    />
  </StyledAdmin>
)

export const Admin = withRouter(AdminWithoutRouter)
