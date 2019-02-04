import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TimeSelectorButton from './TimeSelectorButton'
import { SelectionConsumer } from './SelectionContext'

import { Colors, Spacing, Typography } from '../styles'

const daysOfTheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

const DayOfWeekSelector = () => {
  return (
    <SelectionConsumer>
      {({ daySelections, toggleDayOfWeekSelector }) => {
        const count = daySelections.length

        let countText
        if (count === 7) {
          countText = 'All selected'
        } else if (count === 0) {
          countText = 'None selected'
        } else {
          countText = `${count} selected`
        }

        return (
          <View style={styles.selectorContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Days of the Week</Text>
              <Text style={styles.count}>{countText}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              {daysOfTheWeek.map(dayOfWeek => {
                const isSelected = daySelections.indexOf(dayOfWeek) !== -1

                return (
                  <TimeSelectorButton
                    onPressCallback={toggleDayOfWeekSelector}
                    isSelected={isSelected}
                    selector={dayOfWeek}
                    key={dayOfWeek}
                  />
                )
              })}
            </View>
          </View>
        )
      }}
    </SelectionConsumer>
  )
}

const styles = StyleSheet.create({
  selectorContainer: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    flex: 1,
    margin: Spacing.sectionPadding,
    paddingHorizontal: Spacing.small,
    paddingVertical: Spacing.base,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.base,
  },
  header: {
    ...Typography.sectionHeader,
    flex: 2,
  },
  count: {
    ...Typography.count,
    flex: 2,
    textAlign: "right",
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center'
  },
})

export default DayOfWeekSelector
