import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import SideBar from '../../components/SideBar'

//SCREENS start
import AuthLoadingScreen from '../../screens/ParriOn/AuthLoadingScreen'
import ProductsScreen from '../../screens/ParriOn/ProductsScreen'
import LoginScreen from '../../screens/ParriOn/LoginScreen'
import SuccessScreen from '../../screens/ParriOn/SummaryScreen'
/* 
import HomeScreen from '../../screens/HomeScreen'
import LoginScreen from '../../screens/LoginScreen'
*/
//SCREENS end
import { useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import SummaryScreen from '../../screens/ParriOn/SummaryScreen'

//const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const NavigationProvider = (props: any) => {
  let auth_token = useSelector((state) => datasetSelector(state, 'auth_token'))
  if (!auth_token)
    return (
      <Stack.Navigator initialRouteName="AuthLoading" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    )

  return (
    <Stack.Navigator
      headerMode="none"
      /* openByDefault={false} */ initialRouteName="Home" /* drawerContent={(props: any) => <SideBar {...props} />} */
    >
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
      {/* <Stack.Screen name='Settings' component={SettingsScreen} /> */}
    </Stack.Navigator>
  )
}

export default NavigationProvider
