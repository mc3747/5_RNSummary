import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';


let {height,width} = Dimensions.get('window');
const NavigatorBarHeight = 64;

export default class CommonNavigationBar extends Component {

    // 暴露属性
    static propTypes = {
        // 左边按钮
        leftBarButtonItem:PropTypes.any,
        // 中间View
        middleView:PropTypes.any,
        // 右边按钮
        rightBarButtonItem:PropTypes.any,
        // 中间标题
        title:PropTypes.string,
        // 中间标题样式
        titleStyle:PropTypes.any,
        // 导航条整个内容,完全由自己自定义
        contentView:PropTypes.any
    };

    constructor(props){
        super(props);

        // 不能同时设置中间标题和中间View
        if (this.props.title && this.props.middleView)  throw "导航控制器不能同时设置title,middleView"

        // 设置了contentView,不要同时设置其他属性
        if (this.props.contentView && (this.props.middleView ||
            this.props.rightBarButtonItem || this.props.title  ||
            this.props.titleStyle || this.props.contentView)
        ) throw "设置了contentView,其他设置无效,不要同时设置"

    }

    // 渲染内容层
    renderContentView(){
        return (
            <View style={styles.contentViewStyle}>
                {/*左边*/}
                <View style={styles.leftStyle}>
                    {this.props.leftBarButtonItem}
                </View>

                {/*中间*/}
                <View style={styles.middleStyle}>
                    {this.props.title?this.renderMiddleTitle():this.props.middleView}
                </View>

                {/*右边*/}
                <View style={styles.rightStyle}>
                    {this.props.rightBarButtonItem}
                </View>
            </View>
        )
    }

    // 渲染中间标题
    renderMiddleTitle(){
        return <Text style={[styles.middleTitleStyle,this.props.titleStyle]}>{this.props.title}</Text>
    }

    // 主要渲染
    render() {
        return (
            <View style={[styles.barStyle,this.props.barStyle]}>
                {this.props.contentView?this.props.contentView:this.renderContentView()}
            </View>
        );
    }
}

// 样式
var styles = StyleSheet.create({
    barStyle:{
        backgroundColor:'white',
        width:width,
        height:NavigatorBarHeight,
        flexDirection:'row'
    },
    contentViewStyle:{
        flexDirection:'row',
        width:width,
        height:44,
        backgroundColor:'white',
        position:'absolute',
        bottom:0
    },
    leftStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    middleStyle:{
        flex:4,
        justifyContent:'center',
        alignItems:'center'
    },
    rightStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    middleTitleStyle:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    }
});

