import * as Colors from './colors'
import * as Spacing from './spacing'
import * as Typography from './typography'

export const base = {
  alignItems: 'center',
  marginRight: Spacing.smallest,
  marginVertical: Spacing.tiny,
}

export const text = {
  color: Colors.white,
  fontSize: Typography.smallestFontSize,
  fontWeight: 'bold',
  letterSpacing: 1,
}

export const textUnselected = {
  ...text,
  color: Colors.mediumGray,
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
}

export const unselected = {
  backgroundColor: Colors.unselected,
}

export const smallRounded = {
  ...base,
  ...small,
  ...rounded,
}
