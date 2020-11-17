import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import ImageArrowDown from '../../../../assets/images/arrow-down.png'
import { Icon } from 'native-base'
import { colors, scale } from '../../../../theme/variables/commonStyles'
import { productSelectedSelector } from '../../../../redux/selectors'
import { useSelector } from 'react-redux'
import Select from '../../../../components/utils/Select'
import { useTranslation } from 'react-i18next'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scale(0.2),
  },
  plusIconContainer: {
    backgroundColor: colors.lightTransparent,
    paddingHorizontal: scale(0.4),
    paddingVertical: scale(0.3),
    borderRadius: scale(0.15),
  },
  plusIcon: { fontSize: scale(0.5) },
  countContainer: {
    backgroundColor: 'white',
    paddingHorizontal: scale(0.5),
    paddingVertical: scale(0.2),
    borderRadius: scale(0.15),
  },
  count: { fontWeight: '700', fontSize: scale(0.7) },
  minusIconContainer: {
    backgroundColor: colors.lightTransparent,
    paddingHorizontal: scale(0.4),
    paddingVertical: scale(0.3),
    borderRadius: scale(0.15),
  },
  minusIcon: { fontSize: scale(0.5) },
  select: {
    width: scale(4),
    height: scale(),
    backgroundColor: colors.lightTransparent,
    borderRadius: scale(0.2),
    marginTop: scale(0.3),
    marginBottom: scale(0.3),
  },
  selectIconContainer: {
    flex: 0.4,
    backgroundColor: 'white',
    borderRadius: scale(0.17),
  },
  selectIcon: {
    width: scale(0.6),
    alignSelf: 'center',
  },
})

const ProductCountSelection = () => {
  let { t } = useTranslation()
  let [productCount, setProductCount] = React.useState(0)
  const updateProductCount = (number: number) => {
    if (number < 0) number = 0
    setProductCount(Math.abs(number))
  }

  const selected_product: any = useSelector((state) =>
    productSelectedSelector(state)
  )

  if (!selected_product.weight)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => updateProductCount(productCount + 1)}
          style={styles.plusIconContainer}
        >
          <Icon type="AntDesign" name="plus" style={styles.plusIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.countContainer}>
          <Text style={styles.count}>{productCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.minusIconContainer}
          onPress={() => updateProductCount(productCount - 1)}
        >
          <Icon type="AntDesign" name="minus" style={styles.minusIcon} />
        </TouchableOpacity>
      </View>
    )

  return (
    <Select
      style={styles.select}
      onValueChange={(value: any) => {
        setProductCount(value)
      }}
      placeholder={t('select')}
      selectedValue={productCount}
      items={[
        { label: '1 kgs', value: 1 },
        { label: '2 kgs', value: 2 },
        { label: '3 kgs', value: 3 },
        { label: '4 kgs', value: 4 },
        { label: '5 kgs', value: 5 },
        { label: '6 kgs', value: 6 },
        { label: '7 kgs', value: 7 },
        { label: '8 kgs', value: 8 },
        { label: '9 kgs', value: 9 },
        { label: '10 kgs', value: 10 },
        { label: '11 kgs', value: 11 },
        { label: '12 kgs', value: 12 },
        { label: '13 kgs', value: 13 },
      ]}
      iosIcon={
        <View style={styles.selectIconContainer}>
          <Image
            source={ImageArrowDown}
            style={styles.selectIcon}
            resizeMode="contain"
          />
        </View>
      }
    />
  )
}

export default ProductCountSelection
