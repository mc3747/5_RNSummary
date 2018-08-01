
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
 
 
export default class HomeView extends Component {
 
  constructor(props) {
    super(props);
    this.state = { isPoweron: false };
 
    this.onPowerClick = this._onPowerClick.bind(this);
  }
 
  _onPowerClick() {
    this.setState({
      isPoweron: !this.state.isPoweron
    });
  }
 
 
  render() {
    return (
      <View style={this.state.isPoweron ? styles.Poweron : styles.Poweroff}>
        <TouchableOpacity
          style={styles.btnstyle}
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