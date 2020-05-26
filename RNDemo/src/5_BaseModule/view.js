import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
/* 
view有很多属性
style只是view的一个属性，搭配使用

1，flexBox相关：

flexDirection：，主轴方向，子元素的排布(row和column)
justify Content:子元素沿着主轴的排列方式(flex-start、center、flex-end、space-around以及space-between)
Align Items:子元素沿着次轴的排列方式（flex-start、center、flex-end以及stretch）

2，颜色相关
backgroundColor string
borderColor string
borderTopColor string
borderRightColor string
borderBottomColor string
borderLeftColor string

3，圆角相关
borderRadius number
borderTopLeftRadius number
borderTopRightRadius number
borderBottomLeftRadius number
borderBottomRightRadius number

4，透明相关
opacity number
overflow enum('visible', 'hidden')

5，阴影样式相关
iosshadowColor  color #
设置阴影色
iosshadowOffset  {width: number, height: number} #
设置阴影偏移
iosshadowOpacity  number #
设置阴影不透明度 (乘以颜色的alpha分量)
iosshadowRadius  number #
设置阴影模糊半径

6，margin相关
margin number #
 marginTop, marginLeft, marginBottom, and marginRight.

marginBottom number #
类似 margin-bottom in CSS.

marginHorizontal number #
Setting marginHorizontal has the same effect as setting both marginLeft and marginRight.

marginLeft number #
类似 margin-left in CSS.

marginRight number #
类似 margin-right in CSS.

marginTop number #
类似margin-top in CSS.

marginVertical number #
Setting marginVertical has the same effect as setting both marginTop and marginBottom.

7，border相关
borderBottomWidth number #
borderBottomWidth和CSS上的border-bottom-width表现一致。

borderLeftWidth number #
borderLeftWidth和CSS上的border-left-width表现一致。

borderRightWidth number #
borderRightWidth 和CSS上的border-right-width表现一致。

borderTopWidth number #
borderTopWidth和CSS上的border-top-width表现一致。

borderWidth number
borderWidth和CSS上的border-width表现一致

8，padding相关
padding number #
 paddingTop, paddingBottom, paddingLeft, and paddingRight.

paddingBottom number #
类似 padding-bottom in CSS.

paddingHorizontal number #
类似  paddingLeft and paddingRight.

paddingLeft number #
类似  padding-left in CSS.

paddingRight number #
类似  padding-right in CSS.

paddingTop number #
类似  padding-top in CSS.

paddingVertical number #
类似  paddingTop and paddingBottom.

9，位置相关
当position键的值为absolute时，描述位置可以使用top、bottom、left、right四个键，
表示当前组件的位置距离父组件上（下、左、右）沿有多少pt。 
当postion键的值为relative时，不可以使用bottom和right键继续描述位置。top和left键的值默认为0.
top和left键表示当前组件距离上一个同级组件最上（左）沿有多少pt。
position：position enum('absolute', 'relative')：绝对和相对

left
right
top 
bottom

10，值相关
width
height
*/
export default class view extends Component {
    render() {
        return (
        <View style={{flexDirection: 'row', height: 100,marginTop:100}} >
            <View style={{backgroundColor: 'blue', flex: 0.3}} />
            <View style={{backgroundColor: 'red', flex: 0.5}} />

        </View>

        );
    }
}

const styles = StyleSheet.create({
    viewStyle1:{

    }
})