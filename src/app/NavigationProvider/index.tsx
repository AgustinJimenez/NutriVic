import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//SCREENS start
import AuthLoadingScreen from '../../screens/AuthLoadingScreen'
import LoginScreen from '../../screens/LoginScreen'
import WelcomeScreen from '../../screens/WelcomeScreen'

import HomeScreen from '../../screens/HomeScreen'
/*
import LoginScreen from '../../screens/LoginScreen'
*/
//SCREENS end
import { useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'

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
      {/* <Stack.Screen name="Summary" component={SummaryScreen} /> */}
    </Stack.Navigator>
  )
}

export default NavigationProvider
