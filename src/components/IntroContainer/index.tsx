import React from 'react'
import { Image, StyleSheet, SafeAreaView, View } from 'react-native'
import ImageAppIcon from '../../assets/images/app_icon.png'
import ImageBgZero from '../../assets/images/bg_zero.png'
import ImageVector from '../../assets/images/vector_red.png'

const styles = StyleSheet.create({
  vector_red: {
    position: 'absolute',
    width: '100%',
    top: '14%',
    bottom: '57.64%',
  },
  icon: {
    width: 119.37,
    height: 159,
    position: 'absolute',
    top: 75,
    left: 121,
  },
  bg: { width: '100%', height: 395, marginTop: -10, position: 'absolute' },
  container: { flex: 1 },
})

const WelcomeScreen = ({ children }: any = {}) => (
  <>
    <Image source={ImageBgZero} resizeMode="contain" style={styles.bg} />
    <Image source={ImageAppIcon} resizeMode="contain" style={styles.icon} />
    <Image
      source={ImageVector}
      resizeMode="contain"
      style={styles.vector_red}
    />
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  </>
)
export default WelcomeScreen
