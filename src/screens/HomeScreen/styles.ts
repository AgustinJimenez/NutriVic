import { StyleSheet } from 'react-native'
import { colors, scale } from '../../styles'
import palette from '../../styles/palette'

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    paddingHorizontal: scale(0.4),
    marginTop: scale(1),
    fontSize: scale(0.55),
    color: colors.primary(),
    fontWeight: 'bold',
  },
  section_title: {
    color: colors.primary(),
    fontWeight: 'bold',
    marginTop: scale(0.5),
    paddingHorizontal: scale(0.2),
    paddingBottom: scale(0.2),
    fontSize: scale(0.45),
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  search: {
    alignItems: 'center',
    position: 'absolute',
    bottom: scale(0.5),
    right: scale(0.5),
    left: scale(0.5),
  },
  scrollContainer: {
    paddingBottom: scale(10),
  },
  loader: {
    marginVertical: scale(),
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bgLight: {
    backgroundColor: palette.light(0.21),
  },
})

export default styles
