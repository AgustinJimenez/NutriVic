import { StyleSheet } from 'react-native'
import { colors, scale } from '../../styles'

const styles = StyleSheet.create({
  container: {
    paddingBottom: scale(4),
  },
  firstPartContainer: {
    flexDirection: 'row',
    //backgroundColor: 'yellow',
  },
  imageContainer: {
    flex: 0.4,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
  },
  firstPartInfo: {
    flex: 0.6,
  },
  name: {
    marginTop: scale(0.46),
    width: '95%',
    fontWeight: '700',
    fontSize: scale(0.588),
    color: colors.primary(),
    marginBottom: scale(0.242),
    flex: 1,
  },
  inticationTitle: {
    color: colors.primary(),
    fontSize: scale(0.316),
    fontWeight: '700',
    lineHeight: scale(0.429),
  },
  indicationContent: {
    color: colors.primary(),
    fontSize: scale(0.3),
    fontWeight: '400',
    lineHeight: scale(0.429),
    width: '90%',
  },
  secondPartContainer: {},
  infoContainer: {
    paddingLeft: scale(0.63),
  },
  lightBg: {
    backgroundColor: colors.light(0.6),
  },
  infoTitle: {
    color: colors.primary(),
    fontWeight: '700',
    fontSize: scale(0.46),
    marginTop: scale(0.242),
    marginBottom: scale(0.1),
  },
  infoContent: {
    color: colors.primary(),
    fontWeight: '400',
    fontSize: scale(0.3),
    marginBottom: scale(0.49),
    lineHeight: scale(0.36),
    width: '95%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: scale(0.4),
    right: scale(1),
    left: scale(1),
    alignItems: 'center',
  },
  categoriesIconsContainers: { flexDirection: 'row' },
  categoryIcon: {
    marginRight: scale(0.049),
  },
})

export default styles
