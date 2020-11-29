import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import ImageProduct from '../../../assets/images/product_1.png'
import ImageCow from '../../../assets/images/cow.png'
import ImageVaccine from '../../../assets/images/vaccine.png'
import global_styles, { colors } from '../../../styles'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(242,242,242,1)',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  image: {
    width: 145,
    height: 135.66,
    marginBottom: 20,
  },
  name: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: 15,
    fontSize: 12,
    marginVertical: 5,
    ...global_styles.textPrimary,
  },
  categoryImageContainer: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 2,
    marginLeft: 2,
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
    borderRadius: 2,
    paddingHorizontal: 10,
    //height: 38,
  },
  button: {
    backgroundColor: colors.primary(),
    alignSelf: 'center',
    height: 27,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  infoContainer: { flexDirection: 'row', marginHorizontal: 5 },
  buttonContainer: {
    margin: 5,
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
