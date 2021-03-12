import { StyleSheet, Platform } from 'react-native'
import { colors, scale } from '../../styles'
import palette from '../../styles/palette'

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgba(255,255,255,1)' },
  bgWavesTop: {
    position: 'absolute',
    width: '100%',
    height: scale(6.184),
    top: scale(0.5),
    opacity: 0.4,
  },
  bgWavesBottom: {
    position: 'absolute',
    width: '100%',
    height: scale(6.184),
    opacity: 0.4,
    bottom: 0,
    transform: [{ rotate: '180deg' }],
  },
  avatarContainer: {
    flex: 0.2,
    marginLeft: 10,
    //backgroundColor: 'red',
  },
  avatar: {
    width: scale(0.968),
    height: scale(0.968),
    //backgroundColor: 'green',
  },
  navbar: {
    flexDirection: 'row',
    paddingTop: scale(Platform.OS === 'ios' ? 1.1 : 0.5),
    paddingBottom: scale(0.2),
    backgroundColor: colors.primary(),
  },
  shoppingCartContainer: {
    position: 'relative',
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.06)',
    paddingHorizontal: scale(0.4),
    paddingVertical: scale(0.3),
    borderRadius: scale(0.1),
    width: scale(1.257),
    height: scale(1.089),
    marginTop: Platform.select({ ios: 0, android: -5 }),
    //backgroundColor: 'red',
  },
  shoppingCart: {
    //backgroundColor: 'red',
    width: '140%',
    height: '140%',
  },
  userNameContainer: {
    flex: 1,
    textAlignVertical: 'center',
    flexDirection: 'row',
    top: -5,
  },
  user_name: {
    color: 'white',
    fontWeight: '600',
    fontSize: scale(0.4),
    marginTop: scale(0.3),
  },
  logoutBtn: {
    marginVertical: scale(0.2),
    top: Platform.select({ ios: 0, android: 5 }),
    borderColor: palette.white(0.4),
    borderWidth: scale(0.03),
    borderRadius: scale(0.1),
    marginLeft: scale(0.2),
    paddingHorizontal: scale(0.1),
    justifyContent: 'center',
    backgroundColor: palette.white(0.07),
  },
  logoutTxt: {
    color: 'white',
    fontWeight: '400',
    fontSize: scale(0.3),
  },
})
export default styles
