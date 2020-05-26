import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
    DeviceEventEmitter
} from 'react-native';

/* 当两个组件，互相之间拿不到谁的时候，可以用通知传值 */

// 弟弟组件
class  DiDiCompoent extends Component{

    constructor(props){
        super(props);

        this.state = {
            money:0
        }
    }
    componentDidMount() {
        this.age = 10;
        this.age = 20;
        // 接收通知：定义属性,但是对这个属性的修改不会触发render
        this.lister = DeviceEventEmitter.addListener('makeMoney',(money)=>{
            this.setState({
                money:money
            });
        })
    }

    componentWillUnmount() {
        this.lister.remove();
    }
    render() {
        return (
            <View style={styles.didiStyle}>
                <Text> 弟弟</Text>
                <Text>收到{this.state.money}零花钱</Text>
            </View>
        );
    };
}

// 哥哥组件
class GeGeComponet extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>哥哥</Text>
                <Text onPress={()=>{
                    // 发出通知
                    DeviceEventEmitter.emit('makeMoney',100);
                }}>发生活费</Text>
            </View>
        );
    }
}

// 主组件
export default class ReactDemo extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <GeGeComponet />
                <DiDiCompoent />
            </View>

        );
    }
}

// 样式
const styles = StyleSheet.create({
        didiStyle:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }

});
