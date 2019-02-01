import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import TimeSelectorHeader from './TimeSelectorHeader'
import TimeSelectorFooter from './TimeSelectorFooter'
import DayOfWeekSelector from './DayOfWeekSelector'
import TimeOfDaySelector from './TimeOfDaySelector'

import { SelectionProvider } from './SelectionContext'

import { Colors, Spacing } from '../styles'

class TimeSelectorScreen extends Component {
  render() {
    return (
      <SelectionProvider>
        <View style={styles.outerContainer}>
          <TimeSelectorHeader />
          <ScrollView style={styles.container}>
            <DayOfWeekSelector />
            <TimeOfDaySelector />
          </ScrollView>
          <TimeSelectorFooter />
        </View>
      </SelectionProvider>
    )
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.white,
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
