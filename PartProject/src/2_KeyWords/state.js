
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
 
 /* 
 state:
 1,在constructor中初始化state，然后在需要修改时调用setState方法
 2，state是一个局部的、只能被自身控制的数据源
  */
export default class HomeView extends Component {
//  初始化state
  constructor(props) {
    super(props);
    this.state = {isPoweron: false };
    this.onPowerClick = this.functionClick.bind(this);
  }
//  点击事件后setState方法来更新state
  functionClick() {
    this.setState({
      isPoweron: !this.state.isPoweron
    });
  }
 
 
  render() {
    return (
      <View style={this.state.isPoweron ? styles.Poweron : styles.Poweroff}>
        <TouchableOpacity
          style={styles.btnstyle}
// 触发点击事件
          onPress={this.onPowerClick}
        />
      </View>
    );
  }
 
 
}
 
 
const styles = StyleSheet.create({
  Poweron: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Poweroff: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnstyle: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
  },
});