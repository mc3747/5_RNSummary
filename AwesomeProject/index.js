/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import MyApp from './src/index';
import BasicConcept from './src/pages/1_basic_concept/basicConcept';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyApp);
