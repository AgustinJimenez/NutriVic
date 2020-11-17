import React from 'react'
import {
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ParriOnContainer from '../../../components/ParriOnContainer'
import ImageActivaElAsado from '../../../assets/images/activa_el_asado.png'
import { logoutAction } from '../../../actions'
import { scale } from '../../../theme/variables/commonStyles'
import ImageFlame from '../../../assets/images/flame.png'
import { useTranslation } from 'react-i18next'
import capitalize from '../../../utils/capitalize'
import BottomNav from '../../../components/BottomNav'
import ProductCard from '../../../components/ProductCard'
import { datasetSelector } from '../../../redux/selectors'
import { setDatasetToReducer } from '../../../redux/actions'
import { useNavigation } from '@react-navigation/native'
import ProductSelectionPanel from './ProductSelectionPanel'

const styles = StyleSheet.create({
  listTitle: { color: 'white', fontSize: scale(0.75), fontWeight: '700' },
})

const ProductsScreen = ({}) => {
  const navigation = useNavigation()
  const product_selection_panel_open: boolean = useSelector((state) =>
    datasetSelector(state, 'product_selection_panel_open')
  )
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const logout = () => dispatch(logoutAction())
  const selectProduct = (id: number) =>
    dispatch(setDatasetToReducer(id, 'selected_product_id'))

  const products = useSelector((state) =>
    datasetSelector(state, 'products', { list_format: true })
  )
  const selected_product_id = useSelector((state) =>
    datasetSelector(state, 'selected_product_id')
  )
  const selected_product: any = useSelector((state) =>
    datasetSelector(state, 'products', { id: selected_product_id })
  )
  const toggleProductSelectionPanel = (isVisible: any = null) => {
    if (isVisible === null) isVisible = !product_selection_panel_open
    dispatch(setDatasetToReducer(isVisible, 'product_selection_panel_open'))
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      toggleProductSelectionPanel(false)
    })
    navigation.addListener('blur', () => {
      toggleProductSelectionPanel(false)
    })

    return unsubscribe
  }, [navigation])

  return (
    <ParriOnContainer hasAvatar hasShoppingCart>
      <Image
        source={ImageFlame}
        resizeMode="contain"
        style={{
          width: scale(3),
          height: scale(3),
          alignSelf: 'center',
          position: 'absolute',
          top: Platform.OS === 'ios' ? scale(1.5) : scale(0.5),
        }}
      />
      <Image
        source={ImageActivaElAsado}
        resizeMode="contain"
        style={{
          width: scale(8),
          height: scale(2.5),
          alignSelf: 'center',
          marginTop: scale(1.7),
          marginBottom: -scale(0.3),
        }}
      />
      <View style={{ paddingHorizontal: scale(0.3) }}>
        <Text style={styles.listTitle}>
          {capitalize(t('for_the_ideal_barbecue'), { firstOnly: true })}
        </Text>
        <FlatList
          data={products}
          renderItem={({
            item: { id, title, subtitle, price, image },
            index,
          }: any) => {
            return (
              <ProductCard
                id={id}
                key={index}
                title={title}
                subtitle={subtitle}
                price={price}
                image={image}
                onPress={() => {
                  selectProduct(id)
                  toggleProductSelectionPanel()
                }}
              />
            )
          }}
          horizontal
        />
        <Text style={[styles.listTitle, { marginTop: scale(0.6) }]}>
          {capitalize(t('so_that_nothing_is_missing'), { firstOnly: true })}
        </Text>
        <FlatList
          data={products}
          renderItem={({
            item: { id, title, subtitle, price, image },
            key,
            separators,
          }: any) => (
            <ProductCard
              id={id}
              key={key}
              title={title}
              subtitle={subtitle}
              price={price}
              image={image}
              onPress={() => {
                selectProduct(id)
                toggleProductSelectionPanel()
              }}
            />
          )}
          horizontal
        />
      </View>
      <ProductSelectionPanel />
      <BottomNav />
    </ParriOnContainer>
  )
}
export default ProductsScreen
