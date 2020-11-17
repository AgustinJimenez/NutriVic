import { AppRegistry } from 'react-native'
import Aplication from './src/app'
import { name as appName } from './app.json'
import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'

enableScreens()
AppRegistry.registerComponent(appName, () => Aplication)
