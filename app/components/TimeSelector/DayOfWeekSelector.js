import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TimeSelectorButton from './TimeSelectorButton'

import { Colors, Spacing, Typography } from '../../styles'

const DayOfWeekSelector = ({ daySelectors, toggleDayOfWeekSelector }) => {
  const count = daySelectors.reduce(
    (acc, selector) => (selector.isSelected ? acc + 1 : acc),
    0
  )

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
        {daySelectors.map(dayOfWeekSelector => (
          <TimeSelectorButton
            onPressCallback={toggleDayOfWeekSelector}
            selector={dayOfWeekSelector}
            key={dayOfWeekSelector.type}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  selectorContainer: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: Spacing.base,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  header: {
    fontSize: Typography.extraLargeFontSize,
    color: Colors.baseText,
    flex: 3,
    marginBottom: Spacing.base,
  },
  count: {
    fontSize: Typography.extraLargeFontSize,
    color: Colors.baseText,
    flex: 1,
    marginBottom: Spacing.base,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
})

export default DayOfWeekSelector
