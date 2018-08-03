import React, { Component,PropTypes} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity

} from 'react-native';
/* 
目标：
1，高亮背景色
2，高亮文字
3，高亮背景图片
4，高亮透明度
*/
export default class CommonHighButtonButton extends Component {

    static propTypes = {
        // 普通状态
        title:PropTypes.string,
        imageUri:PropTypes.string,
        titleStyle:PropTypes.string,
        imageStyle:PropTypes.object,

        // 高亮状态
        highImageUri:PropTypes.string,
        highTitleStyle:PropTypes.object,

        // 监听点击
        onPressIn:PropTypes.func,
        onPressOut:PropTypes.func,

        // 按钮样式
        buttonStyle:PropTypes.string

    };

    constructor(props){
        super(props);

        this.state = {
            highLighted:false
        }
    }

    render() {
        return (
            <TouchableOpacity style={[styles.buttonStyle,this.props.buttonStyle]}
                              onPressIn={()=>{
                                  this.setState({
                                      highLighted:true
                                  });

                                  if (this.props.onPressIn){
                                      this.props.onPressIn(this);
                                  }

                              }}
                              onPressOut={()=>{
                                  this.setState({
                                      highLighted:false
                                  });
                                  if (this.props.onPressOut){
                                      this.props.onPressOut(this);
                                  }
                                }
                              }
                              activeOpacity={this.props.highTitleStyle || this.props.highImageUri?0.9:0.3}
            >

                {/*文字*/}
                {this.props.title?<Text style={[this.props.titleStyle,this.state.highLighted?this.props.highTitleStyle:null]}>{this.props.title}</Text>:null}

                {/*头像*/}
                {this.props.imageUri?<Image source={{uri:this.state.highLighted && this.props.highImageUri?this.props.highImageUri:this.props.imageUri}} style={[styles.imageStyle,this.props.imageStyle]}/> : null}

            </TouchableOpacity>
        );
    }


}

var styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        marginLeft:3
    }
});

