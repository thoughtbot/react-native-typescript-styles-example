import * as Colors from './colors'
import * as Spacing from './spacing'

export const extraLargeFontSize = 32
export const largeFontSize = 24
export const buttonFontSize = 18
export const baseFontSize = 16
export const smallFontSize = 14
export const smallestFontSize = 10
export const largeHeaderFontSize = 20
export const headerFontSize = 18

const base = {
  alignItems: 'center',
  backgroundColor: Colors.background,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

export const underlined = {
  textDecorationLine: 'underline',
}

export const bodyText = {
  color: Colors.shuttleGray,
  fontSize: smallFontSize,
  lineHeight: 19,
}

export const headerText = {
  color: Colors.shuttleGray,
  fontSize: headerFontSize,
  paddingBottom: Spacing.base,
}

export const descriptionText = {
  color: Colors.shuttleGray,
  fontSize: smallFontSize,
  paddingTop: Spacing.small,
}

export const bottomBorder = {
  borderBottomColor: Colors.border,
  borderBottomWidth: Spacing.border,
}

export const topBorder = {
  borderTopColor: Colors.border,
  borderTopWidth: Spacing.border,
}

export const screenHeader = {
  ...base,
  ...headerText,
  ...bottomBorder,
}

export const screenFooter = {
  ...base,
  ...descriptionText,
  ...topBorder,
}

export const sectionHeader = {
  ...base,
  ...headerText,
}
