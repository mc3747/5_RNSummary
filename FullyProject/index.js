/**
 * @format
 */

import {AppRegistry} from 'react-native';

//这个是系统默认的入口
// import App from './App';

//这个是自定义的入口
import MyApp from './src/index';

import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => MyApp);
