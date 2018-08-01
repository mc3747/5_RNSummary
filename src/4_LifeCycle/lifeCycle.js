import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

class LifeCompoent extends Component {
// 初始化：
    constructor(props){
        super(props);

        this.state = {
            age:0
        }

        console.log('constructor');
    }
// 即将挂载：render之前，只执行一次
    componentWillMount() {
        console.log('componentWillMount');
    }
// 挂载完成：render之后，只执行一次
    componentDidMount() {
        console.log('componentDidMount');
    }

// 即将接收更新
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');

    }
    
    

// 是否要更新:返回为false，后面三个不用执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');

        return true;
    }

// 即将更新
    componentWillUpdate() {
        console.log('componentWillUpdate');
        this.setState({
            age:1
        });
    }

// 更新完成：返回实际dom
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

// 组件即将销毁
    componentWillUnmount() {
        console.log('componentWillUpdate');
    }

// 渲染阶段：返回虚拟dom
    render(){
        console.log('render');
        return (
            <View style={styles.lifeStyle} >
                <Text onPress={()=>{
                    this.setState({
                        age:1
                    });
                }}>修改state</Text>
            </View>
        );
    }
}

// 主组件
export default class ReactDemo extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name:'xmg'
    //     }
    // }

    render() {
        return (
            <View style={{flex:1,marginBottom:50}}>
            <LifeCompoent name={"xmg"} />
                <Text onPress={()=>{
                    this.setState({
                        name : 'yz'
                    })
                }}>修改props</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    lifeStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
