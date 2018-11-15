import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import TimeSelectorHeaderContainer from './TimeSelectorHeaderContainer'
import TimeSelectorFooter from './TimeSelectorFooter'
import DayOfWeekSelectorContainer from './DayOfWeekSelectorContainer'
import TimeOfDaySelectorContainer from './TimeOfDaySelectorContainer'

import { Colors, Spacing } from '../../styles'

class TimeSelectorScreen extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <TimeSelectorHeaderContainer />
        <ScrollView style={styles.container}>
          <DayOfWeekSelectorContainer />
          <TimeOfDaySelectorContainer />
        </ScrollView>
        <TimeSelectorFooter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  container: {
    backgroundColor: Colors.background,
    display: 'flex',
    flex: 1,
  },
})

export default TimeSelectorScreen
