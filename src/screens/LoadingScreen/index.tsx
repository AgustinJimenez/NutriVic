import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import ImageAppIcon from '../../assets/images/app_icon.png'
import { colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary(),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 160,
  },
})

const LoadingScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={ImageAppIcon} resizeMode="contain" style={styles.image} />
    </View>
  )
}

export default LoadingScreen
