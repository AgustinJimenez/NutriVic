import React from 'react'
import {
  View,
  Touchable,
  Image,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native'
import MainContainer from '../../components/MainContainer'
import { useRoute } from '@react-navigation/native'
import global_styles, { scale } from '../../styles'
import ImageHorse from '../../assets/images/horse.png'
import ImagePig from '../../assets/images/pig.png'
import ImageCow from '../../assets/images/cow.png'
import ImageSheep from '../../assets/images/sheep.png'
import { useTranslation } from 'react-i18next'
import ProductListItem from './ProductListItem'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  image: {
    width: scale(1.3),
    height: scale(1.3),
    marginTop: scale(0.3),
    alignSelf: 'center',
  },
  product: {
    width: scale(4.4),
  },
  productsList: {
    alignItems: 'center',
    paddingBottom: scale(8),
    marginTop: scale(0.45),
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: scale(2.3),
  },
})

const ProductsScreen = ({}) => {
  const route: any = useRoute()
  const { t } = useTranslation()

  let category_image_src = null
  switch (route.params.code) {
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
      break
    default:
      break
  }

  const products: any = [
    {
      name: 'Antibrucelica Rosenbusch',
    },
    {
      name: 'Antibrucelica Rosenbusch',
    },
    {
      name: 'Antibrucelica Rosenbusch',
    },
    {
      name: 'Antibrucelica Rosenbusch',
    },
    {
      name: 'Antibrucelica Rosenbusch',
    },
    {
      name: 'Antibrucelica Rosenbusch',
    },
  ]

  return (
    <MainContainer>
      <Image
        source={category_image_src}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={[global_styles.title]}>
        {t('products_for')} {t(route.params.code)}
      </Text>
      <FlatList
        contentContainerStyle={styles.productsList}
        data={products}
        numColumns={2}
        renderItem={({ item, index }: any) => (
          <ProductListItem
            name={item.name}
            style={styles.product}
            key={index}
          />
        )}
      />
      <LinearGradient
        colors={['rgba(255,255,255, 0)', 'rgba(255,255,255,1)']}
        style={styles.bottomGradient}
      />
    </MainContainer>
  )
}
export default ProductsScreen
