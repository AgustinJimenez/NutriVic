import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native'
import MainContainer from '../../components/MainContainer'
import { useTranslation } from 'react-i18next'
import { scale } from '../../styles'
import BudgetProductListItem from '../../components/BudgetListItem'
import {
  useNavigation,
  CommonActions,
  StackActions,
  useNavigationState,
} from '@react-navigation/native'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { requestBudgetSagaAction } from '../../sagas/actions'
import { setDatasetToReducer } from '../../redux/actions'
import capitalizeWords from '../../utils/capitalizeWords'

const BottomButtonsGroup = () => {
  const dispatch = useDispatch()
  const navigatorState = useNavigationState((state) => state)
  const lastFilterAvailable =
    navigatorState['routes']?.[navigatorState.index - 2]?.['name'] ===
    'Products'
  const { t } = useTranslation()
  const navigation = useNavigation()
  const sending_budget_request = useSelector((state) =>
    datasetSelector(state, 'sending_budget_request')
  )
  const auth_token = useSelector((state) =>
    datasetSelector(state, 'auth_token')
  )
  const request_budget_products = useSelector((state) =>
    datasetSelector(state, 'request_budget_products')
  )

  const lasFilterButtonPressed = React.useCallback(() => {
    if (lastFilterAvailable) navigation.dispatch(StackActions.pop(2))
  }, [])
  const submitBudgetRequest = React.useCallback(() => {
    if (!auth_token)
      Alert.alert(
        t('attention'),
        t('must_login_to_request_budget'),
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: true }
      )
    else
      Alert.alert(
        t('attention'),
        t('sure_want_to_request_budget'),
        [
          {
            text: capitalizeWords(t('cancel')),
            style: 'cancel',
          },
          {
            text: t('yes'),
            onPress: () => dispatch(requestBudgetSagaAction()),
          },
        ],
        { cancelable: false }
      )
  }, [auth_token])

  React.useEffect(() => {
    dispatch(setDatasetToReducer(false, 'sending_budget_request'))
  }, [])

  const allProductsWasPressed = React.useCallback(
    () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      ),
    []
  )

  return (
    <View style={styles.bottomButtonsGroup}>
      <View style={styles.rowButtons}>
        <TouchableOpacity
          style={[styles.bottomLightButton, { marginRight: scale(0.2) }]}
          onPress={allProductsWasPressed}
        >
          <Text style={styles.bottomLightButtonText}>{t('all_products')}</Text>
        </TouchableOpacity>
        {!!lastFilterAvailable && (
          <TouchableOpacity
            style={styles.bottomLightButton}
            onPress={lasFilterButtonPressed}
          >
            <Text style={styles.bottomLightButtonText}>{t('last_filter')}</Text>
          </TouchableOpacity>
        )}
      </View>

      {request_budget_products.count() > 0 && (
        <TouchableOpacity
          disabled={sending_budget_request}
          style={styles.requestBudgetButton}
          onPress={submitBudgetRequest}
        >
          {!!sending_budget_request ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.requestBudgetButtonText}>
              {t('request_budget')}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  )
}

const MyBudgetLabel = () => {
  const { t } = useTranslation()
  return <Text style={styles.myBudgetLabel}>{t('my_budget')}</Text>
}

const BudgetList = () => {
  const request_budget_products = useSelector((state) =>
    datasetSelector(state, 'request_budget_products')
  )
  const { t } = useTranslation()

  return (
    <View style={styles.budgetList}>
      {!request_budget_products.count() && (
        <Text style={[styles.bottomLightButtonText, styles.noDataTxt]}>
          {t('no_data')}
        </Text>
      )}
      {request_budget_products.map((item: any, index: number) => {
        let { product_id, quantity } = item

        return (
          <BudgetProductListItem
            product_id={product_id}
            quantity={quantity}
            style={styles.budgetListItem}
            key={index}
          />
        )
      })}
    </View>
  )
}

const MyBudgetScreen = ({}) => {
  return (
    <MainContainer>
      <KeyboardAwareScrollView style={styles.container}>
        <MyBudgetLabel />
        <BudgetList />
      </KeyboardAwareScrollView>
      <BottomButtonsGroup />
    </MainContainer>
  )
}

export default MyBudgetScreen
