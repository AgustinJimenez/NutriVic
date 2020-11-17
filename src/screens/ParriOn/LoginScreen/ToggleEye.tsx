import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import { scale, colors } from '../../../theme/variables/commonStyles'
import ImageEyeHide from '../../../assets/images/eye_hide.png'

const styles = StyleSheet.create({
  eyeHide: {
    width: scale(0.7),
    height: scale(0.7),
    marginHorizontal: scale(0.4),
  },
  eyeShow: {
    fontSize: scale(0.8),
    marginHorizontal: scale(0.15),
    alignSelf: 'center',
    color: colors.brandSecondary,
  },
})

const ToggleEye = ({ show = false }) => {
  if (show)
    return (
      <Image
        source={ImageEyeHide}
        style={styles.eyeHide}
        resizeMode="contain"
      />
    )

  return <Icon type="AntDesign" name="eyeo" style={styles.eyeShow} />
}

export default ToggleEye
