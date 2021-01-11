import React, { Component } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"

import TimeSelectorHeader from "./TimeSelectorHeader"
import TimeSelectorFooter from "./TimeSelectorFooter"
import DayOfWeekSelector from "./DayOfWeekSelector"
import TimeOfDaySelector from "./TimeOfDaySelector"

import { SelectionProvider } from "./SelectionContext"

import { Colors, Spacing } from "../styles"

class TimeSelectorScreen extends Component {
  render() {
    return (
      <SelectionProvider>
        <View style={styles.container}>
          <View style={styles.header}>
            <TimeSelectorHeader />
          </View>
          <View style={styles.body}>
            <ScrollView>
              <DayOfWeekSelector />
              <TimeOfDaySelector />
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <TimeSelectorFooter />
          </View>
        </View>
      </SelectionProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  header: {
    flex: 3,
  },
  body: {
    flex: 8,
    backgroundColor: Colors.sectionBackground,
  },
  footer: {
    flex: 1,
  },
})

export default TimeSelectorScreen
