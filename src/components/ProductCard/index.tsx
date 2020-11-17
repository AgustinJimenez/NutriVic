import React from 'react'
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors, scale } from '../../theme/variables/commonStyles'
import numberDotSeparator from '../../utils/numberDotSeparator'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: scale(4.2),
    borderRadius: scale(0.4),
    overflow: 'hidden',
    marginRight: scale(0.3),
  },
  image: {
    width: '100%',
    height: scale(2.7),
  },
  title: { textAlign: 'center', fontWeight: '900', fontSize: scale(0.4) },
  subtitle: {
    textAlign: 'center',
    color: 'gray',
    paddingBottom: scale(0.1),
    fontSize: scale(0.35),
  },
  price: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: colors.brandThird,
    fontWeight: '900',
    fontSize: scale(0.37),
    paddingVertical: scale(0.1),
  },
  addCart: {
    backgroundColor: colors.brandSecondary,
    justifyContent: 'center',
    paddingVertical: scale(0.2),
    fontSize: scale(0.3),
  },
  addCartText: { textAlign: 'center', color: 'black' },
})

const ProductCard = ({
  id = 0,
  title = '',
  subtitle = '',
  price = 0,
  image = '',
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.price}>{numberDotSeparator(price)} el Kg</Text>
      <View style={styles.addCart}>
        <Text style={styles.addCartText}>Agregar al carrito</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard
