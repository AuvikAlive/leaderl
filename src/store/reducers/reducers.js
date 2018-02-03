import { routerReducer } from 'react-router-redux'
import { authenticationReducer } from './authenticationReducer'
import { admin } from './admin'

export const reducers = {
  router: routerReducer,
  user: authenticationReducer,
  admin
}
