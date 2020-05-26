import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BaseComponent from './BaseComponent';

export default class FirstScreen extends BaseComponent {
  
  static navigationOptions = {
    headerTitle: 'First'
  };
  

  render() {
    return (
      <View>
        <Text>这是第一个页面</Text>
      </View>
    )
  }
}