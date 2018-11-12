import React, { Component } from 'react'
import { Platform, StyleSheet, Text, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'

import store from './app/store'
import RootScreen from './app/components'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    )
  }
}
