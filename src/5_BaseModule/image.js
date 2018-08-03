import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
/* 
1,单标签
2，source属性：http地址:uri：，或者相对地址:require
      <Image
        style={styles.icon}
        source={require('./icon.png')}
      />
      <Image
        style={styles.logo}
        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
      />
3，style属性
*/
export default class button extends Component {
    render() {
        return (
            <View style = {styles.viewStyle1}>
                    <Image
                        style={styles.icon}
                        source={require('../0_Resources/Image/delete-1.png')}
                    />
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
    },
    icon:{
        backgroundColor:'red',
        width:50,
        height:50
    }
})