import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddlware from 'redux-thunk'
import './index.css'
import App from './containers/App'
import 'tachyons'
import { searchRobots, requestRobots } from './reducers'

const logger = createLogger()

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddlware, logger))

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
