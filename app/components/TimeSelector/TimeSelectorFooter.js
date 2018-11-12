import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Colors, Spacing } from '../../styles'

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
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderTopColor: Colors.border,
    borderTopWidth: 2,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    maxHeight: 60,
    justifyContent: 'center',
  },
  footerText: {
    color: Colors.baseText,
    paddingTop: Spacing.smallest,
  },
})

export default TimeSelectorFooter
