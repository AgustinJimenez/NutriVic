import { StyleSheet, Platform } from 'react-native'
import { scale } from '../../styles'
import { colors } from '../../styles'

const styles = StyleSheet.create({
  title: {
    marginBottom: 5,
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
    justifyContent: 'center',
  },
  form: {
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
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
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: scale(0.1),
  },
  registerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13,
  },
})

export default styles
