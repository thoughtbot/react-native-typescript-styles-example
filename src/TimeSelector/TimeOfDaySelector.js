import React from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"

import TimeSelectorButton from "./TimeSelectorButton"
import { SelectionConsumer } from "./SelectionContext"

import { Colors, Typography, Spacing } from "../styles"

const timesOfDay = ["MORNING", "AFTERNOON", "EVENING"]

const TimeOfDaySelector = () => {
  return (
    <SelectionConsumer>
      {({ timeSelections, toggleTimeOfDaySelector }) => {
        const count = timeSelections.length

        let countText
        if (count === 3) {
          countText = "All selected"
        } else if (count === 0) {
          countText = "None selected"
        } else {
          countText = `${count} selected`
        }

        return (
          <View style={styles.selectorContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Time of Day</Text>
              <Text style={styles.count}>{countText}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              {timesOfDay.map((timeOfDay) => {
                const isSelected = timeSelections.indexOf(timeOfDay) !== -1
                return (
                  <TimeSelectorButton
                    onPressCallback={toggleTimeOfDaySelector}
                    selector={timeOfDay}
                    isSelected={isSelected}
                    ownStyles={{ flex: 1 }}
                    key={timeOfDay}
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
    marginHorizontal: Spacing.sectionPadding,
    paddingHorizontal: Spacing.small,
    paddingVertical: Spacing.base,
  },
  headerContainer: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
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
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
})

export default TimeOfDaySelector
