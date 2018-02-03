import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { StyledEntry } from './StyledEntry'
import { SignUp } from './signUp/SignUpContainer'
// import { Apply } from './apply/ApplyContainer'
// import { VerifyEmail } from './apply/VerifyEmailContainer'
// import { VerifyPhoneNumber } from './apply/VerifyPhoneNumberContainer'
// import { Finalise } from './apply/FinaliseContainer'
// import { ThankYouApplication } from './apply/ThankYouApplication'
// import { Password } from './appliedUser/PasswordContainer'
// import { ThankYouRegistration } from './appliedUser/ThankYouRegistration'
// import { Register } from './newUser/RegisterContainer'
// import { VerifyNewUserEmail } from './newUser/VerifyNewUserEmailContainer'
// import { VerifyNewUserPhoneNumber } from './newUser/VerifyNewUserPhoneNumberContainer'
// import { NewUserPassword } from './newUser/NewUserPasswordContainer'
// import { FinaliseNewUser } from './newUser/FinaliseNewUserContainer'
import { asyncComponent } from '../../../../components/asyncComponent/AsyncComponent'
const Apply = asyncComponent(() => import('./apply/ApplyContainer'))
const VerifyEmail = asyncComponent(() => import('./apply/VerifyEmailContainer'))
const VerifyPhoneNumber = asyncComponent(() =>
  import('./apply/VerifyPhoneNumberContainer')
)
const Finalise = asyncComponent(() => import('./apply/FinaliseContainer'))
const ThankYouApplication = asyncComponent(() =>
  import('./apply/ThankYouApplication')
)
const Password = asyncComponent(() => import('./appliedUser/PasswordContainer'))
const ThankYouRegistration = asyncComponent(() =>
  import('./appliedUser/ThankYouRegistration')
)
const Register = asyncComponent(() => import('./newUser/RegisterContainer'))
const VerifyNewUserEmail = asyncComponent(() =>
  import('./newUser/VerifyNewUserEmailContainer')
)
const VerifyNewUserPhoneNumber = asyncComponent(() =>
  import('./newUser/VerifyNewUserPhoneNumberContainer')
)
const NewUserPassword = asyncComponent(() =>
  import('./newUser/NewUserPasswordContainer')
)
const FinaliseNewUser = asyncComponent(() =>
  import('./newUser/FinaliseNewUserContainer')
)

const EntryWithoutRouter = () => (
  <StyledEntry className="bx--col-xs-12 bx--col-sm-10 bx--col-md-5 bx--col-lg-5 bx--col-xl-4 bx--col-vl-3 bx--col-xxl-2 offset-xl-2 offset-vl-1 offset-xxl-1">
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/events" component={SignUp} />
      <Route exact path="/apply" component={Apply} />
      <Route exact path="/apply/verifyEmail" component={VerifyEmail} />
      <Route
        exact
        path="/apply/verifyPhoneNumber"
        component={VerifyPhoneNumber}
      />
      <Route exact path="/apply/finalise" component={Finalise} />
      <Route exact path="/apply/thankYou" component={ThankYouApplication} />
      <Route exact path="/appliedUser/password" component={Password} />
      <Route
        exact
        path="/appliedUser/thankYou"
        component={ThankYouRegistration}
      />
      <Route exact path="/newUser/register" component={Register} />
      <Route exact path="/newUser/verifyEmail" component={VerifyNewUserEmail} />
      <Route
        exact
        path="/newUser/verifyPhoneNumber"
        component={VerifyNewUserPhoneNumber}
      />
      <Route exact path="/newUser/password" component={NewUserPassword} />
      <Route exact path="/newUser/finalise" component={FinaliseNewUser} />
      <Route exact path="/newUser/thankYou" component={ThankYouRegistration} />
      <Redirect to="/" />
    </Switch>
  </StyledEntry>
)

export const Entry = withRouter(EntryWithoutRouter)
