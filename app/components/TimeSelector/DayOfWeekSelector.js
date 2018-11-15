import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TimeSelectorButton from './TimeSelectorButton'

import { Colors, Spacing, Typography } from '../../styles'

const daysOfTheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

const DayOfWeekSelector = ({ daySelectors, toggleDayOfWeekSelector }) => {
  const count = daySelectors.length

  let countText
  if (count === 7) {
    countText = '(All)'
  } else if (count === 0) {
    countText = '(None)'
  } else {
    countText = `(${count})`
  }

  return (
    <View style={styles.selectorContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Days of the Week</Text>
        <Text style={styles.count}>{countText}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {daysOfTheWeek.map(dayOfWeek => {
          const isSelected = daySelectors.indexOf(dayOfWeek) !== -1
          return (
          <TimeSelectorButton
            onPressCallback={toggleDayOfWeekSelector}
            isSelected={isSelected}
            selector={dayOfWeek}
            key={dayOfWeek}
          />
        )})}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  selectorContainer: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: Spacing.sectionPadding,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  header: {
    ...Typography.sectionHeader,
    flex: 3,
  },
  count: {
    ...Typography.sectionHeader,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
})

export default DayOfWeekSelector
