import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
export default class UIConcept extends Component {
    constructor(props) {
        super(props);
    }
    render() {
            return (
                <Text style={{backgroundColor:'green'}}>
                    首页
                </Text>
            )
        }
}