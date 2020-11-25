import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { colors, scale } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 7,
    paddingHorizontal: 8,
    backgroundColor: colors.light(0.48),
    marginHorizontal: scale(0.15),
    alignItems: 'center',
    borderRadius: 6,
  },
  title: {
    color: colors.primary(),
    fontWeight: '700',
    fontSize: 12,
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
