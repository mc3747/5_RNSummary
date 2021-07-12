import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import  SafeView  from 'react-native-safe-area-view';

export default class BasicConcept extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
            return (
                <SafeView style={{ flex: 1 }}>
                    <Text style={{backgroundColor:'red'}}>
                        首页
                        1
                        12
                    </Text>
                </SafeView>
            )
        }
}   
