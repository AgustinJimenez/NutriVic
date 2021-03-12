import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { datasetSelector } from '../../../redux/selectors'
import { scale } from '../../../styles'
import getImageUriFromEntity from '../../../utils/getImageUriFromEntity'
import { SvgCssUri } from 'react-native-svg'

const styles = StyleSheet.create({
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryImageContainer: {
    flex: 1,
    width: scale(0.5),
    height: scale(0.5),
    backgroundColor: 'white',
    padding: scale(0.049),
    borderRadius: scale(0.049),
    marginLeft: scale(0.049),
  },
})
export const SpeciesIcon = ({ species_id = 0 } = {}) => {
  const species = useSelector((state) =>
    datasetSelector(state, 'species', { id: species_id, single_format: true })
  )
  return (
    <View style={[styles.categoryImageContainer, { marginBottom: 3 }]}>
      <SvgCssUri
        uri={getImageUriFromEntity(species)}
        style={styles.categoryImage}
      />
    </View>
  )
}
