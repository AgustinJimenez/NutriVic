import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native'
import MainContainer from '../../components/MainContainer'
import { useTranslation } from 'react-i18next'
import { colors, scale } from '../../styles'
import BudgetListItem from '../../components/BudgetListItem'
import Product1 from '../../assets/images/product_1.png'
import Product2 from '../../assets/images/product_2.png'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(0.4),
  },
  myBudgetLabel: {
    position: 'absolute',
    color: colors.primary(),
    fontSize: scale(0.515),
    fontWeight: '800',
    textAlign: 'center',
    top: scale(0.8),
    right: 0,
    left: 0,
  },
  bottomButtonsGroup: {
    position: 'absolute',
    bottom: scale(0.8),
    right: scale(0.4),
    left: scale(0.4),
    alignItems: 'center',
  },
  rowButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomLightButton: {
    flex: 1,
    backgroundColor: colors.light(),
    paddingVertical: scale(0.3),
    borderRadius: scale(0.099),
    //marginHorizontal: scale(0.2),
  },
  bottomLightButtonText: {
    color: colors.primary(),
    fontWeight: '700',
    fontSize: scale(0.32),
    textAlign: 'center',
  },
  requestBudgetButton: {
    width: '100%',
    backgroundColor: colors.primary(),
    paddingVertical: scale(0.3),
    marginTop: scale(0.3),
    borderRadius: scale(0.099),
  },
  requestBudgetButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: scale(0.32),
    textAlign: 'center',
  },
  budgetList: {
    top: scale(3),
  },
  budgetListItem: {},
})

const BottomButtonsGroup = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  return (
    <View style={styles.bottomButtonsGroup}>
      <View style={styles.rowButtons}>
        <TouchableOpacity
          style={[styles.bottomLightButton, { marginRight: scale(0.2) }]}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })
            )
          }}
        >
          <Text style={styles.bottomLightButtonText}>{t('all_products')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomLightButton} onPress={() => {}}>
          <Text style={styles.bottomLightButtonText}>{t('last_filter')}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.requestBudgetButton}
        onPress={() => navigation.navigate('BudgetConfirm')}
      >
        <Text style={styles.requestBudgetButtonText}>
          {t('request_budget')}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const MyBudgetLabel = () => {
  const { t } = useTranslation()
  return <Text style={styles.myBudgetLabel}>{t('my_budget')}</Text>
}

const BudgetList = () => {
  const products: any = [
    {
      name: 'Antibrucelica Rosenbusch',
      quantity: 2,
      image: Product1,
    },
    {
      name: 'Reprocultivac Rosenbusch',
      quantity: 1,
      image: Product2,
    },
  ]

  return (
    <FlatList
      contentContainerStyle={styles.budgetList}
      data={products}
      renderItem={({ item, index }: any) => (
        <BudgetListItem
          name={item.name}
          imageSource={item.image}
          style={styles.budgetListItem}
          key={index}
        />
      )}
    />
  )
}

const MyBudgetScreen = ({}) => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <MyBudgetLabel />
        <BudgetList />
        <BottomButtonsGroup />
      </View>
    </MainContainer>
  )
}

export default MyBudgetScreen
