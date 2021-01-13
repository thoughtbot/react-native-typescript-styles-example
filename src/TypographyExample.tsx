import React, { FunctionComponent } from "react"
import { StyleSheet, View, Text } from "react-native"

import { Sizing, Typography } from "./styles"

const TypographyExample: FunctionComponent = () => {
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.headerText}>Typography</Text>
      </View>

      <View style={style.sectionContainer}>
        <View style={style.subHeaderContainer}>
          <Text style={style.subHeaderText}>Header</Text>
        </View>
        <Text style={style.x60header}>Header x60</Text>
        <Text style={style.x50header}>Header x50</Text>
        <Text style={style.x40header}>Header x40</Text>
        <Text style={style.x30header}>Header x30</Text>
        <Text style={style.x20header}>Header x20</Text>
        <Text style={style.x10header}>Header x10</Text>
      </View>

      <View style={style.sectionContainer}>
        <View style={style.subHeaderContainer}>
          <Text style={style.subHeaderText}>Body</Text>
        </View>
        <Text style={style.x40body}>Body x40</Text>
        <Text style={style.x30body}>Body x30</Text>
        <Text style={style.x20body}>Body x20</Text>
        <Text style={style.x10body}>Body x10</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginBottom: Sizing.x20,
  },
  headerText: {
    ...Typography.header.x50,
  },
  sectionContainer: {
    marginBottom: Sizing.x30,
  },
  subHeaderContainer: {
    marginBottom: Sizing.x20,
  },
  subHeaderText: {
    ...Typography.header.x40,
  },
  x60header: {
    ...Typography.header.x60,
    marginBottom: Sizing.x10,
  },
  x50header: {
    ...Typography.header.x50,
    marginBottom: Sizing.x10,
  },
  x40header: {
    ...Typography.header.x40,
    marginBottom: Sizing.x10,
  },
  x30header: {
    ...Typography.header.x30,
    marginBottom: Sizing.x10,
  },
  x20header: {
    ...Typography.header.x20,
    marginBottom: Sizing.x10,
  },
  x10header: {
    ...Typography.header.x10,
    marginBottom: Sizing.x10,
  },
  x40body: {
    ...Typography.body.x40,
    marginBottom: Sizing.x10,
  },
  x30body: {
    ...Typography.body.x30,
    marginBottom: Sizing.x10,
  },
  x20body: {
    ...Typography.body.x20,
    marginBottom: Sizing.x10,
  },
  x10body: {
    ...Typography.body.x10,
    marginBottom: Sizing.x10,
  },
})

export default TypographyExample
