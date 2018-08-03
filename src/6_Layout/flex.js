
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
 
} from 'react-native';
/* 
flex布局：
1，flexDirection共有四个值，在RN中默认为column。
    row（默认值）：主轴为水平方向，从左向右。依次排列
    row-reverse：主轴为水平方向，从右向左依次排列
    column：主轴为垂直方向，默认的排列方式，从上向下排列
    column-reverse：主轴为垂直方向，从下向上排列

2，flexWrap属性：决定子控件在父视图内是否允许多行排列。
    flexWrap共有两个值，默认为nowrap。
    nowrap 组件只排列在一行上，可能导致溢出。
    wrap   组件在一行排列不下时，就进行多行排列

3，justifyContent属性:决定子组件在主轴中具体布局，是靠左，还是居中等
    justifyContent共有五个值，默认为flex-start
    flex-start: 子组件向主轴起点对齐，如果主轴水平，从左开始，主轴垂直，从上开始。
    flex-end 子组件向主轴终点对齐，如果主轴水平，从右开始，主轴垂直，从下开始。
    center 居中显示，注意：并不是让某一个子组件居中，而是整体有居中效果
    space-between 均匀分配,相邻元素间距离相同。每行第一个组件与行首对齐，每行最后一个组件与行尾对齐。
    space-around 均匀分配,相邻元素间距离相同。每行第一个组件到行首的距离和每行最后一个组件到行尾的距离将会是相邻元素之间距离的一半

4，alignItems:决定子组件在测轴中具体布局，决定子组件在上，还是下，或者居中
    alignItems共有四个值，默认为stretch。
    flex-start 子组件向侧轴起点对齐。
    flex-end 子组件向侧轴终点对齐。
    center 子组件在侧轴居中。
    stretch 子组件在侧轴方向被拉伸到与容器相同的高度或宽度。

5，alignSelf：自定义自己的侧轴布局，用于一个子组件设置。
注意：当某个子组件不想参照默认的alignItems时，可以设置alignSelf，自定义自己的侧轴布局。
    alignSelf共有五个值，默认为auto。
    auto 继承它的父容器的alignItems属性。如果没有父容器则为 "stretch"
    flex-start 子组件向侧轴起点对齐。
    flex-end 子组件向侧轴终点对齐。
    center 子组件在侧轴居中。
    stretch 子组件在侧轴方向被拉伸到与容器相同的高度或宽度。

6，flex：决定子控件在主轴中占据几等分。
flex: 任意数字，所有子控件flex相加，自己flex占总共多少，就有多少宽度.


*/
export default class ReactDemo extends Component {
    render() {
      return (
        <View style={styles.rootView}>
            <View style={styles.superView1}>
                <Text style={[styles.baseTextStyle]}>1</Text>
                <Text style={[styles.baseTextStyle]}>2</Text>
                <Text style={[styles.baseTextStyle,{alignSelf:'flex-start'}]}>3</Text>
                <Text style={[styles.baseTextStyle]}>4</Text>
            </View>

            <View style={styles.superView2}>
                <Text style={[styles.baseTextStyle]}>1</Text>
                <Text style={[styles.baseTextStyle]}>2</Text>
                <Text style={[styles.baseTextStyle]}>3</Text>
                <Text style={[styles.baseTextStyle]}>4</Text>
            </View>

                {/* 父视图决定高度，子视图根据父视图的高度，来调整自生，text标签外要再套一个view标签 */}
             <View style={styles.superView3}>
                <View style={styles.text1Style}>
                    <Text style={[styles.textStyle]}>1</Text>
                </View>

                <View style={styles.text2Style}>
                    <Text style={[styles.textStyle]}>2</Text>
                </View>

                <View style={styles.text3Style}>
                    <Text style={[styles.textStyle]}>3</Text>
                </View>

                 <View style={styles.text4Style}>
                    <Text style={[styles.textStyle]}>4</Text>
                </View>

            </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
      rootView:{
          backgroundColor:'darkorange',
          flex:1,
          flexDirection:'column'
      },
      superView1:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow',
        marginTop:100,
        marginLeft:0,
        marginRight:0,
        height:100
      },
      superView2:{
        flexDirection:'row',
        backgroundColor:'yellow',
        marginTop:20,
        marginLeft:0,
        marginRight:0,
        height:100
      },

      superView3:{
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'center',
        backgroundColor:'yellow',
        marginTop:20,
        marginLeft:0,
        marginRight:0,
        height:200
      },
    text1Style:{
        justifyContent:'center',
        flex:1,
        backgroundColor:'red',
    },
    text2Style:{
        justifyContent:'center',
        flex:1,
        backgroundColor:'deepskyblue',
    },
    text3Style:{
        justifyContent:'center',
        flex:3,
        backgroundColor:'green'
    },
    text4Style:{
        justifyContent:'center',
        flex:1,
        backgroundColor:'blue',
    },
   textStyle:{
        fontSize:20,
        textAlign:'center',
    },

    baseTextStyle:{
          backgroundColor:'deepskyblue',
          width:50,
          height:50,
          fontSize:15,
          textAlign:'center',
          marginTop:0,
          marginLeft:20,
      }
  });
  
