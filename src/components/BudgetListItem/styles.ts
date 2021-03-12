import { StyleSheet } from 'react-native'
import { colors, scale } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: scale(3),
    backgroundColor: colors.light(0.2),
    marginVertical: scale(0.7),
    borderRadius: 8,
  },
  image: {
    width: scale(2.293),
    height: scale(4),
    marginBottom: -scale(0.4),
    alignSelf: 'flex-end',
  },
  infoContainer: {
    flex: 1,
    borderRadius: 2,
  },
  name: {
    color: colors.primary(),
    fontWeight: 'bold',
    fontSize: scale(0.47),
    marginVertical: 16.33,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: scale(0.3),
    bottom: scale(0.3),
    marginTop: scale(0.4),
  },
  quantity: {
    flex: 1,
    textAlign: 'right',
    color: colors.primary(),
    fontWeight: '700',
    fontSize: scale(0.3),
    paddingHorizontal: scale(0.4),
  },
  counterContainer: {
    flexDirection: 'row',
    borderRadius: 2,
    width: scale(2.38),
    backgroundColor: colors.light(),
    borderColor: colors.primary(0.16),
    borderWidth: 0.5,
  },
  counterTextContainer: {
    flex: 1,
    marginVertical: 1,
    paddingHorizontal: scale(0.1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  counterText: {
    color: colors.primary(),
    fontWeight: '500',
    fontSize: scale(0.37),
  },
  counterIconContainer: {
    flex: 1,
    padding: scale(0.1),
  },
  counterIcon: {
    color: colors.primary(),
    fontSize: scale(0.6),
  },
  removeCross: {
    right: 0,
    top: 0,
  },
  removeCrossIcon: {
    fontSize: scale(0.5),
    color: colors.secondary(),
  },
})
export default styles
