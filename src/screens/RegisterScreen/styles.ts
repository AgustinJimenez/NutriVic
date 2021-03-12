import { Platform, StyleSheet } from 'react-native'
import { colors, scale } from '../../styles'

const styles = StyleSheet.create({
  title: {
    textShadowColor: 'white',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  submit: {
    borderRadius: 4,
    marginTop: scale(0.4),
  },
  flame: {
    alignSelf: 'center',
    width: 32.61,
    height: 52.56,
    position: 'absolute',
    top: Platform.OS === 'ios' ? scale(1.2) : scale(0.5),
  },
  emptyBox: {
    flex: 0.4,
  },
  formContainer: {
    flex: 1,
    //backgroundColor: 'green',
  },
  form: {
    flex: 1,
    marginTop: scale(0.4),
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  sigInText: { color: 'black', fontSize: 18 },
  sigInTextDisabled: { color: 'white' },
  sigInButton: {
    //backgroundColor: brandSecondary.brandSecondary,
    borderRadius: scale(0.2),
    marginVertical: scale(0.2),
  },
  sigInButtonDisabled: { backgroundColor: 'gray' },
  inputContainer: {
    backgroundColor: 'white',
    marginTop: scale(0.3),
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 44,
    borderColor: colors.light(),
    borderWidth: 2,
    width: '100%',
  },
  input: { fontSize: 15, fontWeight: '400' },
  newUserText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 13,
  },
  registerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: scale(1),
  },
  register: {
    //bottom: scale(Platform.OS === 'android' ? 0.8 : scale(0.3)),
    flexDirection: 'row',
    justifyContent: 'center',
    //alignSelf: 'flex-end',
    //alignItems: 'flex-end',
  },
  registerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13,
  },
  passwordRequerimentText: {
    color: 'gray',
  },
})

export default styles
