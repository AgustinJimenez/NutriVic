import React from 'react'
import {
  SafeAreaView,
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
  container: { flex: 1 },
  bgWavesTop: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    opacity: 0.67,
  },
  bgWavesBottom: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    opacity: 0.67,
    bottom: -scale(5),
  },
  avatarContainer: {
    flex: 0.2,
    marginLeft: 10,
    //backgroundColor: 'red',
  },
  avatar: {
    width: scale(1.5),
    height: scale(1.5),
    //backgroundColor: 'green',
  },
  navbar: {
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? scale(1.1) : scale(0.5),
    paddingBottom: scale(0.4),
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
    //backgroundColor: 'red',
  },
  shoppingCart: {
    //backgroundColor: 'red',
    width: scale(0.8),
    height: scale(0.8),
  },
  userNameContainer: {
    flex: 1,
    justifyContent: 'center',
    left: 15,
    //backgroundColor: 'red',
  },
  user_name: {
    color: 'white',
    fontWeight: '600',
    fontSize: scale(0.4),
    marginTop: scale(0.3),
  },
})

const MainContainer = ({ children }) => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
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
        <Text style={styles.user_name}>Hola, Juan</Text>
      </View>
      <TouchableOpacity style={styles.shoppingCartContainer} onPress={() => {}}>
        <Image
          source={ImageShoppingCart}
          resizeMode="contain"
          style={styles.shoppingCart}
        />
      </TouchableOpacity>
    </View>
    {children}
  </View>
)
export default MainContainer
