import React, {Component} from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";


export default class Navigator1 extends Component {
  
  render() {
    return <Navigator/>
  }
}

const Tab = TabNavigator(
  {
    First: {screen: FirstScreen},
    Second: {screen: SecondScreen}
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const Navigator = StackNavigator(
  {
    Tab: {screen: Tab},
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      showIcon: true
    }
  }
);