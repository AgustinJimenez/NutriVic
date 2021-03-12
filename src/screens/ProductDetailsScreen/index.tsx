import React from 'react'
import { View, Image, Text } from 'react-native'
import MainContainer from '../../components/MainContainer'
import { useTranslation } from 'react-i18next'
import FlatButton from '../../components/FlatButton'
import ProductSpecies from '../../components/ProductSpecies'
import { useNavigation, useRoute } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import getImageUriFromEntity from '../../utils/getImageUriFromEntity'
import styles from './styles'
import { setDatasetToReducer } from '../../redux/actions'

const ProductDetailsScreen = ({}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const route: any = useRoute()
  const { id } = route.params
  const product = useSelector(
    (state) =>
      datasetSelector(state, 'products', { id, single_format: true }) || {}
  )
  const request_budget_products = useSelector((state) =>
    datasetSelector(state, 'request_budget_products')
  )

  const addProductToBudget = React.useCallback(() => {
    let productAlreadyInList = false
    let updated_request_budget = request_budget_products.map((item: any) => {
      if (item['product_id'] === id) {
        productAlreadyInList = true
        item['quantity']++
      }

      return item
    })

    if (!productAlreadyInList)
      updated_request_budget.push({ product_id: id, quantity: 1 })

    dispatch(
      setDatasetToReducer(
        updated_request_budget.all(),
        'request_budget_products'
      )
    )

    navigation.navigate('MyBudget')
  }, [request_budget_products])

  return (
    <MainContainer>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.firstPartContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: getImageUriFromEntity(product) }}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.firstPartInfo}>
            <Text style={styles.name}>{product?.name}</Text>
            <Text style={styles.inticationTitle}>{t('indication')}</Text>
            <Text style={styles.indicationContent}>{product.instructions}</Text>
            <View style={styles.categoriesIconsContainers}>
              {product['product_species'].map(
                (product_species: any, key: number) => (
                  <ProductSpecies
                    species_id={product_species['species_id']}
                    bordered
                    key={key}
                    style={styles.categoryIcon}
                  />
                )
              )}
            </View>
          </View>
        </View>
        <View style={styles.secondPartContainer}>
          <View style={[styles.infoContainer, styles.lightBg]}>
            <Text style={styles.infoTitle}>{t('presentation')}</Text>
            <Text style={styles.infoContent}>{product.display}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>{t('dose_and_application')}</Text>
            <Text style={styles.infoContent}>{product.dosage}</Text>
          </View>

          <View style={[styles.infoContainer, styles.lightBg]}>
            <Text style={styles.infoTitle}>{t('composition')}</Text>
            <Text style={styles.infoContent}>{product.composition}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>{t('type')}</Text>
            <Text style={styles.infoContent}>{product.type}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <FlatButton title={t('add_to_budget')} onPress={addProductToBudget} />
      </View>
    </MainContainer>
  )
}
export default ProductDetailsScreen
