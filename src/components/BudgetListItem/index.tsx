import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Icon } from 'native-base'
import styles from './styles'
import { datasetSelector } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import getImageUriFromEntity from '../../utils/getImageUriFromEntity'
import { setDatasetToReducer } from '../../redux/actions'
import * as Animatable from 'react-native-animatable'
import sleep from '../../utils/sleep'

const CounterInputs = ({ quantity = 0, onChange = (value: number) => {} }) => {
  const onCounterChange = React.useCallback(
    (type: string = 'plus' || 'minus') => {
      let newCount = quantity
      switch (type) {
        case 'plus':
          newCount++
          break

        case 'minus':
          newCount--
          if (newCount < 1) newCount = 1
          break

        default:
          break
      }
      onChange(newCount)
    },
    [quantity]
  )

  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity
        style={styles.counterIconContainer}
        onPress={() => onCounterChange('minus')}
      >
        <Icon name="minus" type="Entypo" style={styles.counterIcon} />
      </TouchableOpacity>
      <View style={styles.counterTextContainer}>
        <Text style={styles.counterText}>{quantity}</Text>
      </View>
      <TouchableOpacity
        style={styles.counterIconContainer}
        onPress={() => onCounterChange('plus')}
      >
        <Icon name="plus" type="Entypo" style={styles.counterIcon} />
      </TouchableOpacity>
    </View>
  )
}

const RemoveButton = ({ onPress = () => {} } = {}) => {
  return (
    <TouchableOpacity style={styles.removeCross} onPress={onPress}>
      <Icon name="cross" type="Entypo" style={styles.removeCrossIcon} />
    </TouchableOpacity>
  )
}

const BudgetProductListItem = ({ product_id = 0, quantity = 0 }: any) => {
  const ref: any = React.useRef(null)
  const fadeOut = () => ref?.current?.fadeOutRight(800)
  const fadeIn = () => ref?.current?.fadeInLeft(800)
  React.useEffect(() => {
    fadeIn()
    return () => {
      fadeOut()
    }
  }, [])
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const product = useSelector((state) =>
    datasetSelector(state, 'products', { id: product_id, single_format: true })
  )
  const request_budget_products = useSelector((state) =>
    datasetSelector(state, 'request_budget_products')
  )
  const onChangeQuantity = React.useCallback(
    (newQuantity: number) => {
      let new_request_budget = request_budget_products.map((item: any) => {
        if (item['product_id'] === product_id) item['quantity'] = newQuantity

        return item
      })
      dispatch(
        setDatasetToReducer(new_request_budget.all(), 'request_budget_products')
      )
    },
    [request_budget_products]
  )

  const onRemoveProduct = React.useCallback(async () => {
    let new_request_budget = request_budget_products
      .filter((item: any) => item['product_id'] !== product_id)
      .all()
    dispatch(setDatasetToReducer(new_request_budget, 'request_budget_products'))
  }, [request_budget_products])

  let productUri = getImageUriFromEntity(product)

  return (
    <Animatable.View style={styles.container} ref={ref}>
      {!!productUri && (
        <Image
          source={{ uri: productUri }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.inputsContainer}>
          <Text style={styles.quantity}>{t('quantity')}</Text>
          <CounterInputs quantity={quantity} onChange={onChangeQuantity} />
        </View>
      </View>
      <RemoveButton onPress={onRemoveProduct} />
    </Animatable.View>
  )
}

export default BudgetProductListItem
