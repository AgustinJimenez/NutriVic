import { StyleSheet, Dimensions } from 'react-native'
import palette from './palette'
//const deviceHeight = Dimensions.get('window').height
export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height

export const scale = (number = 1) => (number / 10) * deviceWidth
const global_styles = StyleSheet.create({
  bold: { fontWeight: 'bold' },
  center: { alignSelf: 'center' },
  bgLight: {
    backgroundColor: palette.light(),
  },
  bgGray: {
    backgroundColor: 'gray',
  },
  bgPrimary: {
    backgroundColor: palette.primary(),
  },
  textLight: {
    color: palette.light(),
  },
  textPrimary: {
    color: palette.primary(),
  },
  title: {
    color: palette.primary(),
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 28.43,
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
})

export const colors = palette
export default global_styles
