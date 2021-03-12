import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { colors, scale } from '../../styles'
import { SvgCssUri } from 'react-native-svg'

const styles = StyleSheet.create({
  container: {
    width: scale(1.8),
    paddingHorizontal: scale(0.2),
    backgroundColor: colors.light(0.48),
    marginHorizontal: scale(0.3),
    alignItems: 'center',
    borderRadius: scale(0.2),
    marginBottom: scale(0.5),
    // backgroundColor: 'red',
  },
  title: {
    color: colors.primary(),
    fontWeight: '700',
    fontSize: scale(0.3),
    //fontSize: scale(0.34),
    marginVertical: scale(0.15),
    textAlign: 'center',
  },
  /* image: {
    //width: scale(2.09),
  }, */
  image: { width: scale(1), height: scale(1.3) },
})

const CategoryButton = ({
  title = '',
  img_source = '',
  onPress = () => {},
  titleStyles = {},
}: any) => {
  // /console.log('CategoryButton ===> ', img_source)
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <SvgCssUri uri={img_source} style={styles.image} />
      <Text style={[styles.title, titleStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButton
