import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { colors, scale } from '../../styles'

const styles = StyleSheet.create({
  container: {
    width: scale(2),
    height: scale(2.2),
    paddingVertical: scale(0.2),
    paddingHorizontal: scale(0.2),
    backgroundColor: colors.light(0.48),
    marginHorizontal: scale(0.15),
    alignItems: 'center',
    borderRadius: scale(0.2),
  },
  title: {
    color: colors.primary(),
    fontWeight: '700',
    fontSize: 12,
    //fontSize: scale(0.34),
    marginVertical: scale(0.15),
    textAlign: 'center',
  },
  image: { width: 55, height: 51 },
})

const CategoryButton = ({
  title = '',
  img_source,
  onPress = () => {},
  titleStyles = {},
}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={img_source} resizeMode="contain" style={styles.image} />
      <Text style={[styles.title, titleStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButton
