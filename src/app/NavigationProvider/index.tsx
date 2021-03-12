import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//SCREENS start
import LoginScreen from '../../screens/LoginScreen'
import WelcomeScreen from '../../screens/WelcomeScreen'
import HomeScreen from '../../screens/HomeScreen'
import ProductsScreen from '../../screens/ProductsScreen'
import ProductDetailsScreen from '../../screens/ProductDetailsScreen'
import BudgetConfirmScreen from '../../screens/BudgetConfirmScreen'
import RegisterScreen from '../../screens/RegisterScreen'
//SCREENS end
import MyBudgetScreen from '../../screens/MyBudgetScreen'

const Stack = createStackNavigator()
const NavigationProvider = (props: any) => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="MyBudget" component={MyBudgetScreen} />
      <Stack.Screen name="BudgetConfirm" component={BudgetConfirmScreen} />
    </Stack.Navigator>
  )
}

export default NavigationProvider
