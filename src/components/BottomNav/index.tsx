import React from 'react'
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'
import ImageHome from '../../assets/images/home.png'
import ImageMenu from '../../assets/images/menu.png'
import ImageConfig from '../../assets/images/config.png'
import { scale } from '../../theme/variables/commonStyles'
import { useTranslation } from 'react-i18next'
import capitalize from '../../utils/capitalize'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingBottom: scale(0.6),
    paddingTop: scale(0.4),
    backgroundColor: 'rgba(0,0,0,0.21)',
  },
  button: { flex: 1, alignItems: 'center' },
  button_text: { color: 'white', fontWeight: '400', marginTop: scale(0.1) },
  button_icon: { width: scale(0.7), height: scale(0.7) },
})

const BottomNav = ({}) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const route = useRoute()

  return (
    <View style={styles.nav}>
      {[
        { image: ImageHome, text: capitalize(t('home')), onPress: () => {} },
        {
          image: ImageMenu,
          text: capitalize(t('products')),
          onPress: () => {
            if (route.name !== 'Products')
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{ name: 'Products' }],
                })
              )
          },
        },
        {
          image: ImageConfig,
          text: capitalize(t('config')),
          onPress: () => {},
        },
      ].map(({ image, text, onPress }, key) => (
        <TouchableOpacity style={styles.button} key={key} onPress={onPress}>
          <Image
            source={image}
            resizeMode="contain"
            style={styles.button_icon}
          />
          <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default BottomNav
