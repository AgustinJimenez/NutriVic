import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { useTranslation } from 'react-i18next'
import { setDatasetToReducer } from '../../../../redux/actions'
import {
  datasetSelector,
  productSelectedSelector,
} from '../../../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { colors, scale } from '../../../../theme/variables/commonStyles'
import capitalize from '../../../../utils/capitalize'
import AddProductButton from './AddProductButton'
import ProductCountSelection from './ProductCountSelection'

const ProductSelectionPanel = ({}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const product_selection_panel_open: boolean = useSelector((state) =>
    datasetSelector(state, 'product_selection_panel_open')
  )
  let product_count_modal_is_visible = useSelector((state) =>
    datasetSelector(state, 'product_count_modal_is_visible')
  )
  const toggleProductSelectionPanel = (isVisible: any = null) => {
    if (isVisible === null) isVisible = !product_selection_panel_open
    dispatch(setDatasetToReducer(isVisible, 'product_selection_panel_open'))
  }
  const selected_product: any = useSelector((state) =>
    productSelectedSelector(state)
  )

  return (
    <Modal
      isVisible={product_selection_panel_open}
      onBackdropPress={() => toggleProductSelectionPanel(false)}
      animationInTiming={500}
      animationOutTiming={500}
      swipeDirection={!product_count_modal_is_visible ? 'down' : undefined}
      onSwipeComplete={() =>
        !product_count_modal_is_visible && toggleProductSelectionPanel(false)
      }
      backdropColor="transparent"
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}
    >
      <View
        style={{
          backgroundColor: colors.brandSecondary,
          paddingTop: scale(0.4),
          alignItems: 'center',
          marginTop: scale(1.4),
          borderTopEndRadius: scale(0.6),
          borderTopStartRadius: scale(0.6),
        }}
      >
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: '91%',
            borderRadius: scale(0.4),
            //backgroundColor: 'red',
            overflow: 'hidden',
          }}
        >
          <Image
            source={{ uri: selected_product?.image }}
            style={{ height: scale(5), width: '100%' }}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: '700', fontSize: scale(0.7) }}>
          {selected_product?.title}
        </Text>
        <Text style={{ fontWeight: '700', fontSize: scale(0.35) }}>
          {capitalize(t('available_cuts'), { firstOnly: true })}
        </Text>
        <ProductCountSelection />
        <AddProductButton />
      </View>
    </Modal>
  )
}

export default ProductSelectionPanel
