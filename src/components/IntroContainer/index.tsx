import React from 'react'
import { Image, StyleSheet, SafeAreaView, View } from 'react-native'
import ImageBgZero from '../../assets/images/banner_top.png'
import { scale } from '../../styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    width: '100%',
    height: scale(10),
  },
  safeArea: {
    flex: 1,
    paddingBottom: -scale(5),
  },
  emptySpace: { height: scale(4) },
})

const IntroContainer = ({ children }: any = {}) => (
  <KeyboardAwareScrollView style={styles.container} bounces={false}>
    <Image source={ImageBgZero} style={styles.image} resizeMode="cover" />
    <SafeAreaView style={styles.safeArea}>
      {children}
      <View style={styles.emptySpace} />
    </SafeAreaView>
  </KeyboardAwareScrollView>
)
export default IntroContainer
