import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native'
import global_styles, { scale } from '../../styles'
import { colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(0.3),
    marginHorizontal: scale(1),
    marginVertical: scale(0.2),
    width: '100%',
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
    color: colors.light(),
    fontWeight: 'bold',
    fontSize: 15,
  },
})

const FlatButton = ({
  title = '',
  children = null,
  primary = true,
  light = false,
  style = {},
  onPress = () => {},
  disabled = false,
  loading = false,
  textStyle = {},
}) => {
  if (!children) {
    children = (
      <>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text
            style={[
              styles.text,
              primary ? global_styles.textLight : {},
              light ? global_styles.textPrimary : {},
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}
      </>
    )
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        primary ? global_styles.bgPrimary : {},
        light ? global_styles.bgLight : {},
        disabled ? global_styles.bgGray : {},
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  )
}
export default FlatButton
