
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
/* 
1,text具有view的style属性
2，自己的style
color color
fontFamily string
fontSize number
fontStyle enum('normal', 'italic')
fontWeight enum('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
指定字体的粗细。大多数字体都支持'normal'和'bold'值。并非所有字体都支持所有的数字值。如果某个值不支持，则会自动选择最接近的值。
lineHeight number
textAlign enum('auto', 'left', 'right', 'center', 'justify')
指定文本的对齐方式。其中'justify'值仅iOS支持，在Android上会变为left
textDecorationLine enum('none', 'underline', 'line-through', 'underline line-through')
textShadowColor color
textShadowOffset {width: number, height: number}
textShadowRadius number
*/

/* 
注意：text文字居中，要在外边套一个view
*/
export default class text extends Component {
    render() {
        return (
            <View style = {styles.viewStyle1}>
                <View style = {{justifyContent:"center",
        alignItems:'center',height: 100,width:200,backgroundColor:'#f78ae0'}}>
                <Text style = {{fontSize:14,color:'#52c35d',
                                }}> 我是测试的text1</Text>
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