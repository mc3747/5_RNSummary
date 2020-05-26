import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
 
} from 'react-native';
/* 
1,外边距：设置组件与组件之间的间距
    注意：第一个组件比较特殊，参照父组件，与父控件之间的间距。其他组件间距，相对于上一个组件
        marginRight和width冲突，如果设置了width，marginRight无效
margin number 外边距
marginBottom number 下外边距
marginHorizontal number 左右外边距
marginLeft number 左外边距
marginRight number 右外边距
marginTop number 上外边距
marginVertical number 上下外边距

2，视图边框：想设置自己周边有边框的时候
borderBottomWidth number 底部边框宽度
borderLeftWidth number 左边框宽度
borderRightWidth number 右边框宽度
borderTopWidth number 顶部边框宽度
borderWidth number 边框宽度
border<Bottom|Left|Right|Top>Color 各方向边框的颜色,<>表示连着一起，例如borderBottomColor
borderColor 边框颜色

3，尺寸
width number
height number

4，内边距：设置子控件与当前控件的位置
想设置自己的子控件相对自己的位置的时候使用
padding number 内边距
paddingBottom number 下内边距
paddingHorizontal number 左右内边距
paddingLeft number 做内边距
paddingRight number 右内边距
paddingTop number 上内边距
paddingVertical number 上下内边距

5,绝对定位和相对定位
absolute：绝对定位，参照父控件位置定位
relative：相对定位，参照当前控件原始位置定位
left   number  左边缘。
right  number  右边缘。
top    number  顶部边缘。
bottom number  底部边缘。
*/
export default class css extends Component {
    render() {
      return (
        <View style={styles.rootView}>
            <View style={styles.innerView}>
                <View style={styles.paddingView1}></View>
                <View style={styles.paddingView2}></View>
                <View style={styles.absoluteView}></View>
                <View style={styles.relativeView}></View>
            </View>
        </View>
      );
    }
  }
  
// 样式
  const styles = StyleSheet.create({
    rootView:{
        backgroundColor:'darkorange',
        flex:1
    },
    innerView:{
        backgroundColor:'green',
        // 设置底部边框,一定要设置宽度才行
        borderBottomColor:'yellow',
        borderBottomWidth:2,
        // 设置外间距
        marginTop:50,
        marginLeft:100,
        // 设置内间距
        paddingTop:30,
        paddingLeft:50,
        // 设置宽度
        width:200,
        height:300
    },
    
    paddingView1:{
        backgroundColor:'blue',
        width:50,
        height:50
    },
    paddingView2:{
        backgroundColor:'red',
        width:50,
        height:50
    },
    // 绝对定位
    absoluteView:{
        backgroundColor:'brown',
        position:'absolute',
        width:50,
        height:50,
        right:0,
        bottom:0
    },
    // 相对定位
    relativeView:{
        backgroundColor:'purple',
        position:'relative',
        width:50,
        height:50,
        top:20,
        left:30
    }
});
