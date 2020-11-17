import React from 'react'
import { StyleProvider } from 'native-base'
import { StatusBar, Linking, Platform } from 'react-native'
import getTheme from '../theme/components'
import variables from '../theme/variables/commonColor'
import NavigationProvider from './NavigationProvider'
import { navigationRef, isReadyRef } from './NavigationProvider/service'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider as ReduxProvider } from 'react-redux'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Root } from 'native-base'
import LoadingScreen from '../screens/ParriOn/AuthLoadingScreen'
//import NavigationMiddleware from './NavigationScreenMiddleware'
import './i18n'
import NetStatusChecker from './NetStatusChecker'
import { NavigationContainer } from '@react-navigation/native'
//import { disableYellowBox, ignoreWarnings } from '../../env.json'
import GlobalFont from 'react-native-global-font'
let theme = getTheme(variables)
console.disableYellowBox = true

const App = () => {
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true)
  const [initialState, setInitialState] = React.useState()
  React.useEffect(() => {
    GlobalFont.applyGlobal('CircularStd-Book')
  }, [])
  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL()

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem('navigation')
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } finally {
        setIsReady(true)
      }
    }

    if (!isReady) {
      restoreState()
    }
  }, [isReady])

  if (!isReady) return <LoadingScreen />

  return (
    <ReduxProvider store={store}>
      <NavigationContainer
        ref={navigationRef}
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem('navigation', JSON.stringify(state))
        }
      >
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <StyleProvider style={theme}>
            <Root>
              <StatusBar barStyle="light-content" />
              <NavigationProvider />
              <NetStatusChecker />
            </Root>
          </StyleProvider>
        </PersistGate>
      </NavigationContainer>
    </ReduxProvider>
  )
}

export default App
