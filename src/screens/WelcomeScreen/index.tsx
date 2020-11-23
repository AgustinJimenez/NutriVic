import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FlatButton from '../../components/FlatButton'
import IntroContainer from '../../components/IntroContainer'
import global_styles, { scale } from '../../styles'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    marginTop: scale(3),
  },
})
const WelcomeScreen = ({}) => {
  const navigation = useNavigation()
  return (
    <IntroContainer>
      <View style={styles.container}>
        <Text style={global_styles.title}>Bienvenido!</Text>
        <FlatButton
          title="Ingresar"
          onPress={() => navigation.navigate('Login')}
        />
        <FlatButton title="Quiero registrarme" light />
      </View>
    </IntroContainer>
  )
}
export default WelcomeScreen
