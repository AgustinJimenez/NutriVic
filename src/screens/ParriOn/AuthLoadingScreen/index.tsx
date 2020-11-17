import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import ImageLogo from '../../../assets/images/logo.png'
import ParriOnContainer from '../../../components/ParriOnContainer'
import { scale } from '../../../theme/variables/commonStyles'

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center' },
  image: { width: scale(3.7), height: scale(7.1), alignSelf: 'center' },
})

const AuthLoadingScreen = ({}) => {
  return (
    <ParriOnContainer>
      <View style={styles.container}>
        <Image source={ImageLogo} style={styles.image} />
      </View>
    </ParriOnContainer>
  )
}
export default AuthLoadingScreen
