/**
 * @format
 */

import {AppRegistry,YellowBox} from 'react-native';
import MyApp from './src/index';
import BasicConcept from './src/pages/1_basic_concept/basicConcept';
import {name as appName} from './app.json';

// 忽略的报警提示：以什么开头
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated',
'Module RCTImageLoader',
'Method `jumpToIndex` is deprecated',
'Module RNVCManager',
'data',
'Animated',
'通知信息'],
);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

// import App from './App';
AppRegistry.registerComponent(appName, () => MyApp);
