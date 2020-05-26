import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

/* 通过props直接传值
1,props:可以传多个值，不用定义，any类型
2，props的属性，在子组件，父组件，主组件中要一致
3，传多个值时候，传数组【】，用{}
*/

// 子组件
class  SonCompoent extends Component{
    render() {
        return (
            <View style={styles.sonViewStyle}>
                {/* <Text style={{fontSize:20}}>{this.props.name}的baby</Text> */}
                <Text style={{fontSize:20}}>{[this.props.doc,this.props.name]}的儿子</Text>
            </View>
        );
    };
}

// 父组件
class FatherComponet extends Component {
    
    render() {
        return (
            <View style={{flex:1,alignItems:'center'}}>
                {/* <SonCompoent  name={this.props.name}/> */}
                <SonCompoent  doc={[this.props.doc,this.props.name]}/>
            </View>
        );
    }
}

// 主组件
export default class ReactDemo extends Component {
    render() {
        return (
            // <FatherComponet name="xmg" />,/
            <FatherComponet doc={["xmg" ,"bobo"]}/>
        );
    }
}
// 样式
const styles = StyleSheet.create({
    sonViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }

});
