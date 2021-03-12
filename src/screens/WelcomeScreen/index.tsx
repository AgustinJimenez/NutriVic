import React from 'react'
import { View, Text } from 'react-native'
import FlatButton from '../../components/FlatButton'
import IntroContainer from '../../components/IntroContainer'
import global_styles from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import styles from './styles'

const WelcomeScreen = ({}) => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  return (
    <IntroContainer>
      <View style={styles.container}>
        <Text style={global_styles.title}>{t('welcome')}!</Text>
        <View style={styles.buttonsContainer}>
          <FlatButton
            title={'Ingresar'}
            onPress={() => navigation.navigate('Login')}
          />
          <FlatButton
            title="Quiero registrarme"
            light
            onPress={() => navigation.navigate('Register')}
          />
          <FlatButton
            title="Ingresar sin cuenta"
            light
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </IntroContainer>
  )
}
export default WelcomeScreen
