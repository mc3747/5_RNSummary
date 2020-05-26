import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

/* 2，对象样式，写在文件内部 */
export default class TargetStyle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>2048测试吗？!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
// view的相关样式属性
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  
// text的相关样式属性
  highScoresTitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#333333",
  },
});