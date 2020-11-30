import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {},
})

const ExampleScreen = ({}) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>{t('example_screen')}</Text>
    </View>
  )
}

export default ExampleScreen
