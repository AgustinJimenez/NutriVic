import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import ImageHorse from '../../assets/images/horse.png'
import ImagePig from '../../assets/images/pig.png'
import ImageCow from '../../assets/images/cow.png'
import ImageSheep from '../../assets/images/sheep.png'
import ImageVaccine from '../../assets/images/vaccine.png'

const styles = StyleSheet.create({
  categoryImageContainer: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 2,
    marginLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  border: {
    borderWidth: 0.4,
    borderColor: 'rgba(24, 65, 140, 1)',
  },
})

const ProductIcon = ({
  code = 'cows' || 'pigs' || 'sheeps' || 'horses' || 'vaccines',
  bordered = false,
  style = {},
}) => {
  let category_image_src = null
  switch (code) {
    case 'cows':
      category_image_src = ImageCow
      break
    case 'pigs':
      category_image_src = ImagePig
      break
    case 'sheeps':
      category_image_src = ImageSheep
      break
    case 'horses':
      category_image_src = ImageHorse
    case 'vaccines':
      category_image_src = ImageVaccine
      break

    default:
      break
  }

  return (
    <View
      style={[
        styles.categoryImageContainer,
        bordered ? styles.border : {},
        style,
      ]}
    >
      <Image
        source={category_image_src}
        resizeMode="contain"
        style={styles.categoryImage}
      />
    </View>
  )
}

export default ProductIcon
