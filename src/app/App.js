import React from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { store, history, persistor } from '../store/store'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { ThemeProvider } from 'styled-components'
import ScrollToTop from './ScrollToTop'
import theme from '../theme'
import StyledApp from './StyledApp'
import { Home } from '../pages/home/Home'
import { asyncComponent } from '../components/asyncComponent/AsyncComponent'
const Admin = asyncComponent(() => import('../pages/admin/AdminContainer'))

const App = () => (
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <ThemeProvider theme={theme}>
            <StyledApp className="App">
              <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
              </Switch>
            </StyledApp>
          </ThemeProvider>
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  </PersistGate>
)

export default App
