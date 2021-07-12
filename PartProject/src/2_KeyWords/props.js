
import React, { Component } from 'react';
import { Text, View } from 'react-native';
 
 /* 
 props属性 
 1，父组件中指定，指定后不能改变
 2，有点类似函数传参
 3，props 是让外部对组件自己进行配置
 */
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
        {/* <Greeting name={true} /> */}
      </View>
    );
  }
}