import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
TouchableHighlight,
  Alert
} from 'react-native';
// import moduleName from '../0_Resources/Image/'
import CommonHighButtonButton from '../8_SelfDefineModule/commonHighlightButton'
/* 
1,具有view的所有style属性，并扩展underlayColor string #
有触摸操作时显示出来的底层的颜色。
2，监听函数
    onLongPress function #
    onPress function #
    onPressIn function #
    onPressOut function #
    onHideUnderlay function #当底层的颜色被隐藏的时候调用。
    onShowUnderlay function #当底层的颜色被显示的时候调用。
3，其他属性
    activeOpacity number #
*/
const onPress = () => {
    Alert.alert('onPress!');
  };
const onLongPress = () =>{
    Alert.alert('onLongPress!');
}
const onPressIn = () => {
    Alert.alert('onPressIn!');
  };
const onPressOut = () => {
    Alert.alert('onPressOut!');
  };
const onHideUnderlay = () => {
    Alert.alert('onHideUnderlay!');
  };
const onShowUnderlay = () => {
    Alert.alert('onShowUnderlay!');
  };

export default class touchableHighlight extends Component {
    render() {
/* 
注意：按钮高亮变换本地图片，需要外边传require进去
*/
        const image1 =  require('../0_Resources/Image/delete-1.png');
        const image2 =  require('../0_Resources/Image/delete-2.png');
        return (
            <View style = {styles.viewStyle1}>
                <View style = {{justifyContent:"center",
                                 alignItems:'center',height: 100,width:200,backgroundColor:'#f78ae0'}}>
                       <TouchableHighlight onPress={onPress} 
                                           onLongPress={onLongPress} 
                                           onPressIn={onPressIn} 
                                           onPressOut={onPressOut}
                                           onShowUnderlay={onShowUnderlay}
                                           onHideUnderlay={onHideUnderlay}>
                           <Text>点我啊</Text>
                       </TouchableHighlight>

                       <CommonHighButtonButton 
                            imageLocal={image1}
                            highImageLocal={image2}
                            title='按钮'
                            //   imageUri='http://image.zhangxinxu.com/image/study/s/s256/mm3.jpg'
                              imageStyle={{width:50,height:50}}
                            //   highImageUri='http://image.zhangxinxu.com/image/study/s/s256/mm4.jpg'
                              titleStyle={{color:'blue',backgroundColor:'yellow'}}
                              highTitleStyle={{color:'red',backgroundColor:'#f78ae0'}}
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