import React, { FunctionComponent } from "react"
import { StyleSheet, View, Text } from "react-native"

import { Sizing, Typography, Outlines, Colors } from "./styles"

const ColorExample: FunctionComponent = () => {
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.headerText}>Colors</Text>
      </View>
      <View style={style.sectionContianer}>
        <View style={style.subHeaderContainer}>
          <Text style={style.subHeaderText}>Neutral</Text>
        </View>
        <ColorListItem color={Colors.neutral.white} label={"white"} />
        <ColorListItem color={Colors.neutral.s100} label={"s100"} />
        <ColorListItem color={Colors.neutral.s150} label={"s150"} />
        <ColorListItem color={Colors.neutral.s200} label={"s200"} />
        <ColorListItem color={Colors.neutral.s250} label={"s250"} />
        <ColorListItem color={Colors.neutral.s300} label={"s300"} />
        <ColorListItem color={Colors.neutral.s400} label={"s400"} />
        <ColorListItem color={Colors.neutral.s500} label={"s500"} />
        <ColorListItem color={Colors.neutral.s600} label={"s600"} />
        <ColorListItem color={Colors.neutral.s700} label={"s700"} />
        <ColorListItem color={Colors.neutral.s800} label={"s800"} />
        <ColorListItem color={Colors.neutral.s900} label={"s900"} />
        <ColorListItem color={Colors.neutral.black} label={"black"} />
      </View>

      <View style={style.sectionContianer}>
        <View style={style.subHeaderContainer}>
          <Text style={style.subHeaderText}>Primary</Text>
        </View>
        <ColorListItem color={Colors.primary.s200} label={"s200"} />
        <ColorListItem color={Colors.primary.brand} label={"brand"} />
        <ColorListItem color={Colors.primary.s600} label={"s600"} />
      </View>

      <View style={style.sectionContianer}>
        <View style={style.subHeaderContainer}>
          <Text style={style.subHeaderText}>Secondary</Text>
        </View>
        <ColorListItem color={Colors.secondary.s200} label={"s200"} />
        <ColorListItem color={Colors.secondary.brand} label={"brand"} />
        <ColorListItem color={Colors.secondary.s600} label={"s600"} />
      </View>

      <View style={style.sectionContianer}>
        <View style={style.subHeaderContainer}>
          <Text style={style.subHeaderText}>Danger</Text>
        </View>
        <ColorListItem color={Colors.danger.s400} label={"s400"} />
      </View>

      <View style={style.sectionContianer}>
        <View style={style.subHeaderContainer}>
          <Text style={style.subHeaderText}>Success</Text>
        </View>
        <ColorListItem color={Colors.success.s400} label={"s400"} />
      </View>

      <View style={style.sectionContianer}>
        <View style={style.subHeaderContainer}>
          <Text style={style.subHeaderText}>Warning</Text>
        </View>
        <ColorListItem color={Colors.warning.s400} label={"s400"} />
      </View>

      <View style={style.sectionContianer}>
        <View style={style.subHeaderContainer}>
          <Text style={style.subHeaderText}>Transparent</Text>
        </View>
        <ColorListItem color={Colors.transparent.clear} label={"clear"} />
        <ColorListItem
          color={Colors.transparent.lightGray}
          label={"lightGray"}
        />
        <ColorListItem color={Colors.transparent.darkGray} label={"darkGray"} />
      </View>
    </View>
  )
}

interface ColorListItemProps {
  color: string
  label: string
}

const ColorListItem: FunctionComponent<ColorListItemProps> = ({
  color,
  label,
}) => {
  return (
    <View style={style.colorContainer}>
      <View style={{ ...style.colorBlock, backgroundColor: color }} />
      <View style={style.colorTextContainer}>
        <Text style={style.colorText}>{label}</Text>
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
  sectionContianer: {
    marginBottom: Sizing.x10,
  },
  subHeaderContainer: {
    marginBottom: Sizing.x20,
  },
  subHeaderText: {
    ...Typography.header.x40,
  },
  colorContainer: {
    marginBottom: Sizing.x5,
    flexDirection: "row",
    alignItems: "center",
  },
  colorTextContainer: {
    paddingLeft: Sizing.x30,
  },
  colorBlock: {
    width: Sizing.x60,
    height: Sizing.x60,
    backgroundColor: Colors.neutral.s100,
    borderRadius: Outlines.borderRadius.base,
  },
  colorText: {
    ...Typography.body.x10,
  },
})

export default ColorExample
