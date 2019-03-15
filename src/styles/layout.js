import { Dimensions } from 'react-native'

export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height
export const isSmallDevice = windowWidth < 375

export const headerImage = {
  width: windowWidth,
  height: 100,
}
