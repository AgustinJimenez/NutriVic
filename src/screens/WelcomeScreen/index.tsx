import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FlatButton from '../../components/FlatButton'
import IntroContainer from '../../components/IntroContainer'
import global_styles, { scale } from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: scale(6),
    justifyContent: 'center',
  },
  buttonsContainer: {
    width: '80%',
    alignItems: 'center',
  },
})
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
          <FlatButton title="Quiero registrarme" light />
        </View>
      </View>
    </IntroContainer>
  )
}
export default WelcomeScreen
