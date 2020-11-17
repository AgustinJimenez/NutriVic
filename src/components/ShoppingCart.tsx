import React from 'react'
import { Image, TouchableOpacity, Platform } from 'react-native'
import ImageShoppingCart from '../assets/images/shopping-cart.png'
import ImageShoppingCartDot from '../assets/images/shopping-cart-dot.png'
import { scale } from '../theme/variables/commonStyles'

const ShoppingCart = ({
  style = {},
  onPress = () => {},
  hasNotifications = true,
}) => {
  const width = !!style['width'] ? style['width'] : scale(1)

  return (
    <TouchableOpacity
      style={[
        {
          width,
          height: width,
          position: 'absolute',
          right: scale(0.1),
          top: Platform.OS === 'ios' ? scale(1.2) : scale(0.5),
        },
        style /* , { backgroundColor: 'red' } */,
      ]}
      onPress={onPress}
    >
      <Image
        source={ImageShoppingCart}
        resizeMode="contain"
        style={{ width, height: width }}
      />
      {hasNotifications && (
        <Image
          source={ImageShoppingCartDot}
          resizeMode="contain"
          style={{
            position: 'absolute',
            right: 0,
            width: scale(),
            height: scale(),
          }}
        />
      )}
    </TouchableOpacity>
  )
}

export default ShoppingCart
