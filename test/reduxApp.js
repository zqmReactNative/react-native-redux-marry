import React, { Component } from 'react'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import App from './app'

const store = configureStore()

export default class ReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
