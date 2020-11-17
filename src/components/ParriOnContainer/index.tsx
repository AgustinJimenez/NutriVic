import React from 'react'
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native'
import ImageAtomsBg from '../../assets/images/atoms_bg.png'
import commonColor from '../../theme/variables/commonColor.js'
import AvatarImage from '../../assets/images/avatar_image.png'
import { scale } from '../../theme/variables/commonStyles'
import ShoppingCart from '../../components/ShoppingCart'

const styles = StyleSheet.create({
  container: { flex: 1 },
  bgImage: {
    flex: 1,
    backgroundColor: commonColor.brandPrimary,
  },
  avatarContainer: { position: 'absolute', left: scale(0.3) },
  avatar: {
    width: scale(),
    height: scale(),
    position: 'absolute',
    top: Platform.OS === 'ios' ? scale(1.1) : scale(0.5),
  },
})

const Avatar = () => (
  <TouchableOpacity onPress={() => {}} style={[styles.avatarContainer]}>
    <Image source={AvatarImage} resizeMode="contain" style={styles.avatar} />
  </TouchableOpacity>
)

const ParriOnContainer = ({
  children,
  hasAvatar = false,
  hasShoppingCart = false,
}) => (
  <ImageBackground
    source={ImageAtomsBg}
    style={styles.bgImage}
    resizeMode="stretch"
  >
    <SafeAreaView style={styles.container}>
      {children}
      {hasAvatar && <Avatar />}
      {hasShoppingCart && <ShoppingCart />}
    </SafeAreaView>
  </ImageBackground>
)
export default ParriOnContainer
