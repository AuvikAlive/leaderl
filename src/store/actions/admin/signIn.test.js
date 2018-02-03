import { signIn, signInFailure, signInSuccess } from './admin'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { accessKeyId, secretAccessKey } from '../../../../server/config/aws'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('signIn dispatches signInFailure when credentials do not match', async () => {
  const userId = 'test'
  const password = '1234'

  const store = mockStore({})

  const expectedActions = store.dispatch(
    signInFailure('Sorry, wrong credentials!')
  )

  try {
    const action = await store.dispatch(signIn(userId, password))
    expect(action).toEqual(expectedActions)
  } catch (error) {
    throw error
  }
})

test('signIn dispatches signInSuccess when credentials match', async () => {
  const store = mockStore({})

  const expectedActions = store.dispatch(signInSuccess())

  try {
    const actions = await store.dispatch(signIn(accessKeyId, secretAccessKey))
    expect(actions).toEqual(expectedActions)
  } catch (error) {
    throw error
  }
})
