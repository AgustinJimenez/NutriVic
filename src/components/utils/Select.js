import React from 'react'
import { Platform, TouchableOpacity, Text, FlatList } from 'react-native'
import { Icon, Picker, View, Item } from 'native-base'
import { colors, scale } from '../../styles'
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import { setDatasetToReducer } from '../../redux/actions'

const Select = ({
  placeholder,
  style,
  selectedValue,
  onValueChange,
  items = [],
  iosIcon = (
    <View style={{ flex: 1 }}>
      <Icon
        style={{ alignSelf: 'flex-end', paddingRight: 10 }}
        name="arrow-down"
      />
    </View>
  ),
}) => {
  let dispatch = useDispatch()
  let product_count_modal_is_visible = useSelector((state) =>
    datasetSelector(state, 'product_count_modal_is_visible')
  )
  let setVisible = (is_visible) =>
    dispatch(setDatasetToReducer(is_visible, 'product_count_modal_is_visible'))

  let selectedValueLabel = null
  items.some(({ value, label }) => {
    if (value === selectedValue) {
      selectedValueLabel = label
      return true
    }
    return false
  })

  return (
    <>
      <TouchableOpacity
        style={[{ flexDirection: 'row' }, style]}
        onPress={() => setVisible(!product_count_modal_is_visible)}
      >
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '500',
              fontSize: scale(0.4),
            }}
          >
            {!!selectedValue ? selectedValueLabel : placeholder}
          </Text>
        </View>
        {iosIcon}
      </TouchableOpacity>
      <Modal
        isVisible={product_count_modal_is_visible}
        onBackButtonPress={() => setVisible(false)}
        style={{
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.brandSecondary,
            borderRadius: scale(0.4),
            marginVertical: scale(1.5),
          }}
        >
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{
              alignSelf: 'flex-end',
              padding: scale(0.2),
            }}
          >
            <Icon name="cross" type="Entypo" />
          </TouchableOpacity>

          <Text
            style={{
              alignSelf: 'center',
              fontSize: scale(0.5),
              fontWeight: '800',
              paddingBottom: scale(0.3),
            }}
          >
            {placeholder}
          </Text>
          <FlatList
            style={{ height: '100%' }}
            data={items}
            renderItem={({ item, key }) => (
              <TouchableOpacity
                key={key}
                onPress={() => {
                  onValueChange(item.value)
                  setVisible(false)
                }}
                style={{
                  borderTopColor: 'gray',
                  borderTopWidth: scale(0.03),
                  width: '100%',
                  alignItems: 'center',
                  paddingVertical: scale(0.5),
                }}
              >
                <Text style={{ fontSize: scale(0.4) }}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </>
  )
}

export default Select
