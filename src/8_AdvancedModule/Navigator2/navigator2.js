
import React, { Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import CommonNavigationBar from './selfNavigator';

export default class navigator2 extends Component {

    render() {
        return (
            <View style={styles.viewStyle}>
                <CommonNavigationBar 
                        middleView={this.renderMiddleView()}
                        leftBarButtonItem={this.renderLeftBarButtonItem()}
                        rightBarButtonItem={this.renderRightBarButtonItem()}
                />
            </View>
        );
    }


    renderMiddleView(){
        return (
            <View>
                <Text>微信</Text>
            </View>
        )
    }

    renderLeftBarButtonItem(){
        return (
            <TouchableOpacity>
                <Image source={{uri:'play-button-3'}} style={{width:20,height:20}}/>
            </TouchableOpacity>
        )
    }
    renderRightBarButtonItem(){
        return (
            <TouchableOpacity>
                <Text>右边</Text>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
 
});