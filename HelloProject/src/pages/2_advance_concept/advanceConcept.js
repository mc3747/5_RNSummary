import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
export default class AdvanceConcept extends Component {
    constructor(props) {
        super(props);
    }
    render() {
            return (
                <View>
                    <Text style={{backgroundColor:'yellow'}}>
                        首页
                    </Text>
                    <Text style={{backgroundColor:'yellow'}}>
                        首页
                    </Text>
                    <Text style={{backgroundColor:'yellow'}}>
                        首页
                    </Text>
                    <Text style={{backgroundColor:'yellow'}}>
                        首页
                    </Text>
                    <Image source={require('HelloProject/src/images/tabBar_home_selected.png')} />
                    <Image source={require('../../images/tabBar_home_selected.png')}/>
                </View>
                
            )
        }
}