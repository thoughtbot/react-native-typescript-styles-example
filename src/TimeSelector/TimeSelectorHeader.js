import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { SelectionConsumer } from './SelectionContext'

import { Colors, Typography, Spacing, Layout } from '../styles'
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    ...Layout.headerImage,
  },
  ralphIcon: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  titleContainer: {
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: Spacing.base,
    paddingHorizontal: Spacing.base,
    ...Typography.screenHeader,
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
