import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { colors, scale } from '../../../../theme/variables/commonStyles'
import { useNavigation } from '@react-navigation/native'

const AddProductButton = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.brandPrimary,
        flexDirection: 'row',
        paddingHorizontal: scale(0.5),
        paddingVertical: scale(0.5),
        borderRadius: scale(0.3),
        marginVertical: scale(0.4),
      }}
      onPress={() => {
        navigation.navigate('Summary')
      }}
    >
      <Text
        style={{
          color: colors.brandSecondary,
          fontSize: scale(0.55),
          paddingRight: scale(0.6),
        }}
      >
        Agregar al carrito
      </Text>
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: scale(0.3),
          paddingVertical: scale(0.1),
          borderRadius: scale(0.15),
        }}
      >
        <Text
          style={{
            fontSize: scale(0.45),
            color: colors.brandSecondary,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}
        >
          150.000 Gs.
        </Text>
      </View>
    </TouchableOpacity>
  )
}
export default AddProductButton
