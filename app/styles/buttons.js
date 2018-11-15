import * as Colors from './colors'
import * as Spacing from './spacing'
import * as Typography from './typography'

export const base = {
  alignItems: 'center',
  margin: Spacing.smallest,
}

export const text = {
  color: Colors.white,
  fontSize: Typography.smallestFontSize,
  fontWeight: 'bold',
  letterSpacing: 1,
}

export const textUnselected = {
  ...text,
  color: Colors.darkGray,
}

export const small = {
  paddingHorizontal: Spacing.small,
  paddingVertical: Spacing.small + 2,
  width: 75,
}

export const large = {
  paddingHorizontal: Spacing.large,
  paddingVertical: Spacing.large + 4,
}

export const rounded = {
  borderRadius: 50,
}

export const selected = {
  backgroundColor: Colors.selected,
  borderColor: Colors.thoughtbotRed,
  borderWidth: 1,
}

export const unselected = {
  backgroundColor: Colors.unselected,
  borderColor: Colors.darkGray,
  borderWidth: 1,
}

export const smallRounded = {
  ...base,
  ...small,
  ...rounded,
}
