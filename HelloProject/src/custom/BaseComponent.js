import React, { Component } from "react";
import { StatusBar, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-navigation";
import { BackHandler } from "react-native";

export default class Base extends Component {
    constructor(props) {
        super(props);
        if (props.navigation) {
            //如果是在nav中的组件。添加安卓返回键监听
            this._didFocusSubscription = props.navigation.addListener(
                "didFocus",
                payload =>
                    BackHandler.addEventListener(
                        "hardwareBackPress",
                        this._onBackButtonPressAndroid
                    )
            );
        }
    }
    /**
     * ✅_1_可以在继承类中重写的方法
     */
    //状态栏配置文件
    _statusBarConfig = {};
    //处理安卓返回键，默认直接可以返回，子继承类中重写此方法可以自定义处理安卓返回键
    _onBackButtonPressAndroid = () => {
        //当return true时，会阻止默认的返回事件
        return false;
    };

    /**
     * ✅_2_LifeCircle
     * 在被继承的Component中重写这两个方法作为新的生命周期使用
     * !!!!!一定要使用箭头函数的形式
     * 不要重写旧的componentDidMount和DidUnmount
     */

    BaseComponentWillMount = () => {};
    BaseRender = () => {};
    BaseComponentDidMount = () => {};
    BaseComponentWillUnmount = () => {};
    /**
     * 原有lifeCircle
     */

    componentDidMount = () => {
        if (this.props.navigation) {
            //添加状态栏以及安卓返回键监听
            Platform.OS === "android" && this.setAndroidBackListener();
            this.setStatusBarListener();
        }
        this.BaseComponentDidMount();
    };
    UNSAFE_componentWillMount = () => {
        this.BaseComponentWillMount();
    };
    componentWillUnmount = () => {
        this._statusBarListener && this._statusBarListener.remove();
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
        this.BaseComponentWillUnmount();
    };

    //✅_3_添加页面切换时状态栏监听
    setStatusBarListener = () => {
        const barConfig = {
            contentType: "dark-content", //状态栏文字颜色 enum('default', 'light-content', 'dark-content')
            androidTranslucent: true, //状态栏是否沉浸式。需要配合backgroundColor为透明色来一起配置
            androidBarBackgroundColor: null, //状态栏背景颜色
            hidden: false, //是否隐藏状态栏
            ...this._statusBarConfig
        };
        this._statusBarListener = this.props.navigation.addListener(
            "didFocus",
            () => {
                StatusBar.setBarStyle(barConfig.contentType);
                StatusBar.setHidden(barConfig.hidden);
                //安卓沉浸式
                if (Platform.OS === "android") {
                    StatusBar.setTranslucent(barConfig.androidTranslucent);
                    if (barConfig.androidTranslucent) {
                        //安卓沉浸式
                        StatusBar.setBackgroundColor("transparent");
                    } else {
                        barConfig.androidBarBackgroundColor &&
                            StatusBar.setBackgroundColor(barConfig.androidBarBackgroundColor);
                    }
                }
            }
        );
    };
    
    setAndroidBackListener = () => {
        this._willBlurSubscription = this.props.navigation.addListener(
            "willBlur",
            payload =>
                BackHandler.removeEventListener(
                    "hardwareBackPress",
                    this._onBackButtonPressAndroid
                )
        );
    };

    render = () => {
        return (
            <SafeAreaView
                style={[baseStyles.safeArea, this.safeAreaStyles]}
                forceInset={this.forceInset}
            >
                {this.BaseRender()}
            </SafeAreaView>
        );
    };
}

const baseStyles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#ffffff',
        flex: 1
    }
});
