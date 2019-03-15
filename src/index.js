import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import AppNavigatorContainer from './AppNavigator'
import IssueListScreen from './IssueList'

import { Colors } from './styles'

const RootScreen = () => (
  <SafeAreaView style={styles.container}>
    <IssueListScreen />
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
