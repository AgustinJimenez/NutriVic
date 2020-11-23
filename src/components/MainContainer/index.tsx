import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native'
//import ImageAtomsBg from '../../assets/images/atoms_bg.png'
import ImageWaves from '../../assets/images/waves_bg.png'
import { scale } from '../../styles'

const styles = StyleSheet.create({
  container: { flex: 1 },
  bgImageTop: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    opacity: 0.67,
  },
  bgImageBottom: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    opacity: 0.67,
    bottom: -scale(5),
  },
  avatarContainer: { position: 'absolute', left: scale(0.3) },
  avatar: {
    width: scale(),
    height: scale(),
    position: 'absolute',
    top: Platform.OS === 'ios' ? scale(1.1) : scale(0.5),
  },
})

const MainContainer = ({ children }) => (
  <>
    <Image source={ImageWaves} style={styles.bgImageTop} resizeMode="cover" />
    <Image
      source={ImageWaves}
      style={styles.bgImageBottom}
      resizeMode="cover"
    />
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  </>
)
export default MainContainer
