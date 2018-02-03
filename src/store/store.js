import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import { reducers } from './reducers/reducers'
import createHistory from 'history/createBrowserHistory'

const config = {
  key: 'root',
  storage
}

const rootReducer = persistCombineReducers(config, reducers)

export const history = createHistory()
const router = routerMiddleware(history)

const middleware = applyMiddleware(thunk, router)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export let store = createStore(
  rootReducer,
  composeEnhancers(middleware)
)

export let persistor = persistStore(store)
