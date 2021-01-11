import { TextStyle } from "react-native"
import { systemWeights } from "react-native-typography"

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
    lineHeight: 12,
  },
  x20: {
    lineHeight: 18,
  },
  x30: {
    lineHeight: 22,
  },
  x40: {
    lineHeight: 26,
  },
  x50: {
    lineHeight: 36,
  },
  x60: {
    lineHeight: 48,
  },
}

type Header = "x10" | "x20" | "x40" | "x50" | "x60"
export const header: Record<Header, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...lineHeight.x20,
    ...fontWeight.bold,
  },
  x20: {
    ...fontSize.x20,
    ...lineHeight.x30,
    ...fontWeight.semibold,
  },
  x40: {
    ...fontSize.x40,
    ...lineHeight.x40,
    ...fontWeight.semibold,
  },
  x50: {
    ...fontSize.x50,
    ...lineHeight.x50,
    ...fontWeight.bold,
  },
  x60: {
    ...fontSize.x60,
    ...lineHeight.x60,
    ...fontWeight.bold,
  },
}

type Body = "x10"
export const body: Record<Body, TextStyle> = {
  x10: {
    ...fontSize.x10,
  },
}
