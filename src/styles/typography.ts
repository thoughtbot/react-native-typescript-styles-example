import { TextStyle } from "react-native"
import { systemWeights } from "react-native-typography"

import * as Colors from "./colors"

type FontSize = "x10" | "x20" | "x30" | "x40" | "x50" | "x60"
export const fontSize: Record<FontSize, TextStyle> = {
  x10: {
    fontSize: 13,
  },
  x20: {
    fontSize: 16,
  },
  x30: {
    fontSize: 19,
  },
  x40: {
    fontSize: 24,
  },
  x50: {
    fontSize: 32,
  },
  x60: {
    fontSize: 38,
  },
}

type FontWeight = "regular" | "semibold" | "bold"
export const fontWeight: Record<FontWeight, TextStyle> = {
  regular: {
    ...systemWeights.regular,
  },
  semibold: {
    ...systemWeights.semibold,
  },
  bold: {
    ...systemWeights.bold,
  },
}

type LineHeight = "x10" | "x20" | "x30" | "x40" | "x50" | "x60"
export const lineHeight: Record<LineHeight, TextStyle> = {
  x10: {
    lineHeight: 18,
  },
  x20: {
    lineHeight: 22,
  },
  x30: {
    lineHeight: 26,
  },
  x40: {
    lineHeight: 32,
  },
  x50: {
    lineHeight: 38,
  },
  x60: {
    lineHeight: 44,
  },
}

type Header = "x10" | "x20" | "x30" | "x40" | "x50" | "x60"
export const header: Record<Header, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...fontWeight.bold,
    ...lineHeight.x10,
  },
  x20: {
    ...fontSize.x20,
    ...fontWeight.bold,
    ...lineHeight.x20,
  },
  x30: {
    ...fontSize.x30,
    ...fontWeight.bold,
    ...lineHeight.x30,
  },
  x40: {
    ...fontSize.x40,
    ...fontWeight.bold,
    ...lineHeight.x40,
  },
  x50: {
    ...fontSize.x50,
    ...fontWeight.bold,
    ...lineHeight.x50,
  },
  x60: {
    ...fontSize.x60,
    ...fontWeight.bold,
    ...lineHeight.x60,
  },
}

type Subheader = "x10" | "x20" | "x30" | "x40" | "x50" | "x60"
export const subheader: Record<Subheader, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...fontWeight.semibold,
    ...lineHeight.x10,
  },
  x20: {
    ...fontSize.x20,
    ...fontWeight.semibold,
    ...lineHeight.x20,
  },
  x30: {
    ...fontSize.x30,
    ...fontWeight.semibold,
    ...lineHeight.x30,
  },
  x40: {
    ...fontSize.x40,
    ...fontWeight.semibold,
    ...lineHeight.x40,
  },
  x50: {
    ...fontSize.x50,
    ...fontWeight.semibold,
    ...lineHeight.x50,
  },
  x60: {
    ...fontSize.x60,
    ...fontWeight.semibold,
    ...lineHeight.x60,
  },
}

type Body = "x10" | "x20" | "x30" | "x40"
export const body: Record<Body, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...fontWeight.regular,
    ...lineHeight.x10,
    color: Colors.neutral.s800,
  },
  x20: {
    ...fontSize.x20,
    ...fontWeight.regular,
    ...lineHeight.x20,
    color: Colors.neutral.s800,
  },
  x30: {
    ...fontSize.x30,
    ...fontWeight.regular,
    ...lineHeight.x30,
    color: Colors.neutral.s800,
  },
  x40: {
    ...fontSize.x40,
    ...fontWeight.regular,
    ...lineHeight.x40,
    color: Colors.neutral.s800,
  },
}
