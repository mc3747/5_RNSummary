import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import "./outside"

/* 3，外部样式：样式由外部文件引入 */
export default class outsideStyle extends React.Component {
  render() {
    return (
      <View style={outside.viewStyle}>
        <Text style={outside.textStyle}>2048测试吗？!</Text>
      </View>
    );
  }
}