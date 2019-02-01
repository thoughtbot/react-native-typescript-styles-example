import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { SelectionConsumer } from './SelectionContext'

import { Colors, Typography, Spacing } from '../styles'
import ralphIcon from '../assets/thoughtbot-assets-pack/horizontal/png/horizontal_default.png'

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
  container: {},
  imageContainer: {
    width: 350,
    height: 100,
  },
  titleContainer: {
    ...Typography.screenHeader,
    justifyContent: 'flex-start',
    marginVertical: Spacing.base,
    paddingHorizontal: Spacing.base,
  },
  ralphIcon: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  title: {
    ...Typography.screenHeader,
  },
  resetButton: {
    right: Spacing.larger,
    position: 'absolute',
  },
  resetButtonText: {
    ...Typography.link,
  },
})

export default TimeSelectorHeader
