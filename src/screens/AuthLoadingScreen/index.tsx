import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
//import ImageLogo from '../../../assets/images/logo.png'
import MainContainer from '../../components/MainContainer'
import { scale } from '../../styles'

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center' },
  image: { width: scale(3.7), height: scale(7.1), alignSelf: 'center' },
})

const AuthLoadingScreen = ({}) => {
  return (
    <MainContainer>
      <View style={styles.container}>
        {/* <Image source={ImageLogo} style={styles.image} /> */}
      </View>
    </MainContainer>
  )
}
export default AuthLoadingScreen
