import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import { colors, scale } from '../styles'

const styles = StyleSheet.create({
  eye: {
    color: colors.primary(),
    paddingHorizontal: scale(0.1),
  },
})

const ToggleEye = ({ show = false }) => (
  <Icon type="Feather" name={show ? 'eye-off' : 'eye'} style={[styles.eye]} />
)

export default ToggleEye
