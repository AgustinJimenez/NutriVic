import React from 'react'
import { View, Input, Item, Text, Button, Form } from 'native-base'
import { StyleSheet, Image, ActivityIndicator, Platform } from 'react-native'
import { scale } from '../../../theme/variables/commonStyles'
import ParriOnContainer from '../../../components/ParriOnContainer'
import ImageFlame from '../../../assets/images/flame.png'
import brandSecondary from '../../../theme/variables/commonColor.js'
import generalStyles from '../../../theme/variables/commonStyles'
import ToggleEye from './ToggleEye'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import emailIsValid from '../../../utils/emailIsValid'
import { useDispatch, useSelector } from 'react-redux'
import { datasetSelector } from '../../../redux/selectors'
import { setDatasetToReducer } from '../../../redux/actions'
import { logAction } from '../../../actions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
  welcome: {
    color: 'white',
    textAlign: 'center',
    fontSize: 41,
    fontWeight: '500',
    fontFamily: 'Reckoner',
  },
  register: {
    marginVertical: scale(0.5),
    flexDirection: 'row',
  },
  flame: {
    alignSelf: 'center',
    width: 32.61,
    height: 52.56,
    position: 'absolute',
    top: Platform.OS === 'ios' ? scale(1.2) : scale(0.5),
  },
  formContainer: { flex: 0.9, justifyContent: 'center' },
  form: { width: '85%', alignSelf: 'center' },
  sigInText: { color: 'black', fontSize: 18 },
  sigInTextDisabled: { color: 'white' },
  sigInButton: {
    backgroundColor: brandSecondary.brandSecondary,
    borderRadius: scale(0.2),
    marginVertical: scale(0.2),
  },
  sigInButtonDisabled: { backgroundColor: 'gray' },
  inputContainer: { marginTop: scale(0.2), borderRadius: scale(0.2) },
  input: { fontSize: 16, color: 'white' },
  newUserText: { color: brandSecondary.brandSecondary, textAlign: 'center' },
  registerText: {
    color: brandSecondary.brandSecondary,
    textAlign: 'center',
    paddingHorizontal: scale(0.1) /* , fontFamily: 'CircularStd'  */,
  },
})

const formIsValid = (
  email: string,
  password: string,
  login_is_loading: boolean
) => {
  let isValid = !login_is_loading

  if (!email.length || !emailIsValid(email)) isValid = false
  else if (password.length < 3) isValid = false

  return isValid
}

const LoginScreen = ({}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = React.useState(false)
  const [password, setPassword] = React.useState('')
  const email: string = useSelector((state) =>
    datasetSelector(state, 'login_email')
  )
  const login_is_loading: boolean = useSelector((state) =>
    datasetSelector(state, 'login_is_loading')
  )
  const setEmail = (email: string) => {
    dispatch(setDatasetToReducer(email, 'login_email'))
  }

  const inputsValid = formIsValid(email, password, login_is_loading)

  const inputEmail = React.useRef(null)
  const inputPassword = React.useRef(null)

  const onLogin = async (email: string, password: string) => {
    dispatch(logAction(email, password))
  }

  return (
    <ParriOnContainer>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.formContainer}>
          <Form style={styles.form}>
            <Text style={styles.welcome}>Bienvenido</Text>
            <Item regular style={styles.inputContainer}>
              <Input
                ref={inputEmail}
                placeholder={t('email_or_phone')}
                placeholderTextColor="white"
                style={styles.input}
                returnKeyType="next"
                value={email}
                onChangeText={(text) => setEmail(text)}
                onSubmitEditing={() => inputPassword?.current?._root?.focus()}
              />
            </Item>

            <Item regular style={styles.inputContainer}>
              <Input
                ref={inputPassword}
                placeholder={t('password')}
                placeholderTextColor="white"
                style={styles.input}
                returnKeyType="done"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <ToggleEye show={showPassword} />
              </TouchableOpacity>
            </Item>

            <Button
              block
              style={[
                styles.sigInButton,
                !inputsValid && styles.sigInButtonDisabled,
              ]}
              disabled={!inputsValid}
              onPress={() => onLogin(email, password)}
            >
              {login_is_loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <Text
                  style={[
                    styles.sigInText,
                    !inputsValid && styles.sigInTextDisabled,
                  ]}
                >
                  {t('login')}
                </Text>
              )}
            </Button>

            <TouchableOpacity style={[styles.register, generalStyles.center]}>
              <Text style={styles.newUserText}>¿{t('im_new')}?</Text>
              <Text style={[styles.registerText, generalStyles.bold]}>
                {t('register')}
              </Text>
            </TouchableOpacity>
          </Form>
        </View>
      </KeyboardAwareScrollView>
      <Image source={ImageFlame} style={styles.flame} />
    </ParriOnContainer>
  )
}
export default LoginScreen
