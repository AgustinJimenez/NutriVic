import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import MainContainer from '../../components/MainContainer'
import { useTranslation } from 'react-i18next'
import { colors, scale, deviceHeight } from '../../styles'
import ImagePersonOk from '../../assets/images/person_ok.png'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
  container: {},
  title: {
    marginTop: scale(0.3),
    marginBottom: scale(1.2),
    fontWeight: '700',
    fontSize: scale(0.92),
    color: colors.primary(),
    textAlign: 'center',
    paddingHorizontal: scale(2),
  },
  adviser_text: {
    fontWeight: '700',
    fontSize: scale(0.46),
    color: colors.primary(),
    textAlign: 'left',
    marginLeft: scale(0.8),
    marginBottom: scale(0.3),
  },
  button: {
    backgroundColor: colors.primary(0.08),
    marginVertical: scale(0.2),
    paddingLeft: scale(0.2),
    paddingVertical: scale(0.1),
    borderRadius: 3,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: scale(0.365),
    color: colors.primary(),
    textAlign: 'left',
  },
  buttonPersonContainer: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    paddingLeft: scale(0.8),
  },
  showOtherProductsButtonContainer: {
    position: 'absolute',
    bottom: scale(0.8),
    backgroundColor: colors.primary(),
    paddingVertical: scale(0.4),
    alignSelf: 'center',
    borderRadius: scale(0.1),
    width: '90%',
  },
  showOtherProductsButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: scale(0.315),
    textAlign: 'center',
  },
  personOk: {
    flex: 1,
    height: deviceHeight * 0.5,
    top: scale(1),
  },
  scrollContainer: { paddingBottom: scale(3) },
})

const BudgetConfirmScreen = ({}) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  return (
    <MainContainer>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{t('tanks_for_your_order')}</Text>
        <Text style={styles.adviser_text}>
          {t('a_adviser_will_contact_you_shortly_for_confirmation') + ':'}
        </Text>
        <View style={styles.buttonPersonContainer}>
          <View style={styles.buttonsContainer}>
            {[
              {
                label: t('payment_method'),
                onPress: () => {},
                style: { width: scale(3.5) },
              },
              {
                label: t('shipping_logistic'),
                onPress: () => {},
                style: { width: scale(4) },
              },
              {
                label: t('invoice_data'),
                onPress: () => {},
                style: { width: scale(3.7) },
              },
            ].map(({ label, onPress, style }, key) => (
              <TouchableOpacity
                onPress={onPress}
                key={key}
                style={[styles.button, style]}
              >
                <Text style={styles.buttonText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Image
            style={styles.personOk}
            source={ImagePersonOk}
            resizeMode="contain"
          />
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity
        style={styles.showOtherProductsButtonContainer}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          )
        }}
      >
        <Text style={styles.showOtherProductsButtonText}>
          {t('show_other_products')}
        </Text>
      </TouchableOpacity>
    </MainContainer>
  )
}

export default BudgetConfirmScreen
