import React from 'react'
import { TouchableOpacity, Image, Text, View, Alert } from 'react-native'
//import ImageAtomsBg from '../../assets/images/atoms_bg.png'
import ImageWaves from '../../assets/images/waves_bg.png'
import ImageAvatarDefault from '../../assets/images/avatar_default.png'
import ImageShoppingCart from '../../assets/images/shopping_cart.png'
import { useTranslation } from 'react-i18next'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { logoutSagaAction } from '../../sagas/actions'
import capitalizeWords from '../../utils/capitalizeWords'
import { useNavigation } from '@react-navigation/native'
import { datasetSelector } from '../../redux/selectors'

const MainContainer = ({ children }: any) => {
  let { t } = useTranslation()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const profile = useSelector((state) => datasetSelector(state, 'profile'))
  const onLogoutPress = React.useCallback(() => {
    if (!!profile?.name)
      Alert.alert(
        t('attention'),
        t('sure_want_to_logout'),
        [
          {
            text: capitalizeWords(t('cancel')),
            style: 'cancel',
          },
          {
            text: t('yes'),
            onPress: () => dispatch(logoutSagaAction()),
          },
        ],
        { cancelable: false }
      )
    else dispatch(logoutSagaAction())
  }, [profile])

  return (
    <View style={styles.container}>
      <Image source={ImageWaves} style={styles.bgWavesTop} resizeMode="cover" />
      <Image
        source={ImageWaves}
        style={styles.bgWavesBottom}
        resizeMode="cover"
      />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => {}} style={styles.avatarContainer}>
          <Image
            source={ImageAvatarDefault}
            resizeMode="contain"
            style={styles.avatar}
          />
        </TouchableOpacity>
        <View style={styles.userNameContainer}>
          <Text style={styles.user_name}>
            {!!profile?.name && `${t('hi')}, ${profile?.name}`}
          </Text>
          <TouchableOpacity style={styles.logoutBtn} onPress={onLogoutPress}>
            <Text style={styles.logoutTxt}>
              {t(!!profile?.name ? 'end_session' : 'exit')}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.shoppingCartContainer}
          onPress={() => navigation.navigate('MyBudget')}
        >
          <Image
            source={ImageShoppingCart}
            style={styles.shoppingCart}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  )
}
export default MainContainer
