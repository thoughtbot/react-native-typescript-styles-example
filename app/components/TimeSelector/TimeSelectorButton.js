import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { Colors, Typography, Spacing } from '../../styles'

class TimeSelectorButton extends Component {
  handlePressSelector = () => {
    const { selector, onPressCallback } = this.props
    onPressCallback(selector)
  }

  render() {
    const {
      selector: { type, isSelected },
      ownStyles,
    } = this.props

    const selectedStyles = isSelected
      ? { button: [styles.button], text: [styles.buttonText] }
      : {
          button: [styles.button, styles.buttonUnselected],
          text: [styles.buttonText, styles.buttonTextUnselected],
        }

    const title = type.toUpperCase()

    return (
      <TouchableOpacity
        onPress={this.handlePressSelector}
        style={[ownStyles, selectedStyles.button]}
      >
        <Text numberOfLines={1} style={selectedStyles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.selected,
    borderRadius: 50,
    margin: 2,
    paddingHorizontal: Spacing.small,
    paddingVertical: 10,
    width: 75,
  },
  buttonText: {
    color: Colors.white,
    fontSize: Typography.smallestFontSize,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  buttonTextUnselected: {
    color: Colors.baseText,
  },
  buttonUnselected: {
    backgroundColor: Colors.unselected,
  },
})

export default TimeSelectorButton
