import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
/* 
1,单标签
2，button没有style属性
3，具有的属性
    title
    color
    disable
    onPress
    accessibilityLabel string #
*/
const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
  };

export default class button extends Component {
    render() {
        return (
            <View style = {styles.viewStyle1}>
                <View style = {{justifyContent:"center",
        alignItems:'center',height: 100,width:200,backgroundColor:'#f78ae0'}}>
                        <Text style = {{fontSize:14,color:'#52c35d',
                                        }}> 我是测试的text1
                        </Text>
                        <Button
                        onPress={onButtonPress}
                        title="Press Purple"
                        color="#841584"
                        accessibilityLabel="Learn more about purple"
                        />
                </View>
                
            </View>
     
        );
    }
}

const styles = StyleSheet.create({
    viewStyle1:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'yellow'
    }
})