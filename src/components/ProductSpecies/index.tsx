import React from 'react'
import { View, StyleSheet } from 'react-native'

import { useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import getImageUriFromEntity from '../../utils/getImageUriFromEntity'
import { SvgCssUri } from 'react-native-svg'
import { scale } from '../../styles'

const styles = StyleSheet.create({
  categoryImageContainer: {
    marginVertical: scale(0.2),
    marginHorizontal: scale(0.2),
    width: scale(0.6),
    height: scale(0.6),
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 2,
    marginLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  border: {
    borderWidth: 0.4,
    borderColor: 'rgba(24, 65, 140, 1)',
  },
})

const ProductSpecies = ({ species_id = 0, bordered = false, style = {} }) => {
  const species = useSelector((state) =>
    datasetSelector(state, 'species', { id: species_id, single_format: true })
  )

  return (
    <View
      style={[
        styles.categoryImageContainer,
        bordered ? styles.border : {},
        style,
      ]}
    >
      <SvgCssUri
        uri={getImageUriFromEntity(species)}
        style={styles.categoryImage}
      />
    </View>
  )
}

export default ProductSpecies
