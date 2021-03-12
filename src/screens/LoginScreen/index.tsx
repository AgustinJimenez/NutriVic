import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Input, Item, Text, Form } from 'native-base'
import global_styles, { scale } from '../../styles'
import ToggleEye from '../../components/ToggleEye'
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
import { useNavigation } from '@react-navigation/native'

const formIsValid = (
  email: string,
  password: string,
  login_is_loading: boolean
) => {
  let emailIsInvalid = !emailIsValid(email)
  let passwordIsInvalid = password.length < 6
  //console.log({ emailIsInvalid, passwordIsInvalid })
  return !emailIsInvalid && !passwordIsInvalid && !login_is_loading
}

const LoginScreen = ({}: any) => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = React.useState(false)
  const [password, setPassword] = React.useState('')
  const email: string = useSelector((state) =>
    datasetSelector(state, 'login_email')
  )
  React.useEffect(() => {
    dispatch(setDatasetToReducer(false, 'login_is_loading'))
  }, [])
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
      <Form style={styles.form}>
        <Text style={[global_styles.title, styles.title]}>{t('login')}</Text>
        <Item regular style={styles.inputContainer}>
          <Input
            ref={inputEmail}
            placeholder={t('email')}
            placeholderTextColor="gray"
            style={styles.input}
            returnKeyType="next"
            autoCompleteType="email"
            autoCapitalize="none"
            autoCorrect={false}
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
          loading={login_is_loading}
          style={styles.submit}
          title={t('login')}
          onPress={() => onLogin(email, password)}
          disabled={!inputsValid}
        />
        <FlatButton
          title="Ingresar sin cuenta"
          light
          onPress={() => navigation.navigate('Home')}
        />
      </Form>
      <View style={styles.registerContainer}>
        <TouchableOpacity
          style={[styles.register]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={[styles.newUserText, global_styles.textPrimary]}>
            {t('have_no_account_yet') + '  '}
          </Text>
          <Text style={[styles.registerText, global_styles.textPrimary]}>
            {t('register')}
          </Text>
        </TouchableOpacity>
      </View>
    </IntroContainer>
  )
}
export default LoginScreen
