import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import ImageProduct from '../../../assets/images/product_1.png'
import ImageCow from '../../../assets/images/cow.png'
import ImageVaccine from '../../../assets/images/vaccine.png'
import global_styles, { colors, scale } from '../../../styles'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(242,242,242,1)',
    marginHorizontal: scale(0.242),
    marginVertical: scale(0.242),
    borderRadius: scale(0.121),
  },
  image: {
    width: '100%',
    height: scale(3.3),
    marginBottom: scale(0.42),
  },
  name: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: scale(0.2),
    fontSize: scale(0.3),
    marginVertical: scale(0.15),
    ...global_styles.textPrimary,
  },
  categoryImageContainer: {
    width: scale(0.5),
    height: scale(0.5),
    backgroundColor: 'white',
    padding: scale(0.049),
    borderRadius: scale(0.049),
    marginLeft: scale(0.049),
  },
  categoryImagesContainer: {
    alignItems: 'flex-end',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  name_container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: scale(0.049),
  },
  button: {
    backgroundColor: colors.primary(),
    alignSelf: 'center',
    paddingVertical: scale(0.17),
    width: '100%',
    justifyContent: 'center',
    borderRadius: scale(0.099),
  },
  buttonText: {
    fontSize: scale(0.27),
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  infoContainer: { flexDirection: 'row', marginHorizontal: scale(0.121) },
  buttonContainer: {
    margin: scale(0.121),
  },
})

const ProductListItem = ({ name = 'Antibrucelica Rosenbusch', style = {} }) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  return (
    <KeyboardAwareScrollView style={[styles.container, style]}>
      <Image source={ImageProduct} resizeMode="contain" style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.name_container}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.categoryImagesContainer}>
          <View style={[styles.categoryImageContainer, { marginBottom: 3 }]}>
            <Image
              source={ImageVaccine}
              resizeMode="contain"
              style={styles.categoryImage}
            />
          </View>
          <View style={styles.categoryImageContainer}>
            <Image
              source={ImageCow}
              resizeMode="contain"
              style={styles.categoryImage}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProductDetails', { id: 0 })}
        >
          <Text style={styles.buttonText}>{t('show_product')}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}
export default ProductListItem
