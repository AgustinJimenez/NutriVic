import React from 'react'
import { Text, FlatList } from 'react-native'
import MainContainer from '../../components/MainContainer'
import { useRoute } from '@react-navigation/native'
import global_styles from '../../styles'
import { useTranslation } from 'react-i18next'
import ProductListItem from './ProductListItem'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import getImageUriFromEntity from '../../utils/getImageUriFromEntity'
import { SvgCssUri } from 'react-native-svg'
import styles from './styles'

const ProductsScreen = ({}) => {
  const route: any = useRoute()
  const { t } = useTranslation()
  const { category_id, sector_id, species_id, product_line_id } = route.params
  let title: string = ''
  let image_uri: string = ''
  let products = useSelector((state) =>
    datasetSelector(state, 'products', { list_format: true })
  )
  let category =
    useSelector((state) =>
      datasetSelector(state, 'categories', {
        id: category_id,
        single_format: true,
      })
    ) || {}
  let sector = useSelector((state) =>
    datasetSelector(state, 'sectors', { id: sector_id, single_format: true })
  )
  let species = useSelector((state) =>
    datasetSelector(state, 'species', { id: species_id, single_format: true })
  )
  if (!!category_id) {
    products = products.where('category_id', category_id)
    title = category['name']
    image_uri = getImageUriFromEntity(category)
  } else if (!!sector_id) {
    products = products.where('sector_id', sector_id)
    title = sector['name']
    image_uri = getImageUriFromEntity(sector)
  } else if (!!species_id) {
    products = products.filter((product: any, key: number) => {
      let hasSpecies = false
      product['product_species'].some((product_species: any) => {
        if (product_species['species_id'] === species_id) {
          hasSpecies = true
          return true
        }
      })
      return hasSpecies
    })
    title = species?.['name']
    image_uri = getImageUriFromEntity(species)
  }
  /* 
  console.log('ProductsScreen ===> ', {
    category_id,
    sector_id,
    species_id,
    category,
    sector,
    species,
    image_uri,
  })
 */
  return (
    <MainContainer>
      <SvgCssUri uri={image_uri} style={styles.image} />
      <Text style={[global_styles.title]}>
        {t('products_for')} {title}
      </Text>
      <FlatList
        contentContainerStyle={styles.productsList}
        data={products.all()}
        numColumns={2}
        renderItem={({ item, index }: any) => (
          <ProductListItem
            product_id={item.id}
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
