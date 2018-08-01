
import React, { Component } from 'react';
import { Text, View } from 'react-native';
 
 
class Greeting extends Component {
  render() {
    return (
        <Text>Hello {this.props.name}!</Text>
    );
  }
}
 
 
export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{flex:1,alignItems: 'center',justifyContent: "center"}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}