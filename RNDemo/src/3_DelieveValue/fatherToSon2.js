import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

/* 
手动触发传值
使用箭头函数解决绑定this问题 
*/

// 子组件
class  SonCompoent extends Component{
    // 初始化
    constructor(props){
        super(props);
        this.state = {
            money:0
        }
    }
    // 触发函数
    receiveMoney(money){
        this.setState({
            money:money
        });
    }
    // 主返回
    render() {
        return (
            <View style={styles.sonViewStyle}>
                <Text style={{fontSize:20}}>{this.props.name}的baby</Text>
                <Text>总共收到{this.state.money}生活费</Text>
            </View>
        );
    };
}

// 父组件
class FatherComponet extends Component {

    render() {
        return (
            <View style={{flex:1,alignItems:'center'}}>
                <Text style={{marginTop:100}} onPress={()=>{
                    this.refs.son.receiveMoney(1000);
                }}>发生活费</Text>
                <SonCompoent ref="son" name={this.props.name} />
            </View>
        );
    }
}

// 主组件
export default class ReactDemo extends Component {
  render() {
    return (
        <FatherComponet name="xmg" />
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

