import React, { Component } from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

import { Buttons, Colors, Typography, Spacing } from "../styles"

class TimeSelectorButton extends Component {
  handlePressSelector = () => {
    const { selector, onPressCallback } = this.props
    onPressCallback(selector)
  }

  render() {
    const { selector, isSelected, ownStyles } = this.props

    const selectedStyles = isSelected
      ? { button: [styles.button], text: [styles.buttonText] }
      : {
          button: [styles.button, styles.buttonUnselected],
          text: [styles.buttonText, styles.buttonTextUnselected],
        }

    return (
      <TouchableOpacity
        onPress={this.handlePressSelector}
        style={[ownStyles, selectedStyles.button]}
      >
        <Text numberOfLines={1} style={selectedStyles.text}>
          {selector}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    ...Buttons.smallRounded,
    ...Buttons.selected,
  },
  buttonText: {
    ...Buttons.text,
  },
  buttonTextUnselected: {
    ...Buttons.textUnselected,
  },
  buttonUnselected: {
    ...Buttons.unselected,
  },
})

export default TimeSelectorButton
