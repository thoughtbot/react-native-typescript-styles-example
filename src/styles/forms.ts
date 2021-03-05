import { TextStyle } from "react-native"

import * as Colors from "./colors"
import * as Outlines from "./outlines"
import * as Sizing from "./sizing"
import * as Typography from "./typography"

type Input = "primary"
export const input: Record<Input, TextStyle> = {
  primary: {
    ...Typography.body.x30,
    lineHeight: 0,
    padding: Sizing.x20,
    borderColor: Colors.neutral.s300,
    borderWidth: Outlines.borderWidth.hairline,
    borderRadius: Outlines.borderRadius.small,
  },
}

type InputLabel = "primary"
export const inputLabel: Record<InputLabel, TextStyle> = {
  primary: {
    ...Typography.subheader.x20,
    marginBottom: Sizing.x10,
  },
}
