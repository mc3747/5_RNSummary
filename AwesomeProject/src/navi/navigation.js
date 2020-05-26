import React from 'react';
import { Text,Image} from 'react-native'

import HomeScreen from "./App";     
import DetailsScreen from "./detailScreen";
import SettingScreen from "./settingScreen";

import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen, }
})
const SettingsStack = createStackNavigator({
    Settings: { screen: SettingScreen },
})

const TabNavigator = createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Settings: { screen: SettingsStack }
    },
    {
      navigationOptions: () => ({
        header: null
      }),
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarLabel: ({ tintColor}) => {
          const { routeName } = navigation.state
          switch (routeName) {
            case 'Home':
              return <Text style={{ color: tintColor, fontSize: 12 }}>{'首页'}</Text>
            case 'Settings':
              return <Text style={{ color: tintColor, fontSize: 12 }}>{'设置'}</Text>
          }
        },
        tabBarIcon: ({ focused, tintColor }) => {
            let urld 
            const { routeName } = navigation.state
            switch (routeName) {
                case 'Home':
                    return <Image source={require('./image/sale.png')} style={[{height: 20, width: 20}]}/>    
                case 'Settings':
                    return <Image  source={require('./image/shopping-cart.png')} style={[{height: 20, width: 20}]}/>    
            }
        }
      }),
      tabBarOptions: {
        inactiveTintColor: 'gray',
      }
    }
)

const AppStack = createStackNavigator({
    Tabs: TabNavigator,
    Details:DetailsScreen,
  }, {
    defaultNavigationOptions: () => ({
    })
  })


export default createAppContainer(AppStack)
