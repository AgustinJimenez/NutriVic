import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Text,
  View,
} from 'react-native'
//import ImageAtomsBg from '../../assets/images/atoms_bg.png'
import ImageWaves from '../../assets/images/waves_bg.png'
import ImageAvatarDefault from '../../assets/images/avatar_default.png'
import ImageShoppingCart from '../../assets/images/shopping_cart.png'
import { colors, scale } from '../../styles'

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  bgWavesTop: {
    position: 'absolute',
    width: '100%',
    height: scale(6.184),
    top: scale(0.5),
    opacity: 0.4,
  },
  bgWavesBottom: {
    position: 'absolute',
    width: '100%',
    height: scale(6.184),
    opacity: 0.4,
    bottom: 0,
    transform: [{ rotate: '180deg' }],
  },
  avatarContainer: {
    flex: 0.2,
    marginLeft: 10,
    //backgroundColor: 'red',
  },
  avatar: {
    width: scale(0.968),
    height: scale(0.968),
    //backgroundColor: 'green',
  },
  navbar: {
    flexDirection: 'row',
    paddingTop: scale(Platform.OS === 'ios' ? 1.1 : 0.5),
    paddingBottom: scale(0.2),
    backgroundColor: colors.primary(),
  },
  shoppingCartContainer: {
    position: 'relative',
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.06)',
    paddingHorizontal: scale(0.4),
    paddingVertical: scale(0.3),
    borderRadius: scale(0.1),
    width: scale(1.257),
    height: scale(1.089),
    marginTop: Platform.select({ ios: 0, android: -5 }),
    //backgroundColor: 'red',
  },
  shoppingCart: {
    //backgroundColor: 'red',
    width: '140%',
    height: '140%',
  },
  userNameContainer: {
    flex: 1,
    textAlignVertical: 'center',
  },
  user_name: {
    color: 'white',
    fontWeight: '600',
    fontSize: scale(0.4),
    marginTop: scale(0.3),
  },
})

const MainContainer = ({ children }: any) => (
  <View style={styles.container}>
    <Image source={ImageWaves} style={styles.bgWavesTop} resizeMode="cover" />
    <Image
      source={ImageWaves}
      style={styles.bgWavesBottom}
      resizeMode="cover"
    />
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => {}} style={styles.avatarContainer}>
        <Image
          source={ImageAvatarDefault}
          resizeMode="contain"
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.userNameContainer}>
        <Text style={styles.user_name}>Hola, Juan </Text>
      </View>
      <TouchableOpacity style={styles.shoppingCartContainer} onPress={() => {}}>
        <Image
          source={ImageShoppingCart}
          style={styles.shoppingCart}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    </View>
    {children}
  </View>
)
export default MainContainer
