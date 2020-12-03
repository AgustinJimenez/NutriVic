import React from 'react'
import { Image, StyleSheet, SafeAreaView, View } from 'react-native'
import ImageBgZero from '../../assets/images/banner_top.png'
import { scale } from '../../styles'

const styles = StyleSheet.create({
  vector_red: {
    position: 'absolute',
    width: '100%',
    top: scale(3.7),
  },
  icon: {
    position: 'absolute',
    width: 119.37,
    height: 159,
    left: 121,
    top: scale(2.3),
  },
  bg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 395,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: { flex: 1 },
})

const IntroContainer = ({ children }: any = {}) => (
  <View style={styles.container}>
    <Image source={ImageBgZero} style={styles.bg} />
    <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
  </View>
)
export default IntroContainer
