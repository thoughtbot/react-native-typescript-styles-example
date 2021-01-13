import React, { FunctionComponent } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import StaticSafeAreaInsets from "react-native-static-safe-area-insets"

import BaseExample from "./BaseExample"
import ColorExample from "./ColorExample"
import TypographyExample from "./TypographyExample"

import { Sizing, Outlines, Colors } from "./styles"

const App: FunctionComponent = () => {
  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={style.contentContainer}
    >
      <View style={style.sectionContainer}>
        <BaseExample />
      </View>
      <View style={style.sectionContainer}>
        <ColorExample />
      </View>
      <View style={style.sectionContainer}>
        <TypographyExample />
      </View>
    </ScrollView>
  )
}

const topInset = StaticSafeAreaInsets.safeAreaInsetsTop

const style = StyleSheet.create({
  container: {
    marginTop: topInset,
    backgroundColor: Colors.neutral.white,
  },
  contentContainer: {
    padding: Sizing.x20,
  },
  sectionContainer: {
    paddingBottom: Sizing.x20,
    marginBottom: Sizing.x20,
    borderBottomWidth: Outlines.borderWidth.thin,
    borderColor: Colors.neutral.s100,
  },
})

export default App
