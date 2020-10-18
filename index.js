/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from "react-native-flash-message";




AppRegistry.registerComponent(appName, () => App);
