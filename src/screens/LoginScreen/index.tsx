import React from 'react'
import { View, Input, Item, Text, Form, Icon } from 'native-base'
import global_styles from '../../styles'
import ToggleEye from './ToggleEye'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import emailIsValid from '../../utils/emailIsValid'
import { useDispatch, useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import { setDatasetToReducer } from '../../redux/actions'
import { logAction } from '../../sagas/actions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import IntroContainer from '../../components/IntroContainer'
import FlatButton from '../../components/FlatButton'
import styles from './styles'

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
    <IntroContainer>
      <View style={styles.emptyBox} />
      <KeyboardAwareScrollView contentContainerStyle={styles.formContainer}>
        <Form style={styles.form}>
          <Text style={[global_styles.title, styles.title]}>
            {t('welcome')}!
          </Text>
          <Item regular style={styles.inputContainer}>
            <Input
              ref={inputEmail}
              placeholder={t('email')}
              placeholderTextColor="gray"
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
              placeholderTextColor="gray"
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

          <FlatButton
            style={styles.submit}
            title={t('login')}
            onPress={() => onLogin(email, password)}
            disabled={!inputsValid}
          />
        </Form>
      </KeyboardAwareScrollView>

      <TouchableOpacity style={[styles.register]}>
        <Text style={[styles.newUserText, global_styles.textPrimary]}>
          {t('have_no_account_yet') + '  '}
        </Text>
        <Text style={[styles.registerText, global_styles.textPrimary]}>
          {t('register')}
        </Text>
      </TouchableOpacity>
    </IntroContainer>
  )
}
export default LoginScreen
