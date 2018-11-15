import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { Colors, Typography, Spacing } from '../../styles'
import ralphIcon from '../../assets/thoughtbot-assets-pack/horizontal/png/horizontal_default.png'

class TimeSelectorHeader extends Component {
  onPressReset = () => {
    const { resetAllFilters } = this.props

    resetAllFilters()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.ralphIcon} source={ralphIcon} />
        </View>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            onPress={this.onPressReset}
            style={styles.resetButton}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Time Selectors</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  imageContainer: {
    width: 400,
    height: 100,
  },
  titleContainer: {
    ...Typography.screenHeader,
  },
  ralphIcon: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  title: {
    color: Colors.baseText,
    fontSize: Typography.largeFontSize,
    paddingVertical: Spacing.small,
    textAlign: 'center',
  },
  resetButton: {
    left: Spacing.sectionPadding,
    position: 'absolute',
  },
  resetButtonText: {
    color: Colors.baseText,
    fontSize: Typography.baseFontSize,
  },
})

export default TimeSelectorHeader
