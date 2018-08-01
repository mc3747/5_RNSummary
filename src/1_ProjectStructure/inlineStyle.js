import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

/**
 * 1,内联样式：样式写在标签内部
 */
export default class TargetStyle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF"}}>
        <Text style={{textAlign: "center",
                    color: "#333333",
                    marginBottom: 5
            }}>2048 High Scores!
        </Text>
      </View>
    );
  }
}
