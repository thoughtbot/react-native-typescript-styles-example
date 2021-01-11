import React, { Component } from "react"
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native"

import { SelectionConsumer } from "./SelectionContext"

import { Colors, Typography, Spacing } from "../styles"
import ralphIcon from "../assets/thoughtbot-assets-pack/horizontal/png/horizontal_default.png"

const TimeSelectorHeader = () => {
  return (
    <SelectionConsumer>
      {({ resetAllSelections }) => {
        return (
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image style={styles.ralphIcon} source={ralphIcon} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Time Selectors</Text>
              <TouchableOpacity
                onPress={resetAllSelections}
                style={styles.resetButton}
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }}
    </SelectionConsumer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    flex: 3,
  },
  ralphIcon: {
    flex: 1,
    width: "100%",
  },
  titleContainer: {
    ...Typography.screenHeader,
    flex: 1,
    width: "100%",
    paddingHorizontal: Spacing.base,
    justifyContent: "flex-start",
  },
  title: {
    ...Typography.screenHeader,
  },

  resetButton: {
    right: Spacing.larger,
    position: "absolute",
  },
  resetButtonText: {
    ...Typography.link,
  },
})

export default TimeSelectorHeader
