import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
/* 
逆传：
1.在父组件中定义一个处理接收到值的方法
2.把这个方法传递给子组件，并且绑定this,子组件就能通过this.props拿到这个方法调用 */

// 子控件
class  SonCompoent extends Component{

    makeMoney (money) {
        // 传递给父控件
        this.props.receiveMoney(money);
    }
    render() {
        return (
            <View style={styles.sonViewStyle}>
                <Text style={{fontSize:20}}>{this.props.name}的baby</Text>
                <Text onPress={this.makeMoney.bind(this,100)}>赚100块钱</Text>
            </View>
        );
    };
}

// 父控件
class FatherComponet extends Component {

    constructor(props){
        super(props);
        this.state = {
            money:0
        };
    }

    receiveMoney(money) {
        var m = this.state.money;
        m += money;
        this.setState({
            money:m
        });
    }

    render() {
        return (
            <View style={{flex:1,alignItems:'center'}}>
                <SonCompoent  name={this.props.name+'A'} receiveMoney={this.receiveMoney.bind(this)}/>
                <SonCompoent  name={this.props.name+'B'} receiveMoney={this.receiveMoney.bind(this)}/>
                <Text style={{marginBottom:100}}>爸爸收到{this.state.money}</Text>
            </View>
        );
    }
}

// 主控件
export default class ReactDemo extends Component {
  render() {
    return (
        <FatherComponet name="xmg" />
    );
  }
}

const styles = StyleSheet.create({
    sonViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }

});

