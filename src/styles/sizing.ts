import { Dimensions } from "react-native"

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen")
type Screen = "width" | "height"
export const screen: Record<Screen, number> = {
  width: screenWidth,
  height: screenHeight,
}

type Layout =
  | "x5"
  | "x10"
  | "x20"
  | "x30"
  | "x40"
  | "x50"
  | "x60"
  | "x70"
  | "x80"
export const layout: Record<Layout, number> = {
  x5: 6,
  x10: 10,
  x20: 18,
  x30: 26,
  x40: 34,
  x50: 42,
  x60: 50,
  x70: 64,
  x80: 86,
}

export const x5 = layout.x5
export const x10 = layout.x10
export const x20 = layout.x20
export const x30 = layout.x30
export const x40 = layout.x40
export const x50 = layout.x50
export const x60 = layout.x60
export const x70 = layout.x70
export const x80 = layout.x80

type Icons = "x10" | "x20" | "x30" | "x40"
export const icons: Record<Icons, number> = {
  x10: 14,
  x20: 20,
  x30: 30,
  x40: 40,
}
