import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { datasetSelector } from '../../../redux/selectors'
import getImageUriFromEntity from '../../../utils/getImageUriFromEntity'
import { SpeciesIcon } from './SpeciesIcon'
import styles from './styles'
import { collect } from 'collect.js'

const ProductListItem = ({ product_id = 0, style = {} } = {}) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const product = useSelector((state) =>
    datasetSelector(state, 'products', { id: product_id, single_format: true })
  )

  let product_species = collect(product['product_species'])

  let productImageUri = getImageUriFromEntity(product)

  const goToProduct = React.useCallback(() => {
    navigation.navigate('ProductDetails', { id: product_id })
  }, [])

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={goToProduct}>
      {!!productImageUri && (
        <Image
          //loadingIndicatorSource={ImageNutrivic}
          source={{ uri: productImageUri }}
          resizeMode="contain"
          style={styles.image}
        />
      )}
      <View style={styles.actionContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.name_container}>
            <Text style={styles.name}>{product.name}</Text>
          </View>
          {product_species
            .chunk(2)
            .map((product_species_chunk: any, key1: number) => (
              <View style={styles.categoryImagesContainer} key={key1}>
                {product_species_chunk.map(
                  (product_specie: any, key2: number) => (
                    <SpeciesIcon
                      species_id={product_specie['species_id']}
                      key={key2}
                    />
                  )
                )}
              </View>
            ))}
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{t('show_product')}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default ProductListItem
