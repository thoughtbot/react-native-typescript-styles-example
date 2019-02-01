import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Colors, Spacing, Typography } from '../styles'

class TimeSelectorFooter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.footerText}>Created by thoughtbot</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...Typography.screenFooter,
    paddingVertical: Spacing.base,
  },
  footerText: {
    ...Typography.link,
  },
})

export default TimeSelectorFooter
