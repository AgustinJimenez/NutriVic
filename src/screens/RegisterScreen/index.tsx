import React from 'react'
import { Alert, Keyboard, TouchableOpacity } from 'react-native'
import { View, Input, Item, Text, Form } from 'native-base'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import IntroContainer from '../../components/IntroContainer'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import global_styles from '../../styles'
import FlatButton from '../../components/FlatButton'
import { useSelector, useDispatch } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import emailIsValid from '../../utils/emailIsValid'
import { registerSagaAction } from '../../sagas/actions'

const formIsInvalid = (
  username: string,
  email: string,
  password: string,
  rpassword: string,
  isLoading: boolean
) =>
  isLoading ||
  !username ||
  !emailIsValid(email) ||
  password.length < 6 ||
  rpassword.length < 6 ||
  password !== rpassword

const ExampleScreen = ({}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const inputEmail = React.useRef(null)
  const inputName = React.useRef(null)
  const inputPassword = React.useRef(null)
  const inputRpassword = React.useRef(null)
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPasswordLengthReq, setShowPasswordLengthReq] = React.useState(
    false
  )
  const [rpassword, setRpassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const register_screen_is_loading: boolean = useSelector((state) =>
    datasetSelector(state, 'register_screen_is_loading')
  )
  const onSubmit = React.useCallback(() => {
    dispatch(registerSagaAction(name, email, password, rpassword))
  }, [name, email, password, rpassword])

  const canSubmit = !formIsInvalid(
    name,
    email,
    password,
    rpassword,
    register_screen_is_loading
  )

  return (
    <IntroContainer>
      <Form style={styles.form}>
        <Item regular style={styles.inputContainer}>
          <Input
            ref={inputName}
            placeholder={t('username')}
            placeholderTextColor="gray"
            style={styles.input}
            returnKeyType="next"
            autoCapitalize="words"
            value={name}
            onChangeText={(text) => setName(text)}
            onSubmitEditing={() => inputEmail?.current?._root?.focus()}
            autoCorrect={false}
          />
        </Item>
        <Item regular style={styles.inputContainer}>
          <Input
            ref={inputEmail}
            placeholder={t('email')}
            placeholderTextColor="gray"
            style={styles.input}
            returnKeyType="next"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => inputPassword?.current?._root?.focus()}
            autoCorrect={false}
          />
        </Item>

        <Item regular style={styles.inputContainer}>
          <Input
            ref={inputPassword}
            placeholder={t('password')}
            placeholderTextColor="gray"
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => inputRpassword?.current?._root?.focus()}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            textContentType="oneTimeCode"
            blurOnSubmit={false}
            onFocus={() => setShowPasswordLengthReq(true)}
            onBlur={() => setShowPasswordLengthReq(false)}
          />
          <Text style={styles.passwordRequerimentText}>
            {!!showPasswordLengthReq && password.length > 0
              ? t('at_least_6_characters')
              : ''}
          </Text>
        </Item>

        <Item regular style={styles.inputContainer}>
          <Input
            ref={inputRpassword}
            placeholder={t('repeat_password')}
            placeholderTextColor="gray"
            style={styles.input}
            returnKeyType="done"
            secureTextEntry
            value={rpassword}
            textContentType="oneTimeCode"
            onChangeText={setRpassword}
            blurOnSubmit={false}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </Item>

        <FlatButton
          loading={register_screen_is_loading}
          style={styles.submit}
          title={t('register')}
          onPress={onSubmit}
          disabled={!canSubmit}
        />
      </Form>

      <View style={styles.registerContainer}>
        <TouchableOpacity style={[styles.register]} onPress={navigation.goBack}>
          <Text style={[styles.newUserText, global_styles.textPrimary]}>
            {t('have_an_account_already') + '  '}
          </Text>
          <Text style={[styles.registerText, global_styles.textPrimary]}>
            {t('login')}
          </Text>
        </TouchableOpacity>
      </View>
    </IntroContainer>
  )
}

export default ExampleScreen
