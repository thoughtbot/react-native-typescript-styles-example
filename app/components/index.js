import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import TimeSelectorScreen from './TimeSelector'

import { Colors } from '../styles'

const RootScreen = () => (
  <SafeAreaView style={styles.container}>
    <TimeSelectorScreen />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
})

export default RootScreen
