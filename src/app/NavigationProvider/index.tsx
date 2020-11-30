import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//SCREENS start
import LoginScreen from '../../screens/LoginScreen'
import WelcomeScreen from '../../screens/WelcomeScreen'

import HomeScreen from '../../screens/HomeScreen'
import ProductsScreen from '../../screens/ProductsScreen'
import ProductDetailsScreen from '../../screens/ProductDetailsScreen'
import BudgetConfirmScreen from '../../screens/BudgetConfirmScreen'
//SCREENS end

import { useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import MyBudgetScreen from '../../screens/MyBudgetScreen'

//const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const NavigationProvider = (props: any) => {
  let auth_token = useSelector((state) => datasetSelector(state, 'auth_token'))
  if (!auth_token)
    return (
      <Stack.Navigator initialRouteName="AuthLoading" headerMode="none">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    )

  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="MyBudget" component={MyBudgetScreen} />
      <Stack.Screen name="BudgetConfirm" component={BudgetConfirmScreen} />
    </Stack.Navigator>
  )
}

export default NavigationProvider
